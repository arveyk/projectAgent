import { Client, UpdatePageResponse } from "@notionhq/client";
import { validateDueDate } from "./validation";

import { NOTION_API_KEY } from "../env";
import { TaskPage } from "./task";

const notion = new Client({ auth: NOTION_API_KEY });

/**
 * Update Notion database page
 * @param {*} taskPageInfo The task object
 *
 * @returns true if the task is found, else returns false
 */
export const updateDbPage = async function (
  taskPageInfo: TaskPage,
): Promise<{ success: boolean; page?: UpdatePageResponse; errorMsg?: string }> {
  const task = taskPageInfo.task;
  try {
    const dueDate = task.dueDate;
    if (validateDueDate(dueDate)) {
      console.log(`task (updateDbPage): ${JSON.stringify(taskPageInfo)}`);

      const response = await notion.pages.update({
        page_id: taskPageInfo.pageId,
        properties: {
          "Due Date": {
            date: {
              start: dueDate.toISOString(),
            },
          },
          "Start Date": {
            date: {
              start: task.startDate ? task.startDate.toISOString() : "",
            },
          },
          Email: {
            email: task.email ? task.email : "",
          },
          "Phone Number": {
            phone_number: task.phoneNumber ? task.phoneNumber : "",
          },
          "Preferred Channel": {
            rich_text: [
              {
                text: {
                  content: task.preferredChannel ? task.preferredChannel : "",
                },
              },
            ],
          },
          Description: {
            rich_text: [
              {
                text: {
                  content: task.description ? task.description : "",
                },
              },
            ],
          },
          Project: {
            rich_text: [
              {
                text: {
                  content: task.project ? task.project : "",
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
