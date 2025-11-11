import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  console.log(`Querying DB, timestamp: ${Date.now()}`);
  const dbResponse = await notion.dataSources.query({
    data_source_id: ProcessingInstruction.env.NOTION_TASKS_DATA_SOURCE_ID,
  });
  console.log(`Done querying DB, timestamp: ${Date.now()}`);
  return response;
};
