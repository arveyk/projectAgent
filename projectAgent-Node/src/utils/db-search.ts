import { Client, QueryDataSourceResponse } from "@notionhq/client";
import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";
import { dbPage, simplifyDBResults } from "./simplifyDBResults";
import { Task } from "./task";
import { stringSimilarity } from "string-similarity-js";

import {
  NOTION_API_KEY,
  NOTION_TASKS_DATA_SOURCE_ID,
  ANTHROPIC_API_KEY,
} from "../env";
import { ta } from "zod/dist/types/v4/locales";
import e from "express";
import { logTime } from "./logTime";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});

const databaseSearchResult = z.object({
  exists: z
    .boolean()
    .describe("True if the task exists in the database, else false"),
  task_id: z
    .string()
    .optional()
    .describe("The ID of the task entry from the database"),
});

export type dbSearchResult = {
  exists: boolean;
  taskId?: string;
};

const structuredLlm = model.withStructuredOutput(databaseSearchResult, { includeRaw: true });

/**
 * Searches Notion database for a task based on its title and assignee fields
 * @param {*} message The message that triggered Project Agent
 * @returns true if the task is found, else returns false
 */
export const searchDB = async function (
  message: string,
): Promise<dbSearchResult> {
  console.log(`message (searchDB): ${JSON.stringify(message)}`);

  // TODO for temporary solution, return only the 20 most recent tasks
  logTime("Querying database");
  const response = await notion.dataSources.query({
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
    filter: {
      timestamp: "created_time",
      created_time: {
        after: "2025-10-15T07:04:00"
      }
    }
  });
  logTime("Done querying database");

  //logTime("Simplifying response");
  const simplifiedResponse = simplifyDBResults(response);
  //logTime("Done simplifying response");
  console.log(`Database response: ${JSON.stringify(simplifiedResponse)}`);
  // TODO create shortlist based on number of words in common, give that to the LLM. Pick a library to use for this

  // TODO refine prompt
  const prompt = `
      Please check if a task matching the message ${message} exists in the database response 
      ${JSON.stringify(simplifiedResponse)}.
    `;

  logTime("LLM start");
  const llmResult = await structuredLlm.invoke(prompt);
  console.log(`Raw LLM response: ${JSON.stringify(llmResult.raw)}`);
  const parsed = llmResult.parsed;
  const result: dbSearchResult = {
    exists: parsed.exists,
    taskId: parsed.task_id !== "<UNKNOWN>" ? parsed.task_id : undefined,
  };
  logTime("LLM finished");
  console.log(`result: ${JSON.stringify(result)}`);

  return result;
};

export const getTaskProperties = async function (pageID: string) {
  return await notion.pages.retrieve({ page_id: pageID });
};

export async function returnTasks(): Promise<QueryDataSourceResponse> {
  // Retrieve all tasks
  const response = await notion.dataSources.query({
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
  });

  return response;
}

/**
 * Filters a list of simplified database pages, leaving only those most similar to the message.
 * @param pages A list of simplified database pages.
 * @param message The message that triggered Project Agent.
 * @returns The database pages most similar to the message.
 */
export function filterSimilar(pages: dbPage[], message: string): dbPage[] {
  const similarPages = pages.filter((page) => {
    // TODO return only the 20 most similar tasks
    const similarity = stringSimilarity(page.taskTitle.concat(page.description ? page.description : ""), message);
    console.log(`message: ${message}, page: ${page.taskTitle.concat(" ").concat(page.description ? page.description : "")}, similarity score: ${similarity}`);
    const sensitivity = 0.4;
    return similarity >= sensitivity;
  })

  console.log(`Similar pages: ${JSON.stringify(similarPages)}`);
  return similarPages;
}