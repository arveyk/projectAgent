import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";
import { ANTHROPIC_API_KEY } from "../env.js";
import { getEventTimeData } from "./getTime.js";

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
  api_key: ANTHROPIC_API_KEY,
});

const task = z.object({
  tasktitle: z.string().describe("Short descriptive title of the task"),
  assignee: z.string().describe("Name of person assigned with the task"),
  duedate: z
    .string()
    .describe("Task due date in ISO standard format with timezone included"),
  startdate: z
    .string()
    .optional()
    .describe("Task start date in ISO standard format with timezone included"),
  phonenumber: z.string().optional().describe("Assingnee phone number"),
  email: z.string().optional().describe("Assignee's email address"),
  preferredchannel: z
    .string()
    .optional()
    .describe("Assignee\'s preferred channel of communication"),
  taskdetail: z.string().describe("details of the task"),
  project: z.string().optional().describe("The project the task belongs to"),
});

// For use with slash commands
const structuredLlmSlashCmd = model.withStructuredOutput(task);

/**
 * Uses Anthropic to parse a task assignment from a Slack slash command
 * @param {*} reqBody The body of the request
 * @returns A TaskParseResult containing the formatted task.
 */
export const parseTaskSlashCmd = async function (reqBody, timestamp) {
  let textToParse;

  //slash cmd text can be immediately accessed, for other events it is indirect, through events field
  if (reqBody["command"]) {
    textToParse = reqBody["text"];
  } else if (reqBody["event"]) {
    textToParse = reqBody["text"];
  } else {
    textToParse = "No Task available";
  }

  const timeData = await getEventTimeData(reqBody, timestamp);
  const timeISO = timeData.timeISO;
  const timezoneOffset = timeData.timezoneOffset;

  const prompt = `Today's date in ISO format is ${timeISO}, and our time zone offset is ${timezoneOffset}. Please extract information from this message and determine whether or not it is assigning a new task to a person: ${textToParse}`;
  console.log(`prompt: ${prompt}`);
  const taskParseResult = await structuredLlmSlashCmd.invoke(prompt);
  console.log(`task parse result: ${JSON.stringify(taskParseResult)}`);

  return taskParseResult;
};
