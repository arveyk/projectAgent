import { Client } from "@notionhq/client";
import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";
import { simplifyDBResults } from "./simplifyDBResults";
import { Task } from "./task";

import { NOTION_API_KEY, NOTION_DATABASE_ID, ANTHROPIC_API_KEY } from "../env";

const notion = new Client({ auth: NOTION_API_KEY });

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
  exists: boolean,
  taskId?: string
}

const structuredLlm = model.withStructuredOutput(databaseSearchResult);

/**
 * Searches Notion database for a task based on its title and assignee fields
 * @param {*} task The task object
 * @returns true if the task is found, else returns false
 */
export const searchDB = async function (task: Task): Promise<dbSearchResult> {
  console.log(`task (searchDB): ${JSON.stringify(task)}`);
  console.log(`assignee (searchDB): ${task.assignee}`);

  // Retrieve tasks with a matching assignee
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: "Assignee",
      rich_text: {
        equals: `${task.assignee}`,
      },
    },
  });

  const simplifiedResponse = simplifyDBResults(response);
  console.log(`response: ${JSON.stringify(simplifiedResponse)}`);

  const prompt = `
      Please check if a task with the title ${JSON.stringify(task.taskTitle)} exists in the database response 
      ${JSON.stringify(simplifiedResponse)}. If you find a task in the database response with a title that means the 
      same thing as ${JSON.stringify(task.taskTitle)} but is worded slightly differently, this counts as a match.
    `;

  const llmResult = await structuredLlm.invoke(prompt);
  const result: dbSearchResult = {
    exists: llmResult.exists,
    taskId: llmResult.task_id !== "<UNKNOWN>" ? llmResult.task_id : undefined
  };
  console.log(`result: ${JSON.stringify(result)}`);

  return result;
};

export const getTaskProperties = async function (pageID: string) {
  return await notion.pages.retrieve({ page_id: pageID });
};
