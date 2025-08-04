import { 
  SLACK_BOT_TOKEN,
} from '../env.js';

import axios from 'axios';
import { createConfirmationBlock, RequestApprovalBlock } from '../blockkit/createBlocks.js';
import { createBlockNewTask } from '../blockkit/createBlocks.js';
import { sendConfirmationCreateTask } from '../utils/taskConfirmation.js';

//When we want to use AI agent
import aiAgent from "../utils/aiagent.js";

const postHandler = async function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	      Request: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';

      if (!request.body['event']['bot_id'] && !request.body['event']['subtype']) {
        const aiResult = await aiAgent(request.body);
        console.log("We are now back in postHandler");
        const isTask = aiResult.isTask;
        if (isTask) {
          console.log("it's a task!");
          const channel_id = request.body['event']['channel'];
          const task = aiResult.task;
          const isInDB = aiResult.isInDB;
          console.log(`Is in DB: ${isInDB}`);
          if (isInDB) {
            // TODO update task
            console.log("This task is already in the database.")
          }
          else {
            await sendConfirmationCreateTask(task, request.body['response_url']);
            // TODO add the task to the database
          }
        }
        else {
          console.log("not a task");
          // do nothing
        }

    // TODO send 400 bad request when the payload has a formatting error
    // TODO send 401 unauthorized if the payload has a bad token
  }} catch (err){
    console.log(err);
    return response.status(500).send(`Error and Body${JSON.stringify(err)}`);
  }
  next();
}

export default postHandler;
