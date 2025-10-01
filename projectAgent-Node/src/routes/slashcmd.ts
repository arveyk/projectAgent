import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { createBlockNewTask } from "../blockkit/createBlocks.js";
import { createUpdateBlock } from "../blockkit/updateBlock.js";
import { parseTaskSlashCmd } from "../utils/aiagent";
import { searchDB, getTaskProperties } from "../utils/db-search.js";
import { sendLoadingMsg } from "../blockkit/loadingMsg.js";
import { getMatchingUser } from "../utils/controllers/userCreds.js";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import { SlashCommand } from "@slack/bolt";

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

      const timestamp = request.headers["x-slack-request-timestamp"];
      console.log(`timestamp: ${timestamp}`);
      const task = await parseTaskSlashCmd(request.body as SlashCommand, timestamp as string);

      await sendLoadingMsg("Searching Database", response_url);
      const isInDatabase = await searchDB(task);
      console.log("IS in database?", JSON.stringify(isInDatabase));

      if (!isInDatabase) {
        throw new Error("Error searching database");
      }

      if (isInDatabase.exists) {
        console.log("Already in Database");

        const pageObject = await getTaskProperties(isInDatabase.taskId || "");
        if ("properties" in pageObject) {
          // TODO type narrowing

          const properties = pageObject["properties"];
          const existingTask = {
            taskTitle: "title" in properties["Task Title"] ? properties["Task Title"].title[0].plain_text : "No Title Provided",
            assignee: "rich_text" in properties.Assignee ? properties["Assignee"].rich_text[0].plain_text : "No Assignee",
            dueDate: "date" in properties["Due Date"] ? properties["Due Date"].date ? properties["Due Date"].date.start : "": "date Undefined",
            startDate: "date" in properties["Start Date"] ? properties["Start Date"].date ? properties["Start Date"].date.start: "": "date Undefined",
            email: "email" in properties["Email"] ? properties["Email"].email : "",
            phoneNumber: "phone_number" in properties["Phone Number"] ? properties["Phone Number"].phone_number : "",
            preferredChannel:
              "rich_text" in properties["Preferred Channel"] ? properties["Preferred Channel"].rich_text[0].plain_text: "",
            description: "rich_text" in properties["Description"] ? properties["Description"].rich_text[0].plain_text : "",
            project: "rich_text" in properties["Project"] ?  properties["Project"].rich_text[0].plain_text: "",
            url: pageObject.url,
            pageID: pageObject.id,
          };
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
        let searchUserInSlack_Notion: PageObjectResponse = await getMatchingUser(task);
        const taskBlock = createBlockNewTask(task);
        // taskBlock.blocks[0].text.text += JSON.stringify(
        //   searchUserInSlack_Notion,
        // );
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