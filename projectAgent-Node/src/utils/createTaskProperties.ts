import { NotionTask } from "./task.js";
import { NotionUser } from "./controllers/userTypes.js";

const createTitleArray = function (taskTitle: string) {
  return [
    {
      text: {
        content: taskTitle,
      },
    },
  ];
};

const createAssigneeArray = async function (assignees: NotionUser[]) {
  if (assignees.length > 0) {
    return Promise.all(
      assignees.map((assignee) => {
        return createNotionPerson(assignee);
      }),
    );
  } else {
    return [{ object: "user", id: "" }];
  }
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

const createAssignedByArray = async function (
  assignedBy: NotionUser[],
): Promise<
  {
    object: "user";
    id: string;
  }[]
> {
  if (assignedBy.length > 0) {
    return Promise.all(
      assignedBy.map((assigner) => {
        return createNotionPerson(assigner);
      }),
    );
  } else {
    return [{ object: "user", id: "" }];
  }
};

export const createTaskProperties = async function (taskObj: NotionTask) {
  // export const setTaskProperties = function (taskObj: Task, assignedBy: {name: string, email: string}[]) {
  const taskTitle = taskObj["taskTitle"];
  const assignees = taskObj["assignees"];
  const assignedBy = taskObj["assignedBy"];
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
      people: await createAssigneeArray(assignees),
    },
    Due: {
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
      people: await createAssignedByArray(assignedBy),
    },
  };
};

async function createNotionPerson(
  person: NotionUser,
): Promise<{ object: "user"; id: string }> {
  return {
    object: "user",
    id: person.userId,
  };
}
