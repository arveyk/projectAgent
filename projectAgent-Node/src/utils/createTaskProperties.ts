import { object } from "zod";
import { Person, Task } from "./task.js";
import { findMatchingNotionUser } from "./controllers/userCreds.js";
import no from "zod/dist/types/v4/locales/no.js";

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

async function createNotionPerson(person: Person): Promise<{ object: "user"; id: string; }> {
  const notionResults = await findMatchingNotionUser(person.name);
  let id;
  // TODO eventually, handle multiple matches in a better way
  if (notionResults.length >= 1) {
    id = notionResults[0].userId;
  }
  else {
    throw new Error(`User ${person.name} not found in Notion`)
  }
  return {
    object: "user",
    id: id,
  };
}

