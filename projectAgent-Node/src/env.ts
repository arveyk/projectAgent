import dotenv from "dotenv";

dotenv.config();

// console.log(`SLACK_BOT_TOKEN: ${process.env.SLACK_BOT_TOKEN}`);
// console.log(`SLACK_SIGNING_SECRET: ${process.env.SLACK_SIGNING_SECRET}`);
// console.log(`NOTION_API_KEY: ${process.env.NOTION_API_KEY}`);
// console.log(`ANTHROPIC_API_KEY: ${process.env.ANTHROPIC_API_KEY}`);
// console.log(`PROJ_AGENT_APP_ID: ${process.env.PROJ_AGENT_APP_ID}`);
// console.log(`SLACK_USER_OAUTH_TOKEN: ${process.env.SLACK_USER_OAUTH_TOKEN}`);
// console.log(`ALL_SLN_WEBHOOK_URL: ${process.env.ALL_SLN_WEBHOOK_URL}`);

if (!process.env.SLACK_BOT_TOKEN) {
  throw new Error("Missing Slack bot token");
}
if (!process.env.SLACK_SIGNING_SECRET) {
  throw new Error("Missing Slack signing secret");
}
if (!process.env.NOTION_API_KEY) {
  throw new Error("Missing Notion API key");
}
if (!process.env.NOTION_PROJECTS_DATA_SOURCE_ID) {
  throw new Error("Missing Notion projects data source ID");
}
if (!process.env.NOTION_TASKS_DATA_SOURCE_ID) {
  throw new Error("Missing Notion tasks data source ID");
}
if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("Missing Anthropic API key");
}
if (!process.env.ANTHROPIC_MODEL_VER) {
  throw new Error("Missing Anthropic model version number");
}
if (!process.env.PROJ_AGENT_APP_ID) {
  throw new Error("Missing Slack app ID");
}
if (!process.env.SLACK_USER_OAUTH_TOKEN) {
  throw new Error("Missing SLACK user oauth");
}
if (!process.env.ALL_SLN_WEBHOOK_URL) {
  throw new Error("Missing task management webhook url");
}

export const PORT: string = process.env.PORT || "8080";
export const SLACK_BOT_TOKEN: string = process.env.SLACK_BOT_TOKEN;
export const SLACK_SIGNING_SECRET: string = process.env.SLACK_SIGNING_SECRET;

export const NOTION_API_KEY: string = process.env.NOTION_API_KEY;
export const NOTION_PROJECTS_DATA_SOURCE_ID: string =
  process.env.NOTION_PROJECTS_DATA_SOURCE_ID;
export const NOTION_TASKS_DATA_SOURCE_ID: string =
  process.env.NOTION_TASKS_DATA_SOURCE_ID;

export const ANTHROPIC_API_KEY: string = process.env.ANTHROPIC_API_KEY;
export const ANTHROPIC_MODEL_VER: string = process.env.ANTHROPIC_MODEL_VER;
export const PROJ_AGENT_APP_ID: string = process.env.PROJ_AGENT_APP_ID;
export const SLACK_USER_OAUTH_TOKEN: string =
  process.env.SLACK_USER_OAUTH_TOKEN;
export const ALL_SLN_WEBHOOK_URL: string = process.env.ALL_SLN_WEBHOOK_URL;
