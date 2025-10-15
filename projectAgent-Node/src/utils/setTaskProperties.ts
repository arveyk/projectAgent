import { object } from "zod";
import { Person, Task } from "./task.js";

const setTitleArray = function (taskTitle: string) {
  return [
    {
      text: {
        content: taskTitle,
      },
    },
  ];
};
const setAssigneeArray = function (assignees: Person[]) {
  return assignees.map((assignee) => {
    return setPerson(assignee)
  })
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
const setAssignedByArray = function (assignedBy: Person[]) {
  return assignedBy.map((assigner) => {
    return setPerson(assigner)
  })
};
export const setTaskProperties = function (taskObj: Task, assignedBy: Person[]) {
  // export const setTaskProperties = function (taskObj: Task, assignedBy: {name: string, email: string}[]) {
  const taskTitle = taskObj["taskTitle"];
  const assignees = taskObj["assignees"];
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
      people: setAssigneeArray(assignees),
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
      people: setAssignedByArray(assignedBy),
    },
  };
};

function setPerson(assignee: Person): { object: string; id: string; name: string; type: string; person: { email: string | undefined; }; } {
  return {
    object: "user",
    id: "",
    name: assignee.name,
    type: "person",
    person: {
      email: assignee.email
    }
  };
}

