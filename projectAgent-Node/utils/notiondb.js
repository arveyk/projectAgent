import { Client } from "@notionhq/client";
import { validateDueDate } from "./validation.js";
import { NOTION_API_KEY, NOTION_DATABASE_ID } from "../env.js";
import { setTaskProperties } from "./setTaskProperties.js";
import { validateDate } from "./dateHandler.js";

const notion = new Client({
  auth: NOTION_API_KEY,
});

/**
 * Adds a new task to Notion
 * @param {*} taskObj Object containing task data
 * @param {*} assignedBy The username of the person who assigned the task
 * @returns If successful, returns true and the url of the new page. Else, returns false and the error message.
 */
async function addTaskNotionPage(taskObj, assignedBy) {
  // Make sure due date is not in the past

  const duedate = new Date(validateDate(taskObj["duedate"]));
  if (validateDueDate(duedate.toISOString())) {
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
      return {
        success: false,
        errorMsg: error,
      };
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
