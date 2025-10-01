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

export function convertTask(taskInput: Record<string, any>): Task {
  console.log(JSON.stringify(taskInput));
  if (!taskInput["tasktitle"]){
    throw new Error("Task title is missing");
  }
  if (!taskInput["assignee"]){
    throw new Error("Assignee is missing");
  }
  if (!taskInput["duedate"]){
    throw new Error("Due date is missing");
  }
  if (!taskInput["startdate"]){
    throw new Error("Start date is missing");
  }
  if (!taskInput["phonenumber"]){
    throw new Error("Phone number is missing");
  }
  if (!taskInput["email"]){
    throw new Error("Email is missing");
  }
  if (!taskInput["preferredchannel"]){
    throw new Error("Preferred channel is missing");
  }
  if (!taskInput["description"]){
    throw new Error("Description is missing");
  }
  if (!taskInput["project"]){
    throw new Error("Project is missing");
  }

  const dueDate = new Date(taskInput["duedate"]);
  const startDate = new Date(taskInput["startdate"]);

  return {
    taskTitle: taskInput["tasktitle"],
    assignee: taskInput["assignee"],
    dueDate: taskInput["duedate"],
    startDate: taskInput["startdate"] !== "<UNKNOWN>" ? taskInput["startdate"] : undefined,
    phoneNumber: taskInput["phonenumber"] !== "<UNKNOWN>" ? taskInput["phonenumber"] : undefined,
    email: taskInput["email"] !== "<UNKNOWN>" ? taskInput["email"] : undefined,
    preferredChannel: taskInput["preferredchannel"] !== "<UNKNOWN>" ? taskInput["preferredchannel"] : undefined,
    description: taskInput["description"],
    project: taskInput["project"] !== "<UNKNOWN>" ? taskInput["project"] : undefined,
  }
}
