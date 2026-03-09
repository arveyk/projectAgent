import { createExistingTaskBlock } from "../blockkit/createExistingTaskBlock";
import { parseTask } from "../utils/aiagent";
import {
  searchDatabase,
  getTaskProperties,
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
  TaskPage,
} from "../utils/taskFormatting/task";
import { GetPageResponse } from "@notionhq/client";
import { APIGatewayProxyEventV2, Context, StreamifyHandler } from "aws-lambda";
import {
  extractRequestBody,
} from "../utils/slashCommandProcessing";
import { createNewTaskBlock } from "../blockkit/createNewTaskBlock";
import { createCacheClient, retrieveCache } from "../utils/database/getFromCache";
import { inferInputSource } from "../utils/controllers/contextResolution/inferInputSource";
import { sendBlockResponse } from "../externalService/slackApiService";

const slashCmdHandler: StreamifyHandler = async function (
  event: APIGatewayProxyEventV2,
  responseStream: awslambda.HttpResponseStream,
  context: Context,
) {
  console.log("We are now in the slashcmd handler");
  logTimestampForBenchmarking("Execution start");
  const timestamp: number = Date.now();

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

      // Search database
      logTimestampForBenchmarking("Searching database");
      // TODO only pass data needed


      const taskSearchResult = await searchDatabase(inferredContext.text, fetchedTasks);
      logTimestampForBenchmarking("Done searching database");

      console.log("IS in database?", JSON.stringify(taskSearchResult));

      await sendLoadingMessage("Parsing Task", response_url);

      logTimestampForBenchmarking("Parsing task");
      const parsedData = await parseTask(reqBody, inferredContext.text, timestamp, fetchedProjects);
      logTimestampForBenchmarking("Done parsing task");

      logTimestampForBenchmarking("Searching Notion for assignees");
      // Find Notion users
      // TODO - Suggestions call getNotionUsers here and use that list to search for a match
      //    some like const allNotionUsers or allDatabasePersons = getNotionUsers(fetchedUsers)
      //    pass that to findMatchingAssignees
      //    can also be passed to
      //        findAssignedBy
      //        and createNewtask
      // Benefits:
      //      Reduced number of API calls by getNotionUsers
      const assigneeSearchResults = await findMatchingAssignees(
        parsedData.task,
        fetchedUsers
      );
      logTimestampForBenchmarking("Done searching Notion for assignees");

      if (!taskSearchResult) {
        throw new Error("Error searching database");
      }

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
          const updateBlock = await createExistingTaskBlock(existingTask, fetchedProjects);
          console.log("Update Block", JSON.stringify(updateBlock));
          
          await sendBlockResponse(reqBody["response_url"],
            updateBlock.blocks,
          );
          
        } else {
          throw new Error("Error getting page properties");
        }
      } else {
        console.log(
          "Task to be passed to createNewTaskBlock",
          JSON.stringify(parsedData),
        );

        const assignedBy = await findNotionProfileOfAssignedBy(parsedData.taskCreator, fetchedUsers);
        const slackBlocks = createNewTaskBlock(
          assignedBy,
          parsedData.task,
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
            "text": `> Error Encoutered while attempting to create task, Please try again\nError: ${String(inferredContext.error)}`,
          }
        }
      ]);        
      console.log(response.data.status);
    }
  } catch (err: Error | any) {
    console.log("slashCmdHandler Error", String(err));
    return err;
  } finally {
    logTimestampForBenchmarking("Execution finished");

  }

};

export default slashCmdHandler;
