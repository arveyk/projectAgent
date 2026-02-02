import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod/v4";
import { ANTHROPIC_API_KEY, ANTHROPIC_MODEL_VER } from "../env";
import { RunnableConfig, Runnable } from "@langchain/core/dist/runnables";
import { BaseLanguageModelInput } from "@langchain/core/dist/language_models/base";
import {
  convertTask,
  ParsedData,
  ProjectWithName,
} from "./taskFormatting/task";
import { SlashCommand } from "@slack/bolt";
import { logTimestampForBenchmarking } from "./logTimestampForBenchmarking";
import { getProjects } from "./database/searchDatabase";
import { getAppUserData } from "./controllers/getUsersSlack";
import { Project } from "../domain";
import { DateTime } from "luxon";

const EXAMPLE_MSG_00 =
  "\
Bob, starting tomorrow, please write a draft of the article and have it finished by August 20, 2025.";
export const EXAMPLE_OUTPUT_FOR_PROMPT_00: TaskParseResult = {
  taskTitle: "Write article draft",
  assignees: ["Bob"],
  dueDate: "2025-08-20",
  description: "Write a draft of the article",
  projects: [],
};

const EXAMPLE_MSG_01 =
  "\
Bradley, finish up the landing gear for the F-22 Assembly and Maintenance project by July 5 2026";

export const EXAMPLE_OUTPUT_FOR_PROMPT_01: TaskParseResult = {
  taskTitle: "Finish landing gear",
  assignees: ["Bradley"],
  dueDate: "2026-07-05",
  description:
    "Bradley, finish up the landing gear for the F-22 Assembly and Maintenance project by July 5 2026",
  projects: ["F-22 Assembly and Maintenance"],
};

const EXAMPLE_MSG_02 =
  "Phinehas, research on a lighter and stronger vanadium carbon composite for the jet propulsion redesign";
export const EXAMPLE_OUTPUT_FOR_PROMPT_02: TaskParseResult = {
  taskTitle: "Research on Lighter and Stronger Vanadium Carbon Composite",
  assignees: ["Phinehas"],
  dueDate: null,
  description:
    "Phinehas, research on a lighter and stronger vanadium carbon composite for the jet propulsion redesign",
  projects: ["Jet Propulsion Redesign", "Vanadium Carbon Composite"],
};

export const EXAMPLE_INPUT_PROJECTS: ProjectWithName[] = [
  { projectName: "F-22 Assembly and Maintenance", id: "kl*9J9kjs)_nsdyyusdl" },
  { projectName: "Jet Propulsion Redesign", id: "1xc9Dtrhjs)ns4h7jLKd" },
  { projectName: "Project assigned by Donald", id: "lapI-2nd7dUHnis927hd" },
  { projectName: "Vanadium Carbon Composite", id: "dsdPO219083nd-siosau" },
];

logTimestampForBenchmarking("(Parse) model initialization start");
const model = new ChatAnthropic({
  model: ANTHROPIC_MODEL_VER,
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});

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
    .date()
    .optional()
    .nullable()
    .describe(
      "Task due date in ISO standard format",
    ),
  startDate: z.iso
    .date()
    .optional()
    .nullable()
    .describe(
      "Task start date in ISO standard format",
    ),
  phonenumber: z
    .string()
    .optional()
    .nullable()
    .describe("Assignee phone number"),
  email: z.string().optional().nullable().describe("Assignee's email address"),
  projects: z
    .string()
    .array()
    .optional()
    .nullable()
    .describe("Projects the task belongs to"),
  similarProjects: z
    .string()
    .array()
    .optional()
    .nullable()
    .describe(
      "Project matches if it is unclear which project is being referred to",
    ),
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
logTimestampForBenchmarking("(Parse) model initialization finished");

/**
 * Uses Anthropic to parse a task assignment from a Slack slash command
 * @param {*} reqBody The body of the request
 * @returns A TaskParseResult containing the formatted task.
 */
export const parseTask = async function (
  reqBody: SlashCommand,
  timestamp: number,
): Promise<ParsedData> {
  let textToParse;

  if (reqBody["command"]) {
    textToParse = reqBody["text"];
  } else if (reqBody["event"]) {
    textToParse = reqBody["text"];
  } else {
    textToParse = "No Task available";
  }

  const appUserData = await getAppUserData(reqBody, timestamp);

  // const timeData = await getEventTimeData(reqBody, timestamp);
  const timeData = appUserData.eventTimeData;

  const notionProjects = await getProjects();
  console.log(`notionProjects found ${JSON.stringify(notionProjects)}`);

  const taskParseResult = await parseWithLLM(timeData, notionProjects, textToParse);

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
  const task = convertTask(structuredResultData, notionProjects);
  task.existingProjects = notionProjects;

  console.log(`task parse result after conversion: ${JSON.stringify(task)}`);
  return {
    task: task,
    taskCreator: {
      userId: appUserData.userId,
      name: appUserData.name,
      email: appUserData.email,
    },
  };
};

/**
 * Parses a task from a message using a structured LLM.
 * @param timeData The date and timezone of the message.
 * @param notionProjects A list of all the projects in the database.
 * @param textToParse The message to parse as a task.
 * @returns The message parsed as a task.
 */
async function parseWithLLM(timeData: DateTime<boolean>, notionProjects: Project[], textToParse: string) {
  const prompt = `Today's date in ISO format is ${timeData.toISODate()}. Please extract task information from a message, making sure to list any dates in ISO format. If a start date is not specifed, assume the start date is today's date. "By tomorrow" means the due date is tomorrow.
  Also, using this list ${JSON.stringify(notionProjects)}, infer the project or projects the task is linked to. The projectName is what will help in finding a match. \
  """Example: **Sample Projects**: ${EXAMPLE_INPUT_PROJECTS}.\n\
  Input 1: ${EXAMPLE_MSG_00} Output: ${JSON.stringify(EXAMPLE_OUTPUT_FOR_PROMPT_00)},\
  Input 2: ${EXAMPLE_MSG_01}. Output 2: ${JSON.stringify(EXAMPLE_OUTPUT_FOR_PROMPT_01)}. Input 3 ${EXAMPLE_MSG_02}. Output 3 ${JSON.stringify(EXAMPLE_OUTPUT_FOR_PROMPT_02)}""" Here is the message: ${textToParse}`;
  console.log(`prompt: ${prompt}`);

  logTimestampForBenchmarking("(Database) LLM start");

  logTimestampForBenchmarking("(Parse) LLM start");
  const taskParseResult = await structuredLlmSlashCmd.invoke(prompt);
  logTimestampForBenchmarking("(Parse) LLM finished");

  if (!taskParseResult) {
    throw new Error(`Task parse result is ${typeof taskParseResult}`);
  }
  if (!taskParseResult.raw) {
    throw new Error(`Raw LLM result is ${typeof taskParseResult.raw}`);
  }
  console.log(`Raw LLM response: ${JSON.stringify(taskParseResult.raw)}`);

  console.log(JSON.stringify(taskParseResult.parsed));
  return taskParseResult;
}
