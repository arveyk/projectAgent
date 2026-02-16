import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";
import { Client } from "@notionhq/client";
import { NOTION_API_KEY } from "../env";
import { NOTION_TASKS_DATA_SOURCE_ID } from "../env";
import { simplifyTaskPages } from "../utils/database/simplifyTaskPages";
import { getProjects, getProjectsRaw } from "../utils/database/searchDatabase";
import { parseWithLLM } from "../utils/aiagent";
import { DateTime } from "luxon";

/**
 * ts-node script that retrieves notion objects
 * And saves them as json files to log/testData/
 * for easy copying into the .ts counterparts in "testData"
 */
async function getTestData() {
  const notion = new Client({
    auth: NOTION_API_KEY,
    notionVersion: "2025-09-03",
  });

  const rawPages = await notion.dataSources.query({
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
  });
  await saveJson(rawPages, "log/testData/responses/example-rawPages.json");

  const simplifiedPages = simplifyTaskPages(rawPages.results);
  await saveJson(
    simplifiedPages,
    "log/testData/responses/example-simplifiedPages.json",
  );

  const projectsRaw = await getProjectsRaw();
  await saveJson(projectsRaw, "log/testData/responses/example-projectsRaw.json");

  const projects = await getProjects();
  await saveJson(projects, "log/testData/responses/example-projects.json");

  const taskThatCausedBug = await parseWithLLM(DateTime.now(), projects, "Scott Rhymes, please follow up with Kristen on events after the John Capobianco trial for the Itential project by 2/27/2026.");
  // const taskClearProject = await parseWithLLM(DateTime.now(), projects, "Paint a portrait of yourself");
  // const taskUnclearProject = await parseWithLLM(DateTime.now(), projects, "Paint a cat portrait");
  // const taskNoFoundProject = await parseWithLLM(DateTime.now(), projects, "Brush the dogs");

  await saveJson(taskThatCausedBug, "log/testData/llmTasks/llm_taskThatCausedBug.json");
  // await saveJson(taskClearProject, "log/testData/llmTasks/llm_taskWithClearProject.json");
  // await saveJson(taskUnclearProject, "log/testData/llmTasks/llm_taskWithUnclearProject.json");
  // await saveJson(taskNoFoundProject, "log/testData/llmTasks/llm_taskWithNoFoundProject.json");
}

/**
 * Save any text to json at the specified path
 */
async function saveJson(obj: unknown, relativePath: string): Promise<void> {
  if (!relativePath.endsWith(".json")) {
    throw new Error("relativePath must end with `.json`");
  }
  console.log(`- ${relativePath}`);
  const dir = dirname(relativePath);
  await mkdir(dir, { recursive: true });
  await writeFile(relativePath, JSON.stringify(obj, null, 2), "utf-8");
}

getTestData();
