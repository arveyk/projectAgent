import { Client } from "@notionhq/client";
import { validateDueDate } from "./validation.js";

import { NOTION_API_KEY } from "../env.js";

const notion = new Client({ auth: NOTION_API_KEY });

/**
 * Update Notion database page
 * @param {*} task The task object
 *
 * @returns true if the task is found, else returns false
 */
export const updateDbPage = async function (task) {
  try {
    const dueDate = new Date(task["duedate"]).toISOString();
    if (validateDueDate(dueDate)) {
      console.log(`task (searchDB): ${JSON.stringify(task)}`);

      const response = await notion.pages.update({
        page_id: task.pageID,
        properties: {
          "Due Date": {
            date: {
              start: new Date(task.duedate),
            },
          },
          "Start Date": {
            date: {
              start: new Date(task.startdate),
            },
          },
          Email: {
            email: task.email,
          },
          "Phone Number": {
            phone_number: task.phonenumber,
          },
          "Preferred Channel": {
            rich_text: [
              {
                text: {
                  content: task.preferredchannel,
                },
              },
            ],
          },
          Description: {
            rich_text: [
              {
                text: {
                  content: task.description,
                },
              },
            ],
          },
          Project: {
            rich_text: [
              {
                text: {
                  content: task.project,
                },
              },
            ],
          },
        },
      });
      return {
        success: true,
        page: response,
      };
    } else {
      console.log("uh oh, the due date is in the past");
      return {
        success: false,
        errorMsg: "A due date can't be in the past",
      };
    }
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};
