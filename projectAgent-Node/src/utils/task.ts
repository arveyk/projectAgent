import { PageObjectResponse } from "@notionhq/client";

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
  if (!taskInput["taskTitle"]) {
    throw new Error("Task title is missing");
  }
  if (!taskInput["assignee"]) {
    throw new Error("Assignee is missing");
  }
  if (!taskInput["dueDate"]) {
    throw new Error("Due date is missing");
  }
  if (!taskInput["description"]) {
    throw new Error("Description is missing");
  }

  const dueDate = new Date(taskInput["dueDate"]);
  const startDate =
    taskInput["startdate"] !== "<UNKNOWN>"
      ? new Date(taskInput["startDate"])
      : undefined;

  return {
    taskTitle: taskInput["taskTitle"],
    assignee: taskInput["assignee"],
    dueDate: dueDate,
    startDate: startDate,
    phoneNumber:
      taskInput["phoneNumber"] !== "<UNKNOWN>"
        ? taskInput["phoNenumber"]
        : undefined,
    email: taskInput["email"] !== "<UNKNOWN>" ? taskInput["email"] : undefined,
    preferredChannel:
      taskInput["preferredChannel"] !== "<UNKNOWN>"
        ? taskInput["preferredChannel"]
        : undefined,
    description: taskInput["description"],
    project:
      taskInput["project"] !== "<UNKNOWN>" ? taskInput["project"] : undefined,
  };
}

// export function convertTaskPage(taskPageInput): TaskPage {
//   // TODO convert payload from sendApprove to TaskPage object
// }

export function convertTaskPageFromDbResponse(pageResponse: PageObjectResponse): TaskPage {
  console.log(`(convertTaskPageFromDbResponse) pageResponse: ${JSON.stringify(pageResponse)}`);
  const properties = pageResponse["properties"];

  const title = "title" in properties["Task Title"]
    ? properties["Task Title"].title[0].plain_text
    : "No Title Provided";
  const assignee = "rich_text" in properties.Assignee
    ? properties["Assignee"].rich_text[0].plain_text
    : "No Assignee";
  const dueDate = "date" in properties["Due Date"]
    ? properties["Due Date"].date
      ? new Date(properties["Due Date"].date.start)
      : new Date()
    : new Date();
  const startDate = "date" in properties["Start Date"]
    ? properties["Start Date"].date
      ? new Date(properties["Start Date"].date.start)
      : new Date()
    : new Date();
  const email = "email" in properties["Email"]
    ? properties["Email"].email || undefined
    : undefined;
  const phoneNumber = "phone_number" in properties["Phone Number"]
    ? properties["Phone Number"].phone_number || undefined
    : undefined;
  const preferredChannel = "rich_text" in properties["Preferred Channel"] 
  ? "plain_text" in properties["Preferred Channel"]["rich_text"][0]
    ? properties["Preferred Channel"].rich_text[0].plain_text
    : ""
  : "";
  const description = "rich_text" in properties["Description"] 
  ? "plain_text" in properties["Description"]["rich_text"][0]
    ? properties["Description"].rich_text[0].plain_text
    : ""
  : "";
  // const project = "rich_text" in properties["Project"] 
  // ? "plain_text" in properties["Project"]["rich_text"][0]
  //   ? properties["Project"].rich_text[0].plain_text
  //   : ""
  // : "";
  let project;
  if ("rich_text" in properties["Project"]) {
    if ("plain_text" in properties["Project"]["rich_text"][0]) {
      project = properties["Project"].rich_text[0].plain_text;
    }
    else {
      project = "";
    }
  }
  else {
    project = "";
  }
  const url = pageResponse.url;
  const pageId = pageResponse.id;

  const existingTaskPage: TaskPage = {
    task: {
      taskTitle:
        title,
      assignee:
        assignee,
      dueDate:
        dueDate,
      startDate:
        startDate,
      email:
        email,
      phoneNumber:
        phoneNumber,
      preferredChannel:
        preferredChannel,
      description:
        description,
      project:
        project,
    },
    url: url,
    pageId: pageId,
  };

  return existingTaskPage;
}