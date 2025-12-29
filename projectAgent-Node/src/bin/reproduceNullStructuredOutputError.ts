import { EXAMPLE_OUTPUT_FOR_PROMPT, taskSchema } from "../utils/aiagent";
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
> = model.withStructuredOutput(taskSchema, { includeRaw: true, method: 'json_mode' });
const input = "Please do a task";
const prompt = `Today's date and time in ISO format is ${DateTime.now().toISO()}, and our timezone is ${DateTime.now().zoneName}. Please extract information from this message, making sure to list any dates in ISO format with timezone offset. "By the end of the day" means by 17:00 in our timezone. If the message says to finish a task "by" some date but does not specify a time, that means by 0:00 of that date in our timezone. """Example: Input: Bob, starting tomorrow, please write a draft of the article and have it finished by August 20, 2025. Output: ${EXAMPLE_OUTPUT_FOR_PROMPT}""" Here is the message: ${input}`;
 
let parsedOutput;
let llmOutput;
let numTries = 0;
do {
    llmOutput = await structuredLlmSlashCmd.invoke(prompt);
    parsedOutput = taskSchema.safeParse(llmOutput.parsed);
    numTries++;
    console.log(`try #${numTries}: ${JSON.stringify(parsedOutput)}`);
} while (parsedOutput.success)

console.log(`Error reproduced! ${llmOutput.parsed}`);