import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod/v4";
import { ANTHROPIC_API_KEY, ANTHROPIC_MODEL_VER } from "../env";
import { getEventTimeData } from "./getTime";
import { RunnableConfig, Runnable } from "@langchain/core/dist/runnables";
import { BaseLanguageModelInput } from "@langchain/core/dist/language_models/base";
import { convertTask, Task } from "./task";
import { SlashCommand } from "@slack/bolt";
import { logTime } from "./logTime";

export const EXAMPLE_OUTPUT_FOR_PROMPT: TaskParseResult = {
  taskTitle: "Write article draft",
  assignees: ["Bob"],
  dueDate: "2025-08-20T00:00-07:00",
  description: "Write a draft of the article",
};

logTime("(Parse) model initialization start");
const model = new ChatAnthropic({
  model: ANTHROPIC_MODEL_VER,
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});

// TODO make everything except title and description optional and nullable
export const taskSchema = z.object({
  taskTitle: z.string().describe("Short descriptive title of the task"),
  description: z.string().describe("details of the task"),
  assignees: z
    .string()
    .array()
    .optional()
    .nullable()
    .describe("Name of person or people assigned with the task"),
  dueDate: z.iso
    .datetime({ offset: true })
    .optional()
    .nullable()
    .describe(
      "Task due date in ISO standard format with timezone offset included",
    ),
  startDate: z.iso
    .datetime({ offset: true })
    .optional()
    .nullable()
    .describe(
      "Task start date in ISO standard format with timezone offset included",
    ),
  phonenumber: z
    .string()
    .optional()
    .nullable()
    .describe("Assingnee phone number"),
  email: z.string().optional().nullable().describe("Assignee's email address"),
  project: z
    .string()
    .optional()
    .nullable()
    .describe("The project the task belongs to"),
});
export type TaskParseResult = z.infer<typeof taskSchema>;

// For use with slash commands
const structuredLlmSlashCmd: Runnable<
  BaseLanguageModelInput,
  Record<string, unknown>,
  RunnableConfig<Record<string, unknown>>
> = model.withStructuredOutput(taskSchema, {
  includeRaw: true,
  method: "json_mode",
});
// Error here is caused by mismatched zod version
logTime("(Parse) model initialization finished");

/**
 * Uses Anthropic to parse a task assignment from a Slack slash command
 * @param {*} reqBody The body of the request
 * @returns A TaskParseResult containing the formatted task.
 */
export const parseTask = async function (
  reqBody: SlashCommand,
  timestamp: number,
): Promise<Task> {
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

  const prompt = `Today's date and time in ISO format is ${timeData.toISO()}, and our timezone is ${timeData.zoneName}. Please extract information from this message, making sure to list any dates in ISO format with timezone offset. "By the end of the day" means by 17:00 in our timezone. If the message says to finish a task "by" some date but does not specify a time, that means by 0:00 of that date in our timezone. """Example: Input: Bob, starting tomorrow, please write a draft of the article and have it finished by August 20, 2025. Output: ${EXAMPLE_OUTPUT_FOR_PROMPT}""" Here is the message: ${textToParse}`;
  console.log(`prompt: ${prompt}`);

  logTime("(Parse) LLM start");
  const taskParseResult = await structuredLlmSlashCmd.invoke(prompt);
  logTime("(Parse) LLM finished");

  if (!taskParseResult) {
    throw new Error(`Task parse result is ${typeof taskParseResult}`);
  }
  if (!taskParseResult.raw) {
    throw new Error(`Raw LLM result is ${typeof taskParseResult.raw}`);
  }
  console.log(`Raw LLM response: ${JSON.stringify(taskParseResult.raw)}`);

  // TODO fix this sometimes being null
  console.log(JSON.stringify(taskParseResult.parsed));

  const structuredResult = taskSchema.safeParse(taskParseResult.parsed);
  if (!structuredResult.success) {
    console.error("Task parsing was unsuccessful");
    throw structuredResult.error;
  }

  const structuredResultData = structuredResult.data;

  console.log(
    `Structured LLM response: ${JSON.stringify(structuredResultData)}`,
  );

  // Convert the LLM output to a Task object for future ease of use
  const task = convertTask(structuredResultData);

  console.log(`task parse result after conversion: ${JSON.stringify(task)}`);
  return task;
};
