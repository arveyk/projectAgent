import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";
import { getTasksRaw, getProjectsRaw, getUsers } from "../utils/notionAPI";

const taskResponse = await getTasksRaw();
const projectResponse = await getProjectsRaw();
const userResponse = await getUsers();
saveJson(taskResponse, "log/testData/notionResponses/taskResponse.json");
saveJson(projectResponse, "log/testData/notionResponses/projectResponse.json");
saveJson(userResponse, "log/testData/notionResponses/userResponse.json");

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
