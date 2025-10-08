import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { createBlockNewTask } from "../blockkit/createBlocks";
import { createUpdateBlock } from "../blockkit/updateBlock";
import { parseTaskSlashCmd } from "../utils/aiagent";
import { searchDB, getTaskProperties } from "../utils/db-search";
import { sendLoadingMsg } from "../blockkit/loadingMsg";
import { getMatchingUser } from "../utils/controllers/userCreds";
// import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { SlashCommand } from "@slack/bolt";
import { convertTaskPageFromDbResponse, TaskPage } from "../utils/task";
import { GetPageResponse } from "@notionhq/client";

// webhook for taskmanagement channel only
const webhookURL = process.env.TASK_MANAGEMENT_WEBHOOK_URL;
const webhookURL0 = "https:slack.com/api/chat.postEphimeral";
console.log(webhookURL0);

const slashCmdHandler = async function (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  // Send OK
  response.status(200).send();

  try {
    console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
    console.log(`headers: ${JSON.stringify(request.headers)}`);
    // const command = request.body["command"];
    const validate = isValidCmd(request.body);
    if (validate.isValid) {
      const response_url = request.body["response_url"];

      await sendLoadingMsg("Parsing Task", response_url);

      const timestamp: number = Date.now();
      console.log(`timestamp: ${timestamp}`);

      // Sample payloads can be found in ../test-data/payloads/slashcmd/payloads.ts
      const task = await parseTaskSlashCmd(
        request.body as SlashCommand,
        timestamp,
      );

      await sendLoadingMsg("Searching Database", response_url);
      const isInDatabase = await searchDB(task);
      console.log("IS in database?", JSON.stringify(isInDatabase));

      if (!isInDatabase) {
        throw new Error("Error searching database");
      }

      if (isInDatabase.exists) {
        console.log("Already in Database");

        const pageObject: GetPageResponse = await getTaskProperties(isInDatabase.taskId || "");
        if ("properties" in pageObject) {

          const existingTask: TaskPage = convertTaskPageFromDbResponse(pageObject);
          console.log(`(slashCmdHandler) existingTask: ${JSON.stringify(existingTask)}`);
          // existingTask.startDate = new Date(existingTask.startDate)
          const updateBlock = createUpdateBlock(existingTask);

          axios({
            method: "post",
            url: request.body["response_url"],
            data: {
              text: "Already in DB",
              blocks: updateBlock.blocks,
            },
            family: 4,
          }).then((resp) => {
            console.log("OK from slack", resp["status"]);
          });
        } else {
          throw new Error("Error getting page properties");
        }
      } else {
        let searchUserInSlack_Notion = await getMatchingUser(task);
        console.log(
          "Task to be passed to createBloclNewTask",
          JSON.stringify(task),
        );
        const taskBlock = createBlockNewTask(task);
        taskBlock.blocks[0].text
          ? (taskBlock.blocks[0].text.text += JSON.stringify(
              searchUserInSlack_Notion,
            ))
          : console.log("First Text undefined");
        axios({
          method: "post",
          url: request.body["response_url"],
          data: taskBlock,
          family: 4,
        }).then((resp) => {
          console.log("OK from slack", resp["status"]);
        });
      }
    } else {
      axios({
        method: "post",
        url: request.body["response_url"],
        data: {
          text: "Format: add ['Task Details']",
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
    console.log(err);
    return err;
  }
};

/**
 * Parses a slash command and determines if it is a valid command.
 * @param {*} reqBody Request from Slack containing a slash command
 * @returns true if the slash command is valid, else returns false.
 */
export function isValidCmd(reqBody: Request["body"]): {
  isValid: boolean;
  action?: string;
} {
  const commandParams = reqBody["text"].trim().split(" ");
  let firstArg = commandParams[0];
  let otherArgs = commandParams.slice(1, -1).join(" ");
  const isValidCmd = {
    isValid: false,
    action: "",
  };

  isValidCmd.isValid =
    (firstArg.toLowerCase() === "add" || "update") && otherArgs.length >= 5;
  firstArg === "add" ? (isValidCmd.action = "add") : "update";
  return isValidCmd;
}

export default slashCmdHandler;
