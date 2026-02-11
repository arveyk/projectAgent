import {
  Client,
  collectPaginatedAPI,
  isFullPage,
  PageObjectResponse,
  QueryDataSourceResponse,
} from "@notionhq/client";
import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod/v4";
import { TaskPage, simplifyTaskPage } from "./simplifyTaskPages";
import { stringSimilarity } from "string-similarity-js";

import {
  NOTION_API_KEY,
  NOTION_PROJECTS_DATA_SOURCE_ID,
  NOTION_TASKS_DATA_SOURCE_ID,
  ANTHROPIC_API_KEY,
  ANTHROPIC_MODEL_VER,
} from "../../env";
import { logTimestampForBenchmarking } from "../logTimestampForBenchmarking";
import { Project } from "../../domain";
import { containsSensitiveNgrams } from "./containsSensitiveNgrams";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

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

export type TaskSearchResult = {
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
): Promise<TaskSearchResult> {
  console.log(`Model name: ${model.modelName}`);
  console.log(`message (searchDB): ${JSON.stringify(message)}`);

  const tasks = await getTasks();

  console.log(`Database response: ${JSON.stringify(tasks)}`);

  // Limit pages to the 20 most similar to the message
  const similarPages = filterSimilar(tasks, message);

  const prompt = `
    Please check if a task matching the message ${message} exists in the database response
    ${JSON.stringify(similarPages)}.
  `.trim();

  logTimestampForBenchmarking("(Database) LLM start");
  const llmResult = await structuredLlm.invoke(prompt);
  logTimestampForBenchmarking("(Database) LLM finished");
  console.log(`Raw LLM response: ${JSON.stringify(llmResult.raw)}`);
  const parsed = llmResult.parsed;
  const result: TaskSearchResult = {
    exists: parsed.exists,
    taskId: parsed.task_id !== "<UNKNOWN>" ? parsed.task_id : undefined,
  };

  console.log(`result: ${JSON.stringify(result)}`);

  return result;
};

/**
 * Retrieves all tasks from the tasks database
 * Performs filtering to remove tasks that are not fully populated or contain sensitive ngrams
 *
 * @return	An array of all tasks in the tasks database
 */
export async function getTasks(): Promise<TaskPage[]> {
  // TODO check cache first
  logTimestampForBenchmarking("Querying task database");
  const rawTasks = await getTasksRaw();
  logTimestampForBenchmarking("Done querying task database");
  return rawTasks
    .filter((page) => isFullPage(page))
    .filter((page) => !containsSensitiveNgrams(page))
    .map(simplifyTaskPage);
}

/**
 * Retrieves all raw tasks (Notion pages) from the tasks database
 *
 * Does not perform any filtering or simplification on the tasks
 *
 * @return	An array of all raw tasks in the tasks database
 */
export async function getTasksRaw(): Promise<
  QueryDataSourceResponse["results"]
> {
  return await collectPaginatedAPI(notion.dataSources.query, {
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
    filter_properties: ["Task name", "Description", "Assigned to", "Project"],
  });
}

export const getTaskProperties = async function (pageID: string) {
  return await notion.pages.retrieve({ page_id: pageID });
};

/**
 * Returns up to 20 of the database pages that most closely match the given message.
 * @param pages A list of simplified database pages.
 * @param message The message that triggered Project Agent.
 * @returns Up to 20 of the database pages that most closely match the given message.
 */
export function filterSimilar(pages: TaskPage[], message: string): TaskPage[] {
  const similarPages = pages
    .map((page) => {
      const similarity = stringSimilarity(
        page.taskTitle.concat(page.description ? page.description : ""),
        message,
      );
      console.log(
        `message: ${message}, page: ${page.taskTitle.concat(" ").concat(page.description ? page.description : "")}, similarity score: ${similarity}`,
      );
      const similarity_threshold = 0.08;
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

/**
 * Gets all projects from the projects database
 *
 * @return	An array of all projects in the projects database
 */
export async function getProjects() {
  // TODO check cache first
  logTimestampForBenchmarking("Querying Projects");
  const projectsList = await getProjectsRaw();
  logTimestampForBenchmarking("Done querying Projects");

  let simplifiedProjects = projectsList
    .filter((project) => isFullPage(project))
    .filter((project) => !containsSensitiveNgrams(project))
    .map(simplifyProject)
    .filter((project) => project !== undefined);

  // console.log(JSON.stringify(projectsQueryResponse));
  return simplifiedProjects;
}

/**
 * Retrieves all raw projects (Notion pages) from the projects database
 *
 * Does not perform any filtering or simplification on the projects
 *
 * @return	An array of all raw projects in the projects database
 */
export async function getProjectsRaw(): Promise<
  QueryDataSourceResponse["results"]
> {
  return await collectPaginatedAPI(notion.dataSources.query, {
    data_source_id: NOTION_PROJECTS_DATA_SOURCE_ID,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            does_not_equal: "Done",
          },
        },
        {
          property: "Status",
          status: {
            does_not_equal: "Canceled",
          },
        },
        {
          property: "Status",
          status: {
            does_not_equal: "Archived",
          },
        },
      ],
    },
    filter_properties: ["Project name", "Status"],
  });
}

/**
 * Simplifies a raw project (Notion page) into a Project object
 *
 * @param project The raw project (Notion page) to simplify
 * @return The simplified Project object, or undefined if the project could not be simplified
 */
export function simplifyProject(
  project: PageObjectResponse,
): Project | undefined {
  const titleProperty = Object.values(project.properties).find(
    (prop) => prop.type === "title",
  );
  return titleProperty
    ? {
        projectName: titleProperty.title[0].plain_text,
        id: project.id,
      }
    : undefined;
}
