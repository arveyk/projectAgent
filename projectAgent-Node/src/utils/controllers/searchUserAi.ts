import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";
import { ANTHROPIC_API_KEY, ANTHROPIC_MODEL_VER } from "../../env";
import { NotionUser } from "./userTypes";
import { Task } from "../taskFormatting/task";

const model = new ChatAnthropic({
  model: ANTHROPIC_MODEL_VER,
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});

const userSearchSchema = z.object({
  found: z.boolean().describe("If a specific person match is found"),
  multipleFound: z.boolean().describe("If search has multiple results"),
  name: z.string().describe("Name of person"),
  email: z.string().describe("persons's email"),
  phoneNumber: z.string().optional().describe("persons's phone number"),
});

export const searchUser = async function (
  taskDetails: Task,
  listOfPersons: NotionUser[],
) {
  // If there's an error here, it's caused by mismatched zod version
  const structuredLlmSearchUser = model.withStructuredOutput(userSearchSchema);
  const prompt = `Using this info ${JSON.stringify(taskDetails)} please look for a match in the following: ${JSON.stringify(listOfPersons)}. Note that the name may have an @symbol at the beginning, ignore that and compare using the rest of the characters. For multiple matches please favour those from Notion if any exists from Notion. Respond appropriately if there is no match`;
  const userParseResult = await structuredLlmSearchUser.invoke(prompt);
  console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
  return userParseResult;
};
