import { validateDate } from "./dateHandler";
import { Task } from "./task";

const setTitleArray = function (taskTitle: string) {
  return [
    {
      type: "text",
      text: {
        content: taskTitle,
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
};
const setAssigneeArray = function (assignee: string) {
  return [
    {
      type: "text",
      text: {
        content: assignee,
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
};
const setPreferredChannelArray = function (preferredChannel: string) {
  return [
    {
      type: "text",
      text: {
        content: preferredChannel,
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
};
const setDescriptionArray = function (description: string) {
  return [
    {
      type: "text",
      text: {
        content: description,
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
};
const setProjectArray = function (project: string) {
  return [
    {
      type: "text",
      text: {
        content: project,
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
};
const setAssignedByArray = function (assignedBy: string) {
// const setAssignedByArray = function (assignedBy: {name: string, email: string}[]) {
  return [
    {
      type: "text",
      text: {
        content: assignedBy,
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
};
export const setTaskProperties = function (taskObj: Task, assignedBy: string) {
// export const setTaskProperties = function (taskObj: Task, assignedBy: {name: string, email: string}[]) {
  const taskTitle = taskObj["taskTitle"];
  const assignee = taskObj["assignee"];
  const dueDate = validateDate(taskObj["dueDate"].toISOString());
  const startDate =
    taskObj["startDate"] ? validateDate(taskObj["startDate"].toISOString()): new Date().toISOString();
    // taskObj["startDate"] !== ""
    //? new Date(taskObj["startdate"]).toISOString()
    //    new validateDate(taskObj["startDate"]).toISOString()
    //  : new Date().toISOString();
  const email = taskObj["email"] || " ";
  const phoneNumber = taskObj["phoneNumber"] || " ";
  const preferredChannel = taskObj["preferredChannel"] || "Slack";
  const description = taskObj["description"];
  const dateAssigned = new Date().toISOString();
  const project = taskObj["project"] || " ";

  return {
    "Task Title": {
      type: "title",
      title: setTitleArray(taskTitle),
    },
    Assignee: {
      type: "rich_text",
      rich_text: setAssigneeArray(assignee),
    },
    "Due Date": {
      type: "date",
      date: {
        start: dueDate,
      },
    },
    "Start Date": {
      type: "date",
      date: {
        start: startDate,
      },
    },
    "Phone Number": {
      type: "phone_number",
      phone_number: phoneNumber,
    },
    Email: {
      type: "email",
      email: email,
    },
    "Preferred Channel": {
      type: "rich_text",
      rich_text: setPreferredChannelArray(preferredChannel),
    },
    Description: {
      type: "rich_text",
      rich_text: setDescriptionArray(description),
    },
    "Date Assigned": {
      type: "date",
      date: {
        start: dateAssigned,
      },
    },
    Project: {
      type: "rich_text",
      rich_text: setProjectArray(project),
    },
    "Assigned By": {
      type: "rich_text",
      rich_text: setAssignedByArray(assignedBy),
    },
  };
};
