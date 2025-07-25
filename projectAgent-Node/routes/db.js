import { Client } from '@notionhq/client';

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

// TODO define structured llm to check database result for matching tasks

/**
 * Searches Notion database for a task based on its title and assignee fields
 * @param {*} task The task object
 * @returns true if the task is found, else returns false
 */
export const searchDB = async function(task) {
  // retrieve all tasks
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
  });
  console.log(`response: ${JSON.stringify(response)}`);

  // TODO have LLM determine if the task is there

  return true;
}