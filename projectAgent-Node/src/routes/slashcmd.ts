import { createExistingTaskBlock } from "../blockkit/createExistingTaskBlock";
import { parseTask } from "../utils/aiagent";
import {
  searchDatabase,
  getTaskProperties,
  getProjects,
  simplifyProject,
} from "../utils/database/searchDatabase";
import { sendLoadingMessage } from "../blockkit/loadingMessage";
import {
  findNotionProfileOfAssignedBy,
  findMatchingAssignees,
} from "../utils/controllers/findMatchingNotionUsers";
import { logTimestampForBenchmarking } from "../utils/logTimestampForBenchmarking";
import { SlashCommand } from "@slack/bolt";
import {
  convertTaskPageFromDbResponse,
} from "../utils/taskFormatting/task";
import { NotionUser, SlackUser } from "../utils/controllers/userTypes";
import { Task, TaskPage } from "../domain";
import { GetPageResponse, isFullPage } from "@notionhq/client";
import { APIGatewayProxyEventV2, Context, StreamifyHandler } from "aws-lambda";
import {
  extractRequestBody,
} from "../utils/slashCommandProcessing";
import { createNewTaskBlock } from "../blockkit/createNewTaskBlock";
import { createCacheClient, retrieveCache } from "../utils/database/getFromCache";
import { getNotionUsers } from "../utils/controllers/getUsersNotion";
import { getAppUserData } from "../utils/controllers/getUsersSlack";
import { setDefaults } from "../utils/taskFormatting/setDefaults";
import { inferInputSource } from "../utils/controllers/contextResolution/inferInputSource";
import { sendBlockResponse } from "../externalService/slackApiService";


const slashCmdHandler: StreamifyHandler = async function (
  event: APIGatewayProxyEventV2,
  responseStream: awslambda.HttpResponseStream,
  context: Context,
) {

  const timestamp: number = Date.now();
  console.log("We are now in the slashcmd handler: Activation Timestamp", timestamp);
  logTimestampForBenchmarking("Execution start");

  const httpResponseMetadata = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  };

  responseStream = awslambda.HttpResponseStream.from(
    responseStream,
    httpResponseMetadata,
  );
  responseStream.end();

  console.log(
    `Event: ${JSON.stringify(event)}\nContext: ${JSON.stringify(context)}`,
  );

  try {
    const reqBody = extractRequestBody(event) as SlashCommand;
    console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(reqBody)}`);
    console.log(`headers: ${JSON.stringify(event.headers)}`);

    const inferredContext = await inferInputSource(reqBody, timestamp);

    if (inferredContext.error === null) {
      const response_url = reqBody["response_url"];

      // Fetch cache
      await sendLoadingMessage(
        "Searching Database",
        response_url,
        inferredContext.text,
      );
      logTimestampForBenchmarking("Fetching cache");
      const cacheClient = createCacheClient();
      const cacheItems = await retrieveCache(cacheClient);
      logTimestampForBenchmarking("Done fetching cache");
      const fetchedProjects = cacheItems.projects;
      const fetchedTasks = cacheItems.tasks;
      const fetchedUsers = cacheItems.users;

      // Query all relevant data and use for subsequent steps

      const allNotionProjects = await getProjects(fetchedProjects);
      const notionUsers: NotionUser[] = (await getNotionUsers(fetchedUsers)).map(
        (user) => {
          return { userId: user.userId, name: user.name, email: user.email }
        }
      ).filter(user => user !== undefined);

      // Search database
      logTimestampForBenchmarking("Searching database");

      const taskSearchResult = await searchDatabase(inferredContext.text, fetchedTasks);
      logTimestampForBenchmarking("Done searching database");

      console.log("IS in database?", JSON.stringify(taskSearchResult));

      await sendLoadingMessage("Parsing Task", response_url);

      const appUserData = await getAppUserData(reqBody, timestamp);

      logTimestampForBenchmarking("Parsing task");
      const parsedTask = await parseTask(
        reqBody,
        inferredContext.text,
        appUserData.eventTimeData,
        fetchedProjects ? fetchedProjects.filter(
          project => isFullPage(project)
        ).map(
          project => simplifyProject(project)
        ).filter(
          project => project !== undefined
        ) : [],
      );
      logTimestampForBenchmarking("Done parsing task");

      // Set default start/due dates and assignees
      const parsedTaskWithDefaults: Task = setDefaults(appUserData, parsedTask);

      logTimestampForBenchmarking("Searching Notion for assignees");
      const assigneeSearchResults = await findMatchingAssignees(
        parsedTaskWithDefaults,
        notionUsers,
      );
      logTimestampForBenchmarking("Done searching Notion for assignees");

      if (!taskSearchResult) {
        throw new Error("Error searching database");
      }
      // Task Already in Database
      if (taskSearchResult.exists) {
        console.log("Already in Database");

        const pageObject: GetPageResponse = await getTaskProperties(
          taskSearchResult.taskId || "",
        );

        if ("properties" in pageObject) {
          const existingTask: TaskPage =
            convertTaskPageFromDbResponse(pageObject);
          console.log(
            `(slashCmdHandler) existingTask: ${JSON.stringify(existingTask)}`,
          );
          const updateBlock = createExistingTaskBlock(
            existingTask,
            allNotionProjects,
          );
          console.log("Update Block", JSON.stringify(updateBlock));

          await sendBlockResponse(reqBody["response_url"],
            updateBlock.blocks,
          );

        } else {
          throw new Error("Error getting page properties");
        }
      } else {
        // Process New Task
        console.log(
          "Task to be passed to createNewTaskBlock",
          JSON.stringify(parsedTaskWithDefaults),
        );

        const taskCreator: SlackUser = {
          ...appUserData,
        };
        const assignedBy = await findNotionProfileOfAssignedBy(taskCreator, notionUsers);
        const slackBlocks = createNewTaskBlock(
          assignedBy,
          parsedTaskWithDefaults,
          assigneeSearchResults,
        );

        console.log(
          "SlashCmdHandler taskBlockWithSelect",
          JSON.stringify(slackBlocks),
        );
        await sendBlockResponse(reqBody["response_url"], slackBlocks.blocks);
      }
    } else {
      const response = await sendBlockResponse(reqBody["response_url"], [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `> Error Encountered while attempting to create task, Please try again\nError: ${String(inferredContext.error)}`,
          }
        }
      ]);
      console.log(response.data.status);
    }
  } catch (err: Error | any) {
    console.log("slashCmdHandler Error", String(err));
    
    // POST On Dev Channel

    return err;
  } finally {
    logTimestampForBenchmarking("Execution finished");

  }

};

export default slashCmdHandler;
