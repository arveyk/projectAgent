import { Client } from "@notionhq/client";
import { validateDueDate } from "./validation.js";
import { NOTION_API_KEY, NOTION_DATABASE_ID } from "../env.js";

const notion = new Client({
  auth: NOTION_API_KEY,
});

const titleArray = [
  {
    type: "text",
    text: {
      content: "Create Online E-commerce platform",
      link: null,
    },
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: "default",
    },
    plain_text: "Title of the task",
    href: null,
  },
];

const assigneeArr = [
  {
    type: "text",
    text: {
      content: "Jake Bezoz",
      link: null,
    },
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      code: false,
      color: "default",
    },
    href: null,
  },
];
const prefCommChannArr = [
  {
    type: "text",
    text: {
      content: "Slack or What",
      link: null,
    },
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      code: false,
      color: "default",
    },
    href: null,
  },
];

const descriptionArr = [
  {
    type: "text",
    text: {
      content:
        "Create a website to show case Vetcare's range of aniamal feeds, their theme colors are green blue and white, please play mainly with those",
      link: null,
    },
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: "default",
    },
    href: null,
  },
];

const projectArr = [
  {
    type: "text",
    text: {
      content: "A Project",
      link: null,
    },
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      code: false,
      color: "default",
    },
    href: null,
  },
];

const TaskProperties = {
  "Task Title": {
    type: "title",
    title: titleArray,
  },
  Assignee: {
    type: "rich_text",
    rich_text: assigneeArr,
  },
  "Due Date": {
    type: "date",
    date: {
      start: "2025-05-11",
    },
  },
  "Start Date": {
    type: "date",
    date: {
      start: "2026-01-11",
    },
  },
  "Phone Number": {
    type: "phone_number",
    phone_number: "124-542-0973",
  },
  Email: {
    type: "email",
    email: "example@email.com",
  },
  "Preferred Channel": {
    type: "rich_text",
    rich_text: prefCommChannArr,
  },
  Description: {
    type: "rich_text",
    rich_text: descriptionArr,
  },
  "Date Assigned": {
    type: "date",
    date: {
      start: "2025-05-11",
    },
  },
  Project: {
    type: "rich_text",
    rich_text: projectArr,
  },
};

async function addTaskNotionPage(taskObj) {
  const taskTitle = taskObj["tasktitle"];
  const assignee = taskObj["assignee"];
  const dueDate = new Date(taskObj["duedate"]).toISOString();
  const startDate =
    taskObj["startdate"] !== ""
      ? new Date(taskObj["startdate"]).toISOString()
      : new Date().toISOString();
  const email = taskObj["email"] || " ";
  const phoneNumber = taskObj["phonenumber"] || " ";
  const preferredChannel = taskObj["preferredchannel"] || "Slack";
  const dateAssigned = new Date().toISOString();
  const project = taskObj["project"] || " ";

  // Make sure due date is not in the past
  if (validateDueDate(dueDate)) {
    console.log("yay! the due date is not in the past!");

    TaskProperties["Task Title"]["title"][0]["text"]["content"] = taskTitle;
    TaskProperties["Assignee"]["rich_text"][0]["text"]["content"] = assignee;
    TaskProperties["Due Date"]["date"]["start"] = dueDate;
    TaskProperties["Start Date"]["date"]["start"] = startDate;
    TaskProperties["Email"]["email"] = email;
    TaskProperties["Phone Number"]["phone_number"] = phoneNumber;
    TaskProperties["Preferred Channel"]["rich_text"][0]["text"]["content"] =
      preferredChannel;
    TaskProperties["Description"]["rich_text"][0]["text"]["content"] =
      taskObj["taskdetail"];
    TaskProperties["Date Assigned"]["date"]["start"] = dateAssigned;
    TaskProperties["Project"]["rich_text"][0]["text"]["content"] = project;

    try {
      throw new Error("sabotage");
      const newPage = await notion.pages.create({
        parent: {
          database_id: NOTION_DATABASE_ID,
        },
        properties: TaskProperties,
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
