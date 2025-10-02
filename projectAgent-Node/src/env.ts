import dotenv from "dotenv";

dotenv.config();

if (!process.env.SLACK_BOT_TOKEN) {
  throw new Error("Missing Slack bot token");
}
if (!process.env.SLACK_SIGNING_SECRET) {
  throw new Error("Missing Slack signing secret");
}
if (!process.env.NOTION_API_KEY) {
  throw new Error("Missing Notion API key");
}
if (!process.env.NOTION_DATABASE_ID) {
  throw new Error("Missing Notion database ID");
}
if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("Missing Anthropic API key");
}
if (!process.env.PROJ_AGENT_APP_ID) {
  throw new Error("Missing Slack app ID");
}
if (!process.env.TASK_N8N_WEBHOOK_URL) {
  throw new Error("Missing N8N webhook url");
}
if (!process.env.ALL_SLN_WEBHOOK_URL) {
  throw new Error("Missing task management webhook url");
}

export const PORT: string = process.env.PORT || "8080";
export const SLACK_BOT_TOKEN: string = process.env.SLACK_BOT_TOKEN;
export const SLACK_SIGNING_SECRET: string = process.env.SLACK_SIGNING_SECRET;
export const NOTION_API_KEY: string = process.env.NOTION_API_KEY;
export const NOTION_DATABASE_ID: string = process.env.NOTION_DATABASE_ID;
export const ANTHROPIC_API_KEY: string = process.env.ANTHROPIC_API_KEY;
export const PROJ_AGENT_APP_ID: string = process.env.PROJ_AGENT_APP_ID;
export const TASK_N8N_WEBHOOK_URL: string = process.env.TASK_N8N_WEBHOOK_URL;
export const ALL_SLN_WEBHOOK_URL: string = process.env.ALL_SLN_WEBHOOK_URL;
