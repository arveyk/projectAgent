import { 
  SLACK_BOT_TOKEN,
} from '../env.js';

import axios from 'axios';

//When we want to use AI agent
import aiAgent from "../utils/aiagent.js";

const postHandler = async function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	      Request: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';

      if (!request.body['event']['bot_id']) {
        const aiResult = aiAgent(request.body);
        const isTask = aiResult.isTask;
        if (isTask) {
          const task = aiResult.task;
          const isInDB = aiResult.isInDB;
          if (isInDB) {
            // TODO update task
          }
          else {
            // TODO create new task
          }
        }
        else {
          // do nothing
        }

        const channel_id = request.body['event']['channel'];
        console.log("it's a task!");

    // TODO send 400 bad request when the payload has a formatting error
    // TODO send 401 unauthorized if the payload has a bad token
  }} catch (err){
    console.log(err);
    return response.status(500).send(`Error and Body${JSON.stringify(err)}`);
  }
  next();
}

export default postHandler;
