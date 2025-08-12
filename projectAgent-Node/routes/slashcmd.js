import axios from "axios";
import { createBlockNewTask } from "../blockkit/createBlocks.js";
import { createUpdateBlock } from "../blockkit/updateBlock.js";
import { convertEmptyFields } from "../utils/convertEmptyFields.js";
import { parseTaskSlashCmd } from "../utils/aiagent.js";
import { filterMessages } from "@langchain/core/messages";
import { searchDB, getTaskProperties } from "../utils/db-search.js";

// webhook for taskmanagement channel only
const webhookURL = process.env.TASK_MANAGEMENT_WEBHOOK_URL;
const webhookURL0 = "https:slack.com/api/chat.postEphimeral";
console.log(webhookURL0);

const slashCmdHandler = async function (request, response, next) {
  // Send OK
  response.status(200).send();

  try {
    console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
    console.log(`headers: ${JSON.stringify(request.headers)}`)
    const command = request.body["command"];
    const validate = isValidCmd(request.body);
    if (validate.isValid) {
      const timestamp = request.headers["x-slack-request-timestamp"];
      console.log(`timestamp: ${timestamp}`)
      const task = await parseTaskSlashCmd(request.body, timestamp);
      const convertedTask = convertEmptyFields(task);

      const isInDatabase = await searchDB(convertedTask);
      console.log("IS in database?", JSON.stringify(isInDatabase));

      if (isInDatabase.exists) {
        console.log("Already in Database");

        const pageObject = await getTaskProperties(isInDatabase.task_id);
        const properties = pageObject.properties;
        const existingTask = {
          tasktitle: properties["Task Title"].title[0].plain_text,
          assignee: properties["Assignee"].rich_text[0].plain_text,
          duedate: properties["Due Date"].date.start,
          startdate: properties["Start Date"].date.start,
          email: properties["Email"].email,
          phonenumber: properties["Phone Number"].phone_number,
          preferredchannel:
            properties["Preferred Channel"].rich_text[0].plain_text,
          taskdetail: properties["Description"].rich_text[0].plain_text,
          project: properties["Project"].rich_text[0].plain_text,
          url: pageObject.url,
          pageID: pageObject.id,
        };
        const convertedExistingTask = convertEmptyFields(existingTask);
        const updateBlock = createUpdateBlock(convertedExistingTask);

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
        const taskBlock = createBlockNewTask(convertedTask);
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
  } catch (err) {
    console.log(err);
    return ("Server Error in SlashCmdHandler", err);
  }
};

/**
 * Parses a slash command and determines if it is a valid command.
 * @param {*} reqBody Request from Slack containing a slash command
 * @returns true if the slash command is valid, else returns false.
 */
export function isValidCmd(reqBody) {
  const commandParams = reqBody["text"].trim().split(" ");
  let firstArg = commandParams[0];
  let otherArgs = commandParams.slice(1, -1).join(" ");
  const isValidCmd = {};
  isValidCmd.isValid =
    (firstArg.toLowerCase() === "add" || "update") && otherArgs.length >= 5;
  firstArg === "add" ? (isValidCmd.action = "add") : "update";
  return isValidCmd;
}

export default slashCmdHandler;
