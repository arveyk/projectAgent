import { Client, CreatePageResponse } from "@notionhq/client";
import { validateDueDate } from "./validation";
import { NOTION_API_KEY, NOTION_DATABASE_ID } from "../env";
import { setTaskProperties } from "./setTaskProperties";
import { validateDate } from "./dateHandler";
import { Task } from "./task";

export type PageAddResult = {
  success: boolean;
  errorMsg?: string | Error;
  page?: CreatePageResponse;
};

const notion = new Client({
  auth: NOTION_API_KEY,
});

/**
 * Adds a new task to Notion
 * @param {*} taskObj Object containing task data
 * @param {*} assignedBy The username of the person who assigned the task
 * @returns If successful, returns true and the url of the new page. Else, returns false and the error message.
 */
async function addTaskNotionPage(
  taskObj: Task,
  assignedBy: string,
): Promise<PageAddResult> {
  // Make sure due date is not in the past

  const duedate = taskObj.dueDate;
  if (validateDueDate(duedate)) {
    console.log("yay! the due date is not in the past!");

    const taskProperties = setTaskProperties(taskObj, assignedBy);
    try {
      const newPage = await notion.pages.create({
        parent: {
          database_id: NOTION_DATABASE_ID,
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
      }
      else {
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
