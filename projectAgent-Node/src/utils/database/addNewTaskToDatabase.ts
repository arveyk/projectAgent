import { Client, CreatePageResponse } from "@notionhq/client";
import { validateDueDate } from "../timeHandling/dateHandler";
import { NOTION_API_KEY, NOTION_TASKS_DATA_SOURCE_ID } from "../../env";
import { createTaskProperties } from "../taskFormatting/createTaskProperties";
import { NotionTask } from "../taskFormatting/task";
import { createTaskBody } from "../taskFormatting/createTaskBody";

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
 * @param {*} taskObj Object containing task data.
 * @returns If successful, returns true and the url of the new page. Else, returns false and the error message.
 */
export async function addTaskNotionPage(
  taskObj: NotionTask,
): Promise<PageAddResult> {
  // Make sure due date is not in the past

  const dueDate = taskObj.dueDate ? taskObj.dueDate : undefined;
  console.log(`(addtaskNotionPage) taskObj: ${JSON.stringify(taskObj)}`);
  if ((dueDate && validateDueDate(dueDate)) || !dueDate) {
    console.log("yay! the due date is not in the past!");

    const taskProperties = await createTaskProperties(taskObj);
    console.log("Created task properties");
    const taskBody = createTaskBody(taskObj);
    console.log("Created task body");
    try {
      console.log("Adding task to Notion...");
      const newPage = await notion.pages.create({
        parent: {
          type: "data_source_id",
          data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
        },
        properties: taskProperties,
        children: taskBody,
      });
      console.log(newPage);
      return {
        success: true,
        page: newPage,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          "(addTaskNotionPage) Error adding task to Notion:",
          error.message,
        );
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
