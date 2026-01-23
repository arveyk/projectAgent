import { NotionTask } from "./task";
import { NotionUser } from "../controllers/userTypes";

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
      assignees
        .map((assignee) => {
          if (assignee !== null) {
            return createNotionPerson(assignee);
          }
        })
        .filter((assignee) => assignee !== undefined),
    );
  } else {
    return [];
  }
};

const createProjectArray = function (project: { id: string }[]) {
  console.log(`project: ${JSON.stringify(project)}`);
  return project;
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
      assignedBy
        .map((assigner) => {
          if (assigner !== null) {
            return createNotionPerson(assigner);
          }
        })
        .filter((assigner) => assigner !== undefined),
    );
  } else {
    return [];
  }
};

export const createTaskProperties = async function (taskObj: NotionTask) {
  const taskTitle = taskObj.taskTitle;
  const assignees = taskObj.assignees;
  const assignedBy = taskObj.assignedBy;
  const dueDate = taskObj.dueDate;
  const startDate = taskObj.startDate;
  const project = taskObj.project || [];

  return {
    "Task name": {
      title: createTitleArray(taskTitle),
    },
    "Assigned to": {
      people: await createAssigneeArray(assignees),
    },
    Due: {
      date: typeof dueDate !== "undefined"
        ? {
            start: dueDate,
          }
        : null,
    },

    Start: {
      date: typeof startDate !== "undefined"
      ? {
        start: startDate,
      }
      : null,
    },

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
