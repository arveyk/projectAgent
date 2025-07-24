import axios from 'axios';
import dotenv from 'dotenv';
import { ChatAnthropic } from '@langchain/anthropic';
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
 * @returns If the message contains a task assignment, returns the formatted assignment. Else, returns false.
 */
const parseTask = function(reqBody) {
  // TODO give the LLM two tools:
  // 1. parse (description, duedate, assignee, assinger, etc…)
  // Extract information from incoming webhook and use AI to turn it into a formatted request.
  // 2. ignore (no arguments)
  // Ignore the message / event

  structuredLlm.invoke;

  return true;
}

/**
 * Screens an incoming Slack message to see if it is a task assignment.
 * @param {*} reqBody The body of the incoming Slack request
 * @returns 
 */


export const screenMessage = function(reqBody) {
  if (typeof reqBody !== 'undefined'){
    console.log('Request body is defined', reqBody["event"]);
    
    // Use LLM to check if message is a task assignment
    const result = parseTask(reqBody);
    const isTask = (result);
    
    if (!reqBody["events"]) {
      return false;
    } else {
      const eventType = reqBody["event"]['type'] || 'No Event';
      switch (eventType) {
        case 'message':
          console.log("Message event detected [By screenMessage]");
	  break;
        case 'app_mention':
          console.log("App Mention Event detected [By screenMessange]");
          break;
        default:
          console.log("Unknown Event detected [By screenMessage]");
      }
    }

    const isFromProjAgent = (typeof (reqBody['event']['bot_id']) !== 'undefined');

    // TODO also return parsed task if applicable
    return (! isFromProjAgent && isTask);
  }
  else {
    throw new Error('Request body is undefined');
  }
}

const postHandler = async function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	 Request: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';
      if (screenMessage(request.body)) {
            // TODO send it to newTaskHandler
        console.log("it's a task!");
        console.log(`blocks: ${JSON.stringify(request.body['event']['blocks'])}`);
          const extrTasksDetails = await structuredLlm.invoke(`Please extract information from this text: ${request.body['event']['text']}`);
	  console.log(extrTasksDetails);
	  const res = await axios.post(eventResURL, {
          channel: '#task-management',
          //text: request.body['event']['text'],
          text: JSON.stringify(extrTasksDetails),
	
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