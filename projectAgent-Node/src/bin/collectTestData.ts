import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";
import { Client } from "@notionhq/client";
import { NOTION_API_KEY } from "../env"; 
import { NOTION_TASKS_DATA_SOURCE_ID } from "../env";

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

  const tasksResp = await notion.dataSources.query({
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
  });
  await saveJson(tasksResp, "log/testData/responses/example-pageList.json");

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