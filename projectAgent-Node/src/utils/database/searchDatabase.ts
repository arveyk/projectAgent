import { Client, QueryDataSourceResponse } from "@notionhq/client";
import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod/v4";
import { dbPage, simplifyDatabaseResults } from "./simplifyDatabaseResults";
import { stringSimilarity } from "string-similarity-js";

import {
  NOTION_API_KEY,
  NOTION_PROJECTS_DATA_SOURCE_ID,
  NOTION_TASKS_DATA_SOURCE_ID,
  ANTHROPIC_API_KEY,
  ANTHROPIC_MODEL_VER,
} from "../../env";
import { logTimestampForBenchmarking } from "../logTimestampForBenchmarking";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

logTimestampForBenchmarking("(Database) model initialization start");
const model = new ChatAnthropic({
  model: ANTHROPIC_MODEL_VER,
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
logTimestampForBenchmarking("(Database) model initialization finished");

export type dbSearchResult = {
  exists: boolean;
  taskId?: string;
};

// Error here is caused by mismatched zod version
const structuredLlm = model.withStructuredOutput(databaseSearchResult, {
  includeRaw: true,
});

/**
 * Searches Notion database for a task based on its title and assignee fields
 * @param {*} message The message that triggered Project Agent
 * @returns true if the task is found, else returns false
 */
export const searchDatabase = async function (
  message: string,
): Promise<dbSearchResult> {
  console.log(`Model name: ${model.modelName}`);
  console.log(`message (searchDB): ${JSON.stringify(message)}`);

  logTimestampForBenchmarking("Querying database");
  const response = await notion.dataSources.query({
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
  });
  logTimestampForBenchmarking("Done querying database");

  //logTime("Simplifying response");
  const simplifiedResponse = simplifyDatabaseResults(response);
  //logTime("Done simplifying response");
  console.log(`Database response: ${JSON.stringify(simplifiedResponse)}`);

  // Limit pages to the 20 most similar to the message
  const similarPages = filterSimilar(simplifiedResponse, message);

  const prompt = `
      Please check if a task matching the message ${message} exists in the database response 
      ${JSON.stringify(similarPages)}.
    `;

  const llmResult = await structuredLlm.invoke(prompt);
  console.log(`Raw LLM response: ${JSON.stringify(llmResult.raw)}`);
  const parsed = llmResult.parsed;
  const result: dbSearchResult = {
    exists: parsed.exists,
    taskId: parsed.task_id !== "<UNKNOWN>" ? parsed.task_id : undefined,
  };
  logTimestampForBenchmarking("(Database) LLM finished");
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
 * Returns up to 20 of the database pages that most closely match the given message.
 * @param pages A list of simplified database pages.
 * @param message The message that triggered Project Agent.
 * @returns Up to 20 of the database pages that most closely match the given message.
 */
export function filterSimilar(pages: dbPage[], message: string): dbPage[] {
  const similarPages = pages
    .map((page) => {
      const similarity = stringSimilarity(
        page.taskTitle.concat(page.description ? page.description : ""),
        message,
      );
      console.log(
        `message: ${message}, page: ${page.taskTitle.concat(" ").concat(page.description ? page.description : "")}, similarity score: ${similarity}`,
      );
      const similarity_threshold = 0.35;
      if (similarity >= similarity_threshold) {
        return { page: page, similarity: similarity };
      }
    })
    .filter((pageSimilarity) => pageSimilarity !== undefined)
    .sort(
      (pageSimilarity1, pageSimilarity2) =>
        pageSimilarity1.similarity - pageSimilarity2.similarity,
    )
    .reverse()
    .slice(0, 21)
    .map((pageSimilarity) => pageSimilarity.page);

  console.log(`Similar pages: ${JSON.stringify(similarPages)}`);
  return similarPages;
}

export async function getProjects() {
  logTimestampForBenchmarking("Querying Projects");
  const projectsQueryResponse = await notion.dataSources.query({
    data_source_id: NOTION_PROJECTS_DATA_SOURCE_ID
  });

  const projectsList = projectsQueryResponse.results;
  let simplifiedProjects = [];
  
  logTimestampForBenchmarking("Done querying Projects");
  // console.log(JSON.stringify(projectsQueryResponse));

  for (const project of projectsList) {
    console.log("Projects id", project.id);


    if (project.object === "page" && "properties" in project) {
      for (const propName in project.properties) {
        if (project.properties[propName]["type"] === "title") {

          const projectTitle = project.properties[propName].title[0].plain_text;
          simplifiedProjects.push({
            projectName: projectTitle,
            id: project.id
          });
        }
      }
    }
  }
  return simplifiedProjects
}
