import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
} from '../env.js';

import axios from 'axios';
/*
 * When we want to use AI agent
 * import aiAgent from "../utils/aiagent.js";
 *
 */


/**
 * Screens an incoming Slack message to see if it is a task assignment.
 * @param {*} reqBody The body of the incoming Slack request
 * @returns If the message is a task assignment, returns a TaskParseResult containing true and the formatted task.
 * Else, returns a TaskParseResult containing false.
 */

export const screenMessage = async function(reqBody) {
  if (typeof reqBody !== 'undefined') {
    if (typeof reqBody['payload'] === 'undefined') {
      return { isTask: false };
    } else {
      console.log('Request body is defined', reqBody["event"]);
    
      // Use LLM to check if message is a task assignment
      //const taskParseResult = await parseTask(reqBody);
      //const isTask = taskParseResult.istask;

      // Check for a bot_id to determine if the message was sent by a bot
      const isFromBot = (typeof (reqBody['event']['bot_id']) !== 'undefined');
      //console.log(`text: ${reqBody['event']['text']}, is it from a bot? ${isFromBot}`);

      if (!isFromBot) {
        return taskParseResult;
      }
      else {
        return {isTask: false};
      }
    }
    
  }
  else {
    throw new Error('Request body is undefined or Should be Handled by another Router');
  }
}

const postHandler = async function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	      Request: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';
      const screeningResult = screenMessage(request.body);
      console.log(`result of screening: ${JSON.stringify(screeningResult)}`);

      if (!request.body['event']['bot_id']) {
        const channel_id = request.body['event']['channel'];
        console.log("it's a task!");
        const parsedTask = screeningResult.task;
        //const isInDB = await searchDB(parsedTask);


        const result = await axios.post(eventResURL, {
          channel: channel_id,
	  response_type: "ephemeral",
          text: `Well Hello there! got a new task for me?`,
          //text: JSON.stringify(task),
	
	  }, {
            headers: {
              "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
              "Content-Type": "application/x-www-form-urlencoded",
	    }
	});
      console.log(result.data);
      } else {
        console.log("not a task");
      }
    // TODO send 400 bad request when the payload has a formatting error
    // TODO send 401 unauthorized if the payload has a bad token
  } catch (err){
    console.log(err);
    return response.status(500).send(`Error and Body${JSON.stringify(err)}`);
  }
  next();
}

export default postHandler;
