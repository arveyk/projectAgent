import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

export const handler = async (event) => {
  // TODO just log payload from HTTP event
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  console.log(`event: ${JSON.stringify(event)}`);
  return response;
};
