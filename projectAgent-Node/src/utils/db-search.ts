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
export const searchDB = async function (task: Task): Promise<dbSearchResult> {
  console.log(`task (searchDB): ${JSON.stringify(task)}`);
  console.log(`assignee (searchDB): ${JSON.stringify(task.assignees)}`);

  // Retrieve tasks with a matching assignee
  const response = await notion.dataSources.query({
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
    filter: {
      property: "Assigned to",
      people: {
        "is_not_empty": true
      }
    },
  });

  const simplifiedResponse = simplifyDBResults(response);
  // Filter by assignee
  const filteredResponse: dbPage[] = simplifiedResponse.filter((page) => {
    const assigneeMatch: boolean = page.assignee.find((assignee) => {
      if (assignee === undefined || task.assignees[0] === undefined) {
        return false;
      }
      else {
        console.log(` simplifyDBResult ... ->assingne.name${assignee.name}, task${JSON.stringify(task.assignees[0])}`);
        const found: boolean = assignee.name === task.assignees[0].name
          ||
          assignee.name.toLowerCase().includes(task.assignees[0].name ?
            task.assignees[0].name.toLowerCase() : "No assignee Name")
          ||
          task.assignees[0].name.toLowerCase().includes(assignee.name ? 
            assignee.name.toLowerCase() : "No assignee Name");

        return found;
      }
    }) ? true : false
    console.log(`page assignees: ${JSON.stringify(page.assignee)} task assignees: ${JSON.stringify(task.assignees)} match? ${assigneeMatch}`);
    return assigneeMatch;
  })
  console.log(`response: ${JSON.stringify(filteredResponse)}`);

  const prompt = `
      Please check if a task with the title ${JSON.stringify(task.taskTitle)} exists in the database response 
      ${JSON.stringify(filteredResponse)}. If you find a task in the database response with a title that means the 
      same thing as ${JSON.stringify(task.taskTitle)} but is worded slightly differently, this counts as a match.
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

  return response
}
