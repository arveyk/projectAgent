export type Task = {
  taskTitle: string;
  assignee: string;
  dueDate: Date;
  startDate?: Date;
  phoneNumber?: string;
  email?: string;
  preferredChannel?: string;
  description: string;
  project?: string;
};

export type TaskPage = {
  task: Task;
  pageId: string;
  url?: string;
};

export function convertTask(taskInput: Record<string, any>): Task {
  console.log(JSON.stringify(taskInput));
  if (!taskInput["tasktitle"]) {
    throw new Error("Task title is missing");
  }
  if (!taskInput["assignee"]) {
    throw new Error("Assignee is missing");
  }
  if (!taskInput["duedate"]) {
    throw new Error("Due date is missing");
  }
  if (!taskInput["description"]) {
    throw new Error("Description is missing");
  }

  const dueDate = new Date(taskInput["duedate"]);
  const startDate =
    taskInput["startdate"] !== "<UNKNOWN>"
      ? new Date(taskInput["startdate"])
      : undefined;

  return {
    taskTitle: taskInput["tasktitle"],
    assignee: taskInput["assignee"],
    dueDate: dueDate,
    startDate: startDate,
    phoneNumber:
      taskInput["phonenumber"] !== "<UNKNOWN>"
        ? taskInput["phonenumber"]
        : undefined,
    email: taskInput["email"] !== "<UNKNOWN>" ? taskInput["email"] : undefined,
    preferredChannel:
      taskInput["preferredchannel"] !== "<UNKNOWN>"
        ? taskInput["preferredchannel"]
        : undefined,
    description: taskInput["description"],
    project:
      taskInput["project"] !== "<UNKNOWN>" ? taskInput["project"] : undefined,
  };
}
