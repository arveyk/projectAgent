import axios from "axios";
import { createBlockNewTask } from "../blockkit/createBlocks.js";
import { createUpdateBlock } from "../blockkit/updateBlock.js";
import { convertEmptyFields } from "../utils/convertEmptyFields.js";
import { parseTaskSlashCmd } from "../utils/aiagent.js";
import { searchDB } from "../utils/db-search.js";

// webhook for taskmanagement channel only
const webhookURL = process.env.TASK_MANAGEMENT_WEBHOOK_URL;
const webhookURL0 = "https:slack.com/api/chat.postEphimeral";
console.log(webhookURL0);

const slashCmdHandler = async function (request, response, next) {
  // Send OK
  response.status(200).send(
    JSON.stringify({
      challenge: request.body["challenge"],
    }),
  );

  try {
    console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
    const command = request.body["command"];

    const commandParams = request.body["text"].trim().split(" ");
    let firstArg = commandParams[0];
    let otherArgs = commandParams.slice(1, -1).join(" ");

    if (firstArg !== "add" || otherArgs.length < 5) {
      axios({
        method: "post",
        url: request.body["response_url"],
        data: {
          text: "Format: add ['Task Details']",
        },
      }).then((resp) => {
        console.log(
          "OK from slack Wrong command format Though",
          resp["status"],
        );
      });

    } else {
      const task = await parseTaskSlashCmd(request.body);
      const convertedTask = convertEmptyFields(task);

      const isInDatabase = await searchDB(convertedTask);
      console.log("IS in database?", JSON.stringify(isInDatabase));
      const taskBlock = createBlockNewTask(convertedTask);
      console.log(`block create by task$${JSON.stringify(taskBlock)}`);

      if (isInDatabase.exists) {
        console.log("Already in Database");
	const updateBlock = createUpdateBlock(task);

        axios({
          method: "post",
          url: request.body["response_url"],
          data: {
            text: "Already in DB",
            blocks: updateBlock.blocks
          },
        }).then((resp) => {
          console.log("OK from slack", resp["status"]);
        });
      } else {
        axios({
          method: "post",
          url: request.body["response_url"],
          data: taskBlock,
        }).then((resp) => {
          console.log("OK from slack", resp["status"]);
        });
      }
    }
  } catch (err) {
    console.log(err);
    return response.status(404).send("Server Error in SlashCmdHandler", err);
  }
};

export default slashCmdHandler;
