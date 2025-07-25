import axios from 'axios';
import { ChatAnthropic } from '@langchain/anthropic';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';

import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from '../env.js';

const APP_ID = PROJ_AGENT_APP_ID;

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
  api_key: process.env["ANTHROPIC_API_KEY"]
});

const task = z.object({
  tasktitle: z.string().describe("Short descriptive title of the task"),
  assignee: z.string().describe("Name of person assigned with the task"),
  duedate: z.string().describe("Task Due-date"),
  startdate: z.string().optional().describe("Task Start-date"),
  phonenumber: z.string().optional().describe("Assingnee phone number"),
  email: z.string().optional().describe("Assignee's email address"),
  preferredChannel: z.string().describe("Assignee\'s preferred channel of communication"),
  taskdetail: z.string().describe("details of the task"),
});

const structuredLlm = model.withStructuredOutput(task);


/**
 * Uses Anthropic to parse a task assignment from an incoming Slack webhook
 * @param {*} reqBody The body of the request
 * @returns If the message contains a task assignment, returns true and the formatted task.
 * Else, returns false.
 */
const parseTask = function(reqBody) {
  // TODO have it return false if it is not a task
  const parsedTask = structuredLlm.invoke(
    `Please extract information from this text: ${reqBody['event']['text']}`
  );
	console.log(parsedTask);

  return {
    isTask: true,
    parsedTask: parsedTask
  };
}


/**
 * Screens an incoming Slack message to see if it is a task assignment.
 * @param {*} reqBody The body of the incoming Slack request
 * @returns If the message is a task assignment, returns true and the parsed task.
 * Else, returns false.
 */

export const screenMessage = function(reqBody) {
  if (typeof reqBody !== 'undefined'){
    console.log('Request body is defined', reqBody["event"]);
    
    // Use LLM to check if message is a task assignment
    const parsingResult = parseTask(reqBody);
    const isTask = parsingResult.isTask;

    // Check for a bot_id to determine if the message was sent by a bot
    const isFromBot = (typeof (reqBody['event']['bot_id']) !== 'undefined');
    console.log(`text: ${reqBody['event']['text']}, is it from a bot? ${isFromBot}`);

    if (! isFromBot && isTask) {
      return parsingResult;
    }
    else {
      return false;
    }
  }
  else {
    throw new Error('Request body is undefined');
  }
}

const postHandler = async function(request, response, next) {
  //console.log(request);
    try {
      console.log(`I Handle most events. Any tasks for me?
	      Request: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';
      const screeningResult = screenMessage(request.body);
      console.log(`result of screening: ${JSON.stringify(screeningResult)}`);
      if (screeningResult) {
        // TODO send it to newTaskHandler
        console.log("it's a task!");
        //console.log(`blocks: ${JSON.stringify(request.body['event']['blocks'])}`);
        const parsedTask = screeningResult.parsedTask;
        const res = await axios.post(eventResURL, {
          channel: '#task-management',
          //text: request.body['event']['text'],
          text: JSON.stringify(parsedTask),
	
	  }, {
          headers: {
              "Authorization": `Bearer ${process.env['SLACK_BOT_TOKEN']}`,
              "Content-Type": "application/x-www-form-urlencoded",
          }
	    });
      console.log(res.data);
    } else {
      console.log("not a task");
    }
  } catch (err){
    console.log(err);
    return response.status(500).send(`Error and Body${request.body}`);
  }
  next();
}

export default postHandler;
