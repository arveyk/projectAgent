import axios from "axios";
import { createExistingTaskBlock } from "../blockkit/createExistingTaskBlock";
import { parseTask } from "../utils/aiagent";
import {
  searchDatabase,
  getTaskProperties,
  getProjects,
} from "../utils/database/searchDatabase";
import { sendLoadingMessage } from "../blockkit/loadingMessage";
import {
  findAssignedBy,
  findMatchingAssignees,
} from "../utils/controllers/findMatchingNotionUsers";
import { logTimestampForBenchmarking } from "../utils/logTimestampForBenchmarking";
import { SlashCommand } from "@slack/bolt";
import {
  convertTaskPageFromDbResponse,
} from "../utils/taskFormatting/task";
import { TaskPage } from "../utils/taskFormatting/taskAndProjectTypes";
import { GetPageResponse } from "@notionhq/client";
import { APIGatewayProxyEventV2, Context, StreamifyHandler } from "aws-lambda";
import {
  isValidCommand,
  extractRequestBody,
} from "../utils/slashCommandProcessing";
import { createNewTaskBlock } from "../blockkit/createNewTaskBlock";
import {
  createCacheClient,
  retrieveCache,
} from "../utils/database/getFromCache";
import { getNotionUsers } from "../utils/controllers/getUsersNotion";

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

    const commandValidationResult = isValidCommand(reqBody);
    if (commandValidationResult.isValid) {
      const response_url = reqBody["response_url"];

      // Fetch cache
      await sendLoadingMessage(
        "Searching Database",
        response_url,
        reqBody.text,
      );
      logTimestampForBenchmarking("Fetching cache");
      const cacheClient = createCacheClient();
      const cacheItems = await retrieveCache(cacheClient);
      logTimestampForBenchmarking("Done fetching cache");
      const fetchedProjects = cacheItems.projects;
      const fetchedTasks = cacheItems.tasks;
      const fetchedUsers = cacheItems.users;

      // Query all relevant data and use for subsequest steps

      const allNotionProjects = await getProjects(fetchedProjects);
      const notionUsers = await getNotionUsers(fetchedUsers);

      // Search database
      logTimestampForBenchmarking("Searching database");
      // TODO only pass data needed
      const isInDatabase = await searchDatabase(reqBody.text, fetchedTasks);
      logTimestampForBenchmarking("Done searching database");

      console.log("IS in database?", JSON.stringify(isInDatabase));

      await sendLoadingMessage("Parsing Task", response_url);

      logTimestampForBenchmarking("Parsing task");


      const parsedData = await parseTask(reqBody, timestamp, allNotionProjects);

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
        fetchedUsers,
      );
      logTimestampForBenchmarking("Done searching Notion for assignees");

      if (!isInDatabase) {
        throw new Error("Error searching database");
      }
      // Task Already in Database
      if (isInDatabase.exists) {
        console.log("Already in Database");

        const pageObject: GetPageResponse = await getTaskProperties(
          isInDatabase.taskId || "",
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

          await axios({
            method: "post",
            url: reqBody["response_url"],
            data: {
              text: "Already in DB",
              blocks: updateBlock.blocks,
            },
            family: 4,
          })
            .then((resp) => {
              console.log("OK from slack", resp["status"]);
            })
            .catch((err) => {
              console.log(
                "(slashCmdHandler): Axios Error while posting updateBlock",
              );
            });
        } else {
          throw new Error("Error getting page properties");
        }
      } else {
        // Process New Task
        console.log(
          "Task to be passed to createNewTaskBlock",
          JSON.stringify(parsedData),
        );

        const assignedBy = findAssignedBy(
          parsedData.taskCreator,
          notionUsers,
        );
        const slackBlocks = createNewTaskBlock(
          assignedBy,
          parsedData.task,
          assigneeSearchResults,
        );

        console.log(
          "SlashCmdHandler taskBlockWithSelect",
          JSON.stringify(slackBlocks),
        );

        await axios({
          method: "post",
          url: reqBody["response_url"],
          data: slackBlocks,
          family: 4,
        }).then((resp) => {
          console.log("OK from slack", resp["status"]);
        });
      }
    } else {
      axios({
        method: "post",
        url: reqBody["response_url"],
        data: {
          text: "Format: ['Task Details']",
        },
        family: 4,
      }).then((resp) => {
        console.log(
          "OK from slack Wrong command format Though",
          resp["status"],
        );
      });
    }
  } catch (err: Error | any) {
    console.log("slashCmdHandler Error", String(err));
    return err;
  } finally {
    logTimestampForBenchmarking("Execution finished");
  }
};

export default slashCmdHandler;
