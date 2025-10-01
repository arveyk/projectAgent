import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";
import { ANTHROPIC_API_KEY } from "../env";
import { getEventTimeData } from "./getTime";
import { RunnableConfig, Runnable } from "@langchain/core/runnables";
import { BaseLanguageModelInput } from "@langchain/core/language_models/base";
import { convertTask, Task } from "./task";
import { BaseMessage } from "@langchain/core/messages";

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});

const task = z.object({
  tasktitle: z.string().describe("Short descriptive title of the task"),
  assignee: z.string().describe("Name of person assigned with the task"),
  duedate: z
    .string()
    .datetime({ offset: true })
    .describe("Task due date in ISO standard format with timezone included"),
  startdate: z
    .string()
    .datetime({ offset: true })
    .optional()
    .describe("Task start date in ISO standard format with timezone included"),
  phonenumber: z.string().optional().describe("Assingnee phone number"),
  email: z.string().optional().describe("Assignee's email address"),
  preferredchannel: z
    .string()
    .optional()
    .describe("Assignee\'s preferred channel of communication"),
  description: z.string().describe("details of the task"),
  project: z.string().optional().describe("The project the task belongs to"),
});

// For use with slash commands
const structuredLlmSlashCmd: Runnable<
  BaseLanguageModelInput,
   Record<string, any>,
  RunnableConfig<Record<string, any>>
> = model.withStructuredOutput(task);

/**
 * Uses Anthropic to parse a task assignment from a Slack slash command
 * @param {*} reqBody The body of the request
 * @returns A TaskParseResult containing the formatted task.
 */
export const parseTaskSlashCmd = async function (
  reqBody,
  timestamp: string,
): Promise<Task> {
  // TODO type annotation for reqBody
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

  const prompt = `Today's date and time in ISO format is ${timeData.toISO}, and our timezone is ${timeData.zoneName} (offset of ${timeData.zone} hours from UTC). Please extract information from this message, making sure to list any dates in ISO format with timezone offset. "By the end of the day" means by 17:00 in our timezone. If the message says to finish a task "by" some date but does not specify a time, that means by 0:00 of that date in our timezone. """Example: Input: Bob, starting tomorrow, please write a draft of the article and have it finished by August 20, 2025. Output: {tasktitle: "Write article draft", assignee: "Bob", duedate: "2025-08-20T00:00-7:00", description: "Write a draft of the article"}""" Here is the message: ${textToParse}`;
  console.log(`prompt: ${prompt}`);
  const taskParseResult = await structuredLlmSlashCmd.invoke(prompt);
  console.log(`task parse result: ${JSON.stringify(taskParseResult)}`);

  // Convert the LLM output to a Task object for future ease of use
  return convertTask(taskParseResult);
};
