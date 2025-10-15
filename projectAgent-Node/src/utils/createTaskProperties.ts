import { object } from "zod";
import { Person, Task } from "./task.js";

const createTitleArray = function (taskTitle: string) {
  return [
    {
      text: {
        content: taskTitle,
      },
    },
  ];
};
const createAssigneeArray = function (assignees: Person[]) {
  return assignees.map((assignee) => {
    return createNotionPerson(assignee)
  })
};

const createDescriptionArray = function (description: string) {
  return [
    {
      text: {
        content: description,
      },
    },
  ];
};
const createProjectArray = function (project: string) {
  return [
    {
      text: {
        content: project,
      },
    },
  ];
};
const createAssignedByArray = function (assignedBy: Person[]) {
  return assignedBy.map((assigner) => {
    return createNotionPerson(assigner)
  })
};
export const createTaskProperties = function (taskObj: Task, assignedBy: Person[]) {
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
      title: createTitleArray(taskTitle),
    },
    "Assigned to": {
      people: createAssigneeArray(assignees),
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
      rich_text: createDescriptionArray(description),
    },
    "Date Assigned": {
      date: {
        start: dateAssigned,
      },
    },
    Project: {
      rich_text: createProjectArray(project),
    },
    "Assigned By": {
      people: createAssignedByArray(assignedBy),
    },
  };
};

function createNotionPerson(assignee: Person): { object: string; id: string; name: string; type: string; person: { email: string | undefined; }; } {
  return {
    object: "user",
    // TODO this needs to be an actual id of a person in the workspace
    id: "",
    name: assignee.name,
    type: "person",
    person: {
      email: assignee.email
    }
  };
}

