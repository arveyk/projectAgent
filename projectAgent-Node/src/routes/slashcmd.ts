import axios from "axios";
import { createExistingTaskBlock } from "../blockkit/createExistingTaskBlock";
import { parseTask } from "../utils/aiagent";
import {
  searchDatabase,
  getTaskProperties,
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
  TaskPage,
} from "../utils/taskFormatting/task";
import { GetPageResponse } from "@notionhq/client";
import { APIGatewayProxyEventV2, Context, StreamifyHandler } from "aws-lambda";
import {
  isValidCommand,
  extractRequestBody,
} from "../utils/slashCommandProcessing";
import { createNewTaskBlock } from "../blockkit/createNewTaskBlock";

const slashCmdHandler: StreamifyHandler = async function (
  event: APIGatewayProxyEventV2,
  responseStream: awslambda.HttpResponseStream,
  context: Context,
) {
  console.log("We are now in the slashcmd handler");
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
  responseStream.write("Slash command activated\n");
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

      // Search database
      await sendLoadingMessage(
        "Searching Database",
        response_url,
        reqBody.text,
      );
      logTimestampForBenchmarking("Searching database");
      const isInDatabase = await searchDatabase(reqBody.text);
      logTimestampForBenchmarking("Done searching database");

      console.log("IS in database?", JSON.stringify(isInDatabase));

      await sendLoadingMessage("Parsing Task", response_url);
      const timestamp: number = Date.now();

      logTimestampForBenchmarking("Parsing task");
      const parsedData = await parseTask(reqBody, timestamp);
      logTimestampForBenchmarking("Done parsing task");

      // Find Notion users
      const assigneeSearchResults = await findMatchingAssignees(
        parsedData.task,
      );

      if (!isInDatabase) {
        throw new Error("Error searching database");
      }

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
          const updateBlock = await createExistingTaskBlock(existingTask);
          console.log("Update Block", JSON.stringify(updateBlock));

          axios({
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
        console.log(
          "Task to be passed to createNewTaskBlock",
          JSON.stringify(parsedData),
        );

        const assignedBy = await findAssignedBy(parsedData.taskCreator);
        const slackBlocks = await createNewTaskBlock(
          assignedBy,
          parsedData.task,
          assigneeSearchResults,
        );

        console.log("SlashCmdHandler taskBlockWithSelect", slackBlocks);

        axios({
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
    console.log("slachCmdHandler Error", err);
    return err;
  } finally {
    logTimestampForBenchmarking("Execution finished");
  }
};

export default slashCmdHandler;
