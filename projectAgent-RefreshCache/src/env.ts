import dotenv from "dotenv";

dotenv.config();

if (!process.env.NOTION_API_KEY) {
  throw new Error("Missing Notion API key");
}
if (!process.env.NOTION_PROJECTS_DATA_SOURCE_ID) {
  throw new Error("Missing Notion projects data source ID");
}
if (!process.env.NOTION_TASKS_DATA_SOURCE_ID) {
  throw new Error("Missing Notion tasks data source ID");
}
if (!process.env.REGION) {
  throw new Error("Missing AWS region");
}
if (!process.env.CACHE_TABLE_NAME) {
  throw new Error("Missing cache table name");
}

export const NOTION_API_KEY: string = process.env.NOTION_API_KEY;
export const NOTION_PROJECTS_DATA_SOURCE_ID: string =
  process.env.NOTION_PROJECTS_DATA_SOURCE_ID;
export const NOTION_TASKS_DATA_SOURCE_ID: string =
  process.env.NOTION_TASKS_DATA_SOURCE_ID;
export const REGION: string = process.env.REGION;
export const CACHE_TABLE_NAME: string = process.env.CACHE_TABLE_NAME;
