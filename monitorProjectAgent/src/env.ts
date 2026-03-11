import dotenv from "dotenv";

dotenv.config();

if (!process.env.MAIL_GUN_API_KEY) {
  throw new Error(
    "MAILGUN_API_KEY is undefined. Email functionality may be limited.",
  );
}

if (!process.env.SENDING_KEY) {
  throw new Error("SENDING_KEY is undefined. Mailgun will conplain");
}
if (!process.env.DOMAIN) {
  throw new Error("DOMAIN is undefined. Mailgun lacking Domain to rule");
}
if (!process.env.UPTIME_EMAIL) {
  throw new Error("UPTIME_EMAIL is undefined");
}
if (!process.env.DEPLOYMENT_ENV) {
  throw new Error("DEPLOYMENT Env is undefined");
}
if (!process.env.SLACK_BOT_TOKEN) {
 throw new Error("Bot Token Missing");
}
if (!process.env.PROJECT_AGENT_HEALTHCHECK_URL) {
  throw new Error("Health check url Missing");
}
if (!process.env.DEV_TEAM_SLACK_CHANNEL) {
  throw new Error("First Alert Slack Channel Missing")
}
if (!process.env.SECOND_DEV_TEAM_SLACK_CHANNEL) {
  throw new Error("Second Alert Slack Channel Missing")
}

export const PORT: number = process.env.PORT
  ? parseInt(process.env.PORT)
  : 8080;

export const MAIL_GUN_API_KEY: string | undefined =
  process.env.MAIL_GUN_API_KEY;
export const SENDING_KEY: string = process.env.SENDING_KEY;
export const DOMAIN: string = process.env.DOMAIN;
export const UPTIME_EMAIL: string = process.env.UPTIME_EMAIL;
export const DEPLOYMENT_ENV = process.env.DEPLOYMENT_ENV;

export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
export const PROJECT_AGENT_HEALTHCHECK_URL = process.env.PROJECT_AGENT_HEALTHCHECK_URL;
export const DEV_TEAM_SLACK_CHANNEL = process.env.DEV_TEAM_SLACK_CHANNEL;
export const SECOND_DEV_TEAM_SLACK_CHANNEL = process.env.SECOND_DEV_TEAM_SLACK_CHANNEL;