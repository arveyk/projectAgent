"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_SLN_WEBHOOK_URL = exports.SLACK_USER_OAUTH_TOKEN = exports.PROJ_AGENT_APP_ID = exports.ANTHROPIC_API_KEY = exports.NOTION_TASKS_DATA_SOURCE_ID = exports.NOTION_PROJECTS_DATA_SOURCE_ID = exports.NOTION_API_KEY = exports.SLACK_SIGNING_SECRET = exports.SLACK_BOT_TOKEN = exports.PORT = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
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
if (!process.env.PROJ_AGENT_APP_ID) {
    throw new Error("Missing Slack app ID");
}
if (!process.env.SLACK_USER_OAUTH_TOKEN) {
    throw new Error("Missing SLACK user oauth");
}
if (!process.env.ALL_SLN_WEBHOOK_URL) {
    throw new Error("Missing task management webhook url");
}
exports.PORT = process.env.PORT || "8080";
exports.SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
exports.SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
exports.NOTION_API_KEY = process.env.NOTION_API_KEY;
exports.NOTION_PROJECTS_DATA_SOURCE_ID = process.env.NOTION_PROJECTS_DATA_SOURCE_ID;
exports.NOTION_TASKS_DATA_SOURCE_ID = process.env.NOTION_TASKS_DATA_SOURCE_ID;
exports.ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
exports.PROJ_AGENT_APP_ID = process.env.PROJ_AGENT_APP_ID;
exports.SLACK_USER_OAUTH_TOKEN = process.env.SLACK_USER_OAUTH_TOKEN;
exports.ALL_SLN_WEBHOOK_URL = process.env.ALL_SLN_WEBHOOK_URL;
