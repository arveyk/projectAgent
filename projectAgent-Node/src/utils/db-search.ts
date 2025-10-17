import { Client, QueryDataSourceResponse } from "@notionhq/client";
import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";
import { dbPage, simplifyDBResults } from "./simplifyDBResults";
import { Task } from "./task";

import {
  NOTION_API_KEY,
  NOTION_TASKS_DATA_SOURCE_ID,
  ANTHROPIC_API_KEY,
} from "../env";
import { ta } from "zod/dist/types/v4/locales";
import e from "express";

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

const structuredLlm = model.withStructuredOutput(databaseSearchResult);

/**
 * Searches Notion database for a task based on its title and assignee fields
 * @param {*} task The task object
 * @returns true if the task is found, else returns false
 */
export const searchDB = async function (
  message: string,
): Promise<dbSearchResult> {
  console.log(`message (searchDB): ${JSON.stringify(message)}`);

  // TODO for temporary solution, return only the 20 most recent tasks
  const response = await notion.dataSources.query({
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
  });

  const simplifiedResponse = simplifyDBResults(response);
  // TODO create shortlist based on number of words in common, give that to the LLM. Pick a library to use for this

  // TODO refine prompt
  const prompt = `
      Please check if a task matching the message ${message} exists in the database response 
      ${JSON.stringify(simplifiedResponse)}.
    `;

  const llmResult = await structuredLlm.invoke(prompt);
  const result: dbSearchResult = {
    exists: llmResult.exists,
    taskId: llmResult.task_id !== "<UNKNOWN>" ? llmResult.task_id : undefined,
  };
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
