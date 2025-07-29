import { Client } from '@notionhq/client';
import { ChatAnthropic } from '@langchain/anthropic';
import { z } from 'zod';

import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from '../env.js';

const notion = new Client({ auth: NOTION_API_KEY });

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
  api_key: process.env["ANTHROPIC_API_KEY"]
});

const databaseSearchResult = z.object({
  exists: z.boolean().describe("True if the task exists in the database, else false"),
  task_id: z.string().optional().describe("The page ID of the task entry from the database")
})

const structuredLlm = model.withStructuredOutput(databaseSearchResult);

/**
 * Searches Notion database for a task based on its title and assignee fields
 * @param {*} task The task object
 * @returns true if the task is found, else returns false
 */
export const searchDB = async function(task) {
  try {
    // retrieve all tasks
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    });
    //console.log(`response: ${JSON.stringify(response)}`);

    // TODO have LLM determine if the task is there
    const prompt = `
      Please check if a task with the title ${JSON.stringify(task.tasktitle)} and the assignee 
      ${JSON.stringify(task.assignee)} exists in the database response ${JSON.stringify(response)}. 
      If you find a task in the database response with the assignee ${JSON.stringify(task.assignee)} 
      and a title that means the same thing as ${JSON.stringify(task.tasktitle)} but is worded 
      slightly differently, this counts as a match.
    `
    const result = await structuredLlm.invoke(prompt);
    console.log(`result: ${JSON.stringify(result)}`);

    return result;
  }
  catch (err) {
    console.log(err);
  }
  
}