import {
  GroupObjectResponse,
  isFullUser,
  PageObjectResponse,
  PartialUserObjectResponse,
  UserObjectResponse,
} from "@notionhq/client";
import { BlockAction } from "@slack/bolt";
import { NotionUser } from "./controllers/userTypes";

export type PersonNoId = {
  name: string;
  email?: string;
};

export type Task = {
  taskTitle: string;
  assignees: PersonNoId[];
  dueDate: Date;
  startDate?: Date;
  description: string;
  project?: string;
};

// TODO function to create a NotionTask from a Task, a list of NotionUser assignees, and a list of NotionUser assigned-by's
export type NotionTask = {
  taskTitle: string;
  assignees: NotionUser[];
  assignedBy: NotionUser[];
  dueDate: Date;
  startDate?: Date;
  description: string;
  project?: string;
};

export type TaskPage = {
  task: NotionTask;
  pageId: string;
  url?: string;
};

export function convertTask(taskInput: Record<string, any>): Task {
  console.log(JSON.stringify(taskInput));
  if (!taskInput["taskTitle"]) {
    throw new Error("Task title is missing");
  }
  if (!taskInput["assignees"]) {
    throw new Error("Assignees missing");
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
    assignees: taskInput["assignees"],
    dueDate: dueDate,
    startDate: startDate,
    description: taskInput["description"],
    project:
      taskInput["project"] !== "<UNKNOWN>" ? taskInput["project"] : undefined,
  };
}

export function convertTaskPageFromButtonPayload(
  payload: BlockAction,
): TaskPage {
  if (payload["actions"][0].type === "button") {
    const interactionsValue = JSON.parse(
      payload["actions"][0]["value"] || "{}",
    );
    const taskPageObj: TaskPage = JSON.parse(
      payload["actions"][0]["value"] || "{}",
    );
    console.log("Interactions Value", JSON.stringify(interactionsValue));
    console.log("Task Details Obj", JSON.stringify(taskPageObj));
    let taskPage: TaskPage;

    if (taskPageObj.url) {
      taskPage = {
        task: {
          taskTitle: taskPageObj.task.taskTitle,
          assignees: taskPageObj.task.assignees,
          assignedBy: taskPageObj.task.assignedBy,
          dueDate: taskPageObj.task.dueDate,
          startDate: taskPageObj.task.startDate,
          description: taskPageObj.task.description,
          project: taskPageObj.task.project,
        },
        url: taskPageObj.url,
        pageId: taskPageObj.pageId,
      };
    } else {
      taskPage = {
        task: {
          taskTitle: interactionsValue.taskTitle,
          assignees: interactionsValue.assignee,
          assignedBy: interactionsValue.assignedBy,
          dueDate: interactionsValue.dueDate,
          startDate: interactionsValue.startDate,
          description: interactionsValue.description,
          project: interactionsValue.project,
        },
        url: "",
        pageId: "",
      };
    }
    return taskPage;
  } else {
    throw new Error("Somehow, the button payload is not a button payload");
  }
}

export function convertTaskPageFromDbResponse(
  pageResponse: PageObjectResponse,
): TaskPage {
  console.log(
    `(convertTaskPageFromDbResponse) pageResponse: ${JSON.stringify(pageResponse)}`,
  );
  const properties = pageResponse["properties"];

  const title =
    "title" in properties["Task name"]
      ? properties["Task name"].title[0].plain_text
      : "No Title Provided";
  const assignees =
    "people" in properties["Assigned to"]
      ? properties["Assigned to"].people.map((response) =>
          extractAssignees(response),
        )
      : [];

  const assignedBy =
    "people" in properties["Assigned by"]
      ? properties["Assigned by"].people.map((response) =>
          extractAssignees(response),
        )
      : [];

  const dueDate =
    "date" in properties["Due"]
      ? properties["Due"].date
        ? new Date(properties["Due"].date.start)
        : new Date()
      : new Date();
  const startDate =
    "date" in properties["Start"]
      ? properties["Start"].date
        ? new Date(properties["Start"].date.start)
        : undefined
      : undefined;
  const description =
    "rich_text" in properties["Description"] &&
    properties["Description"]["rich_text"][0] !== undefined
      ? "plain_text" in properties["Description"]["rich_text"][0]
        ? properties["Description"].rich_text[0].plain_text
        : ""
      : "";
  const project =
    "rich_text" in properties["Project"] &&
    properties["Project"]["rich_text"][0] !== undefined
      ? "plain_text" in properties["Project"]["rich_text"][0]
        ? properties["Project"].rich_text[0].plain_text
        : undefined
      : undefined;
  const url = pageResponse.url;
  const pageId = pageResponse.id;

  const existingTaskPage: TaskPage = {
    task: {
      taskTitle: title,
      assignees: assignees,
      assignedBy: assignedBy,
      dueDate: dueDate,
      startDate: startDate,
      description: description,
      project: project,
    },
    url: url,
    pageId: pageId,
  };

  return existingTaskPage;
}

/**
 * Extracts a list of assignees from a database response
 * @param response
 * @returns
 */
export function extractAssignees(
  response:
    | PartialUserObjectResponse
    | UserObjectResponse
    | GroupObjectResponse,
): NotionUser {
  if (response["object"] === "user") {
    if (isFullUser(response)) {
      if (response["type"] === "person") {
        const user: NotionUser = {
          name: response["name"] !== null ? response["name"] : "Unnamed person",
          email: response["person"]["email"],
          userId: response["id"],
        };
        return user;
      } else {
        throw new Error("Assignee is not a person");
      }
    } else {
      throw new Error("Assignee is not a full user");
    }
  } else {
    throw new Error("Person is the wrong type");
  }
}
