import dotenv from 'dotenv';

dotenv.config();

console.assert(process.env.SLACK_BOT_TOKEN, "Missing Slack bot token");
console.assert(process.env.SLACK_SIGNING_SECRET, "Missing Slack signing secret");
console.assert(process.env.NOTION_API_KEY, "Missing Notion API key");
console.assert(process.env.NOTION_DATABASE_ID, "Missing Notion database ID");
//console.assert(process.env.ANTHROPIC_API_KEY, "Missing Anthropic API key");
console.assert(process.env.PROJ_AGENT_APP_ID, "Missing Slack app ID");

export const PORT = process.env.PORT;
export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
export const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
export const NOTION_API_KEY = process.env.NOTION_API_KEY;
export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
export const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
export const PROJ_AGENT_APP_ID = process.env.PROJ_AGENT_APP_ID;
