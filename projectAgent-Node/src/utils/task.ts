import { PageObjectResponse } from "@notionhq/client";
import { BlockAction } from "@slack/bolt";

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

export function convertTaskPageFromButtonPayload(payload: BlockAction): TaskPage {
  if (payload["actions"][0].type === "button") {
    // TODO convert payload from sendApprove to TaskPage object
    const taskDetailsObj: TaskPage = JSON.parse(payload["actions"][0]["value"] || "{}");

    const taskPage: TaskPage = {
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

  return taskPage;
  }
  else {
    throw new Error("Somehow, the button payload is not a button payload")
  }
}

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
      : undefined
    : undefined;
  const email = "email" in properties["Email"]
    ? properties["Email"].email || undefined
    : undefined;
  const phoneNumber = "phone_number" in properties["Phone Number"]
    ? properties["Phone Number"].phone_number || undefined
    : undefined;
  const preferredChannel = ("rich_text" in properties["Preferred Channel"] && properties["Preferred Channel"]["rich_text"][0] !== undefined)
  ? "plain_text" in properties["Preferred Channel"]["rich_text"][0]
    ? properties["Preferred Channel"].rich_text[0].plain_text
    : undefined
  : undefined;
  const description = ("rich_text" in properties["Description"] && properties["Description"]["rich_text"][0] !== undefined)
  ? "plain_text" in properties["Description"]["rich_text"][0]
    ? properties["Description"].rich_text[0].plain_text
    : ""
  : "";
  const project = ("rich_text" in properties["Project"] && properties["Project"]["rich_text"][0] !== undefined) 
  ? "plain_text" in properties["Project"]["rich_text"][0]
    ? properties["Project"].rich_text[0].plain_text
    : undefined
  : undefined;
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