import {
  createBlockNewTask
} from "../blockkit/createBlocks.js";
import axios from "axios";
import { parseTaskSlashCmd } from "../utils/aiagent.js";
import { convertEmptyFields } from "../utils/convertEmptyFields.js";
import { searchDB } from "../utils/db-search.js";


// webhook for taskmanagement channel only
const webhookURL = process.env.TASK_MANAGEMENT_WEBHOOK_URL;
const webhookURL0 = "https:slack.com/api/chat.postEphimeral";
console.log(webhookURL0);
const slashCmdHandler = async function (request, response, next) {
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
          // "response_type": "ephemeral",
          // "replace_original": false,
          text: "Format: add ['Task Details']",
        },
      }).then((resp) => {
        console.log(
          "OK from slack Wrong command format Though",
          resp["status"],
        );
      });
      response.status(200).send("");
    } else {
      const task = await parseTaskSlashCmd(request.body);
      const convertedTask = convertEmptyFields(task);
      
      const isInDatabase = await searchDB(convertedTask);
      console.log("IS in database?", JSON.stringify(isInDatabase));
      const taskBlock = await createBlockNewTask(convertedTask);
      console.log(`block create by task$${JSON.stringify(taskBlock)}`);

      //============ TODO call searchDB on task to determine if it should create new or edit existing========
      
      if (isInDatabase.exists) {
        console.log("Already in Database");
          axios({
            method: "post",
            url: request.body["response_url"],
            data: {
	      text: "Already in Block",
	      blocks: [
	        {
		  "type": "section",
		  "text": {
		    "type": "mrkdwn",
		    "text": "*Task Already Exists*",
		  }
		}
	      ]
	    },
          }).then((resp) => {
            console.log("OK from slack", resp["status"]);
          });
        response.status(200).send("Already Exists");
      } else {
          axios({
            method: "post",
            url: request.body["response_url"],
            data: taskBlock,
          }).then((resp) => {
            console.log("OK from slack", resp["status"]);
          });
          response.status(200).send("");
        }
      }
    
  } catch (err) {
    console.log(err);
    return response.status(404).send("Server Error in SlashCmdHandler", err);
  }
  next();
};

export default slashCmdHandler;
