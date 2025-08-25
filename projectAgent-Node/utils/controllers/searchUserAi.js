import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";
import { ANTHROPIC_API_KEY } from "../../env.js";

ANTHROPIC_API_KEY === undefined || ANTHROPIC_API_KEY === null
  ? console.error("Me Over the Top")
  : console.log("We cool!");

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
  api_key: ANTHROPIC_API_KEY,
});
const userSearch = z.object({
  found: z.boolean().describe("If a specific person match is found"),
  multipleFound: z.boolean().describe("If search has multiple results"),
  name: z.string().describe("Name of person"),
  email: z.string().describe("persons's email"),
  phone: z.string().optional().describe("persons's phone number"),
});

export const searchUser = async function (personDetails, searchArea) {
  const structuredLlmSearchUser = model.withStructuredOutput(userSearch);
  const prompt = `Please return matches with name: from this ${JSON.stringify(personDetails)} in the following array of ${JSON.stringify(searchArea)} . Note that the name may have an @symbol at the beginning, ignore that and compare using the rest of the characters.`;
  const userParseResult = await structuredLlmSearchUser.invoke(prompt);
  console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
  return userParseResult;
};
