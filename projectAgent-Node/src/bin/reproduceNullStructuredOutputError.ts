import { EXAMPLE_OUTPUT_FOR_PROMPT_00, taskSchema } from "../utils/aiagent";
import { ChatAnthropic } from "@langchain/anthropic";
import { ANTHROPIC_API_KEY, ANTHROPIC_MODEL_VER } from "../env";
import { RunnableConfig, Runnable } from "@langchain/core/dist/runnables";
import { BaseLanguageModelInput } from "@langchain/core/dist/language_models/base";
import { DateTime } from "luxon";

const model = new ChatAnthropic({
  model: ANTHROPIC_MODEL_VER,
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});

const structuredLlmSlashCmd: Runnable<
  BaseLanguageModelInput,
  Record<string, unknown>,
  RunnableConfig<Record<string, unknown>>
> = model.withStructuredOutput(taskSchema, {
  includeRaw: true,
  method: "json_mode",
});
const inputs = [
  // "add Harvey, if you would, please take a yard implement, sometimes known as a rake, and use it to clean up the leaves from the paved side walkways, which may be referred to as paths, or sidewalks, or whatever else you would like to call them.",
  // "Belteshazar, please go out to the garden, identify which plants we want to be there, and which are invaders, sometimes known as 'weeds', and remove the unwanted plants from the ground.",
  // "Chimera, please observe the loudly meowing creatures, sometimes known as 'cats', and determine whether they have been given food. If they have not, give them some"
  "add Harvey, rake the leaves",
];
let llmOutput: Record<string, unknown>;
let dueDateField;
let safeParsed;
let numTries = 0;
do {
  let i = Math.floor(Math.random() * inputs.length);
  const input = inputs[i];
  const prompt = `Today's date and time in ISO format is ${DateTime.now().toISO()}, and our timezone is ${DateTime.now().zoneName}. Please extract information from this message, making sure to list any dates in ISO format with timezone offset. "By the end of the day" means by 17:00 in our timezone. If the message says to finish a task "by" some date but does not specify a time, that means by 0:00 of that date in our timezone. """Example: Input: Bob, starting tomorrow, please write a draft of the article and have it finished by August 20, 2025. Output: ${EXAMPLE_OUTPUT_FOR_PROMPT_00}""" Here is the message: ${input}`;
  llmOutput = await structuredLlmSlashCmd.invoke(prompt);
  safeParsed = taskSchema.safeParse(llmOutput.parsed);
  dueDateField = safeParsed.data?.dueDate;
  numTries++;
  console.log(`try #${numTries}: ${JSON.stringify(llmOutput.parsed)}`);
  console.log(dueDateField);
} while (!dueDateField || (dueDateField && dueDateField !== null));

console.log(`Error reproduced! ${llmOutput.parsed}`);
