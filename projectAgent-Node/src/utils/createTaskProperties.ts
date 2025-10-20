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
  if (assignees.length > 0 && assignees[0] !== undefined) {
    return Promise.all(
      assignees.map((assignee) => {
        return createNotionPerson(assignee);
      }),
    );
  } else {
    return [];
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
  console.log(project);
  return [
    // Commented out until we implement getting Project id
    // {
    //   id: ""
    // }
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
  if (assignedBy.length > 0 && assignedBy[0] !== undefined) {
    return Promise.all(
      assignedBy.map((assigner) => {
        return createNotionPerson(assigner);
      }),
    );
  } else {
    return [];
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
    "Start": {
      date: {
        start: startDate.toString(),
      },
    },
    Description: {
      rich_text: createDescriptionArray(description),
    },
    /*
     * Not in the projects Database
    "Date Assigned": {
      date: {
        start: dateAssigned,
      },
    },*/
    
    // TODO implement getting Project id
    Project: {
      relation: createProjectArray(project),
    },
    "Assigned by": {
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
