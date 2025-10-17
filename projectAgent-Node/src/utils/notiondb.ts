import { Client, CreatePageResponse } from "@notionhq/client";
import { validateDueDate } from "./dateHandler";
import { NOTION_API_KEY, NOTION_TASKS_DATA_SOURCE_ID } from "../env";
import { createTaskProperties } from "./createTaskProperties";
import { Task, Person, NotionTask } from "./task";

export type PageAddResult = {
  success: boolean;
  errorMsg?: string | Error;
  page?: CreatePageResponse;
};

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

/**
 * Adds a new task to Notion
 * @param {*} taskObj Object containing task data
 * @param {*} assignedBy The username of the person who assigned the task
 * @returns If successful, returns true and the url of the new page. Else, returns false and the error message.
 */
export async function addTaskNotionPage(
  taskObj: NotionTask,
): Promise<PageAddResult> {
  // Make sure due date is not in the past

  const duedate = taskObj.dueDate;
  console.log(`(addtaskNotionPage) taskObj: ${JSON.stringify(taskObj)}`);
  if (validateDueDate(duedate)) {
    console.log("yay! the due date is not in the past!");

    const taskProperties = await createTaskProperties(taskObj);
    try {
      const newPage = await notion.pages.create({
        parent: {
          type: "data_source_id",
          data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
        },
        properties: taskProperties,
      });
      console.log(newPage);
      return {
        success: true,
        page: newPage,
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          errorMsg: error,
        };
      } else {
        return {
          success: false,
          errorMsg: "Unknown error",
        };
      }
    }
  } else {
    console.log("uh oh, the due date is in the past");
    return {
      success: false,
      errorMsg: "A due date can't be in the past",
    };
  }
}

export default addTaskNotionPage;
