import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from '../env.js';

import axios from 'axios';
import { ChatAnthropic } from '@langchain/anthropic';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';
import { searchDB } from '../routes/db.js';

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

const taskParseResult = z.object({
  istask: z.boolean().describe("True if it is a task, else false"),
  task: task.optional().describe("Structured task object")
});

const structuredLlm = model.withStructuredOutput(taskParseResult);


/**
 * Uses Anthropic to parse a task assignment from an incoming Slack webhook
 * @param {*} reqBody The body of the request
 * @returns If the message contains a task assignment, returns a TaskParseResult containing true and the formatted task.
 * Else, returns a TaskParseResult containing false.
 */
const parseTask = async function(reqBody) {
  const taskParseResult = await structuredLlm.invoke(
    `Please extract information from this message and determine whether or not it is assigning a new task to a person: ${reqBody['event']['text']}`
  );
	console.log(`task parse result: ${JSON.stringify(taskParseResult)}`);

  return taskParseResult;
}

/**
 * Screens an incoming Slack message to see if it is a task assignment.
 * @param {*} reqBody The body of the incoming Slack request
 * @returns If the message is a task assignment, returns a TaskParseResult containing true and the formatted task.
 * Else, returns a TaskParseResult containing false.
 */




const aiAgent = async function(requestText) {
  //console.log(request);
  let UserInteraction;
    try {
      const taskParseResult = await parseTask(requestText);
      const isTask = taskParseResult.istask;
      const screeningResult = screenMessage(request.body);
      console.log(`result of screening: ${JSON.stringify(screeningResult)}`);

      if (screeningResult) {
        console.log("it's a task!");
      
	const parsedTask = screeningResult.task;
        const isInDB = await searchDB(parsedTask);

        const result = await axios.post(eventResURL, {
          channel: '#task-management',
          //text: request.body['event']['text'],
          text: JSON.stringify(task),
	
	  }, {
          headers: {
              "Authorization": `Bearer ${process.env['SLACK_BOT_TOKEN']}`,
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
    return (`Error : \n${err}`);
  }
}

export default aiAgent;
