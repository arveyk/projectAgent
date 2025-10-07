import de from "zod/dist/types/v4/locales/de.js";
import { validateDate } from "./dateHandler.js";
import { Task } from "./task.js";

const setTitleArray = function (taskTitle: string) {
  return [
    {
      text: {
        content: taskTitle,
      },
    },
  ];
};
const setAssigneeArray = function (assignee: string) {
  return [
    {
      text: {
        content: assignee,
      },
    },
    /*
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      code: false,
      color: "default",
    },
    href: null,
    */
  ];
};
const setPreferredChannelArray = function (preferredChannel: string) {
  return [
    {
      text: {
        content: preferredChannel,
      },
    },
  ];
};
const setDescriptionArray = function (description: string) {
  return [
    {
      text: {
        content: description,
      },
    },
  ];
};
const setProjectArray = function (project: string) {
  return [
    {
      text: {
        content: project,
      },
    },
  ];
};
const setAssignedByArray = function (assignedBy: string) {
  // const setAssignedByArray = function (assignedBy: {name: string, email: string}[]) {
  return [
    {
      text: {
        content: assignedBy,
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
  const startDate = taskObj["startDate"]
    ? validateDate(taskObj["startDate"].toISOString())
    : new Date().toISOString();
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
      title: setTitleArray(taskTitle),
    },
    Assignee: {
      rich_text: setAssigneeArray(assignee),
    },
    "Due Date": {
      date: {
        start: dueDate.toString(),
      },
    },
    "Start Date": {
      date: {
        start: startDate.toString(),
      },
    },
    "Phone Number": {
      phone_number: phoneNumber,
    },
    Email: {
      email: email,
    },
    "Preferred Channel": {
      rich_text: setPreferredChannelArray(preferredChannel),
    },
    Description: {
      rich_text: setDescriptionArray(description),
    },
    "Date Assigned": {
      date: {
        start: dateAssigned,
      },
    },
    Project: {
      rich_text: setProjectArray(project),
    },
    "Assigned By": {
      rich_text: setAssignedByArray(assignedBy),
    },
  };
};
