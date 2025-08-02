import { 
  PROJ_AGENT_APP_ID 
} from '../env.js';

import axios from 'axios';
import { ChatAnthropic } from '@langchain/anthropic';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';
import { searchDB } from './db-search.js';

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

// For use with the new message trigger
const structuredLlmNewMsg = model.withStructuredOutput(taskParseResult);
// For use with slash commands
const structuredLlmSlashCmd = model.withStructuredOutput(task);


/**
 * Uses Anthropic to parse a task assignment from an incoming Slack webhook
 * @param {*} reqBody The body of the request
 * @returns If the message contains a task assignment, returns a TaskParseResult containing true and the formatted task.
 * Else, returns a TaskParseResult containing false.
 */
const parseTaskNewMsg = async function(reqBody) {
  // TODO make it infer dates
  const taskParseResult = await structuredLlmNewMsg.invoke(
    `Please extract information from this message and determine whether or not it is assigning a new task to a person: ${reqBody['event']['text']}`
  );
	console.log(`task parse result: ${JSON.stringify(taskParseResult)}`);

  return taskParseResult;
}

/**
 * Uses Anthropic to parse a task assignment from a Slack slash command
 * @param {*} reqBody The body of the request
 * @returns A TaskParseResult containing the formatted task.
 */
export const parseTaskSlashCmd = async function(reqBody) {
  let textToParse;
  
  //slash cmd text can be immediately accessed, for other events it is indirect, through events field
  if (reqBody["command"]) {
    textToParse = reqBody['text'];
  } else if (reqBody["event"]) {
    textToParse = reqBody['text'];
  } else {
    taskToParse = "No Task available";
  }
  const taskParseResult = await structuredLlmSlashCmd.invoke(
    `Please extract information from this message: ${textToParse}`
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
export const screenMessage = async function(reqBody) {
  // TODO filter out all event types except for message (events that have a subtype field)
  if (typeof reqBody !== 'undefined') {
    console.log('Request body is defined', reqBody["event"]);
  
    // Use LLM to check if message is a task assignment
    const taskParseResult = await parseTaskNewMsg(reqBody);
    const isTask = taskParseResult.istask;

    // Check for a bot_id to determine if the message was sent by a bot
    const isFromBot = (typeof reqBody['event']['bot_id'] !== 'undefined');
    console.log(`text: ${reqBody['event']['text']}, is it from a bot? ${isFromBot}`);

    if (! isFromBot) {
      return taskParseResult;
    }
    else {
      return {istask: false};
    }
  }
  else {
    throw new Error('Request body is undefined or Should be Handled by another Router');
  }
}

const aiAgent = async function(reqBody) {
  //console.log(request);
  let UserInteraction;
  try {
    const taskParseResult = await parseTaskNewMsg(reqBody);
    const isTask = taskParseResult.istask;
    const screeningResult = screenMessage(reqBody);
    console.log(`result of screening: ${JSON.stringify(screeningResult)}`);

    if (screeningResult) {
      console.log("it's a task!");
    
	    const parsedTask = screeningResult.task;
      const isInDB = await searchDB(parsedTask);
      return {
        istask: true,
        task: parsedTask,
        isInDB: isInDB
      }

    } else {
      console.log("not a task");
      return {
        isTask: false
      }
    }
    
  } catch (err){
    console.log(err);
    return (`Error : \n${err}`);
  }
}

export default aiAgent;
