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
  const dueDate = taskObj["dueDate"];
  const startDate = taskObj["startDate"]
    ? taskObj["startDate"]
    : new Date().toISOString();
  const description = taskObj["description"];
  const dateAssigned = new Date().toISOString();
  const project = taskObj["project"] || " ";

  return {
    "Task name": {
      title: setTitleArray(taskTitle),
    },
    "Assigned to": {
      rich_text: setAssigneeArray(assignee),
    },
    "Due": {
      date: {
        start: dueDate.toString(),
      },
    },
    "Start Date": {
      date: {
        start: startDate.toString(),
      },
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
