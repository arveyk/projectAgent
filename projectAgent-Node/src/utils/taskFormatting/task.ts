import {
  GroupObjectResponse,
  isFullUser,
  PageObjectResponse,
  PartialUserObjectResponse,
  UserObjectResponse,
} from "@notionhq/client";
import { BlockAction } from "@slack/bolt";
import { NotionUser } from "../controllers/userTypes";
import { TaskParseResult } from "../aiagent";
import { DateTime } from "luxon";

/**
 * Notion users identified and ambiguous for a task.
 */
export type FoundUsers = {
  identifiedUsers: NotionUser[];
  ambiguousUsers: NotionUser[];
};

/**
 * A person without a user id.
 */
export type PersonNoId = {
  name: string;
  email?: string;
};

/** A project with a name and a project id. */
export type ProjectWithName = {
  projectName: string;
  id: string;
};

/**
 * A Slack user.
 */
export type User = {
  userId: string;
  name: string;
  email: string;
};

/** Extracted task details together with info of the user creating the task (which will be
used to create the assignedBy field) */
export type ParsedData = {
  task: Task;
  taskCreator: User;
};

/**
 * A task.
 */
export type Task = {
  taskTitle: string;
  assignees: PersonNoId[];
  dueDate?: Date;
  startDate?: Date;
  description: string;
  project?: { id: string }[];
  existingProjects?: ProjectWithName[];
  similarProjects?: { id: string }[];
};

/**
 * A task as represented in Notion.
 */
export type NotionTask = {
  taskTitle: string;
  assignees: NotionUser[];
  assignedBy: NotionUser[];
  dueDate?: Date;
  startDate?: Date;
  description: string;
  project?: {
    id: string;
  }[];
};

/**
 * A task page in Notion.
 */
export type TaskPage = {
  task: NotionTask;
  pageId: string;
  url?: string;
};

/**
 * Converts data parsed by the LLM into a Task object.
 * @param taskInput The parsed task data.
 * @param notionProjects A list of Notion projects the task is assigned to.
 * @returns A Task object.
 */
export function convertTask(
  taskInput: TaskParseResult,
  notionProjects: ProjectWithName[],
): Task {
  console.log(JSON.stringify(taskInput));

  const dueDate = taskInput.dueDate
    ? new Date(taskInput["dueDate"])
    : undefined;
  const startDate = taskInput.startDate
    ? new Date(taskInput["startDate"])
    : DateTime.now().toJSDate();
  const assignees = taskInput.assignees
    ? taskInput.assignees.map((assignee) => {
        return { name: assignee };
      })
    : [];
  const similarProjects = taskInput.similarProjects || [];

  const taskProjects = taskInput.projects || [];

  const identifiedProjects: { id: string }[] = [];

  const projectsToSelectFrom: { id: string }[] = [];

  console.log(
    `notionProjects${JSON.stringify(notionProjects)}\ntaskProjects: ${taskProjects}`,
  );

  notionProjects.forEach((projectFromAllProjectsArray) => {
    if (similarProjects.includes(projectFromAllProjectsArray.projectName)) {
      projectsToSelectFrom.push({ id: projectFromAllProjectsArray.id });
    }
    if (taskProjects.includes(projectFromAllProjectsArray.projectName)) {
      identifiedProjects.push({ id: projectFromAllProjectsArray.id });
    }
  });

  return {
    taskTitle: taskInput["taskTitle"],
    assignees: assignees,
    dueDate: dueDate,
    startDate: startDate,
    description: taskInput["description"],
    project: identifiedProjects,
    similarProjects: projectsToSelectFrom,
  };
}

/**
 * Converts a button payload to a TaskPage.
 * @param payload The payload sent by a Slack button interaction.
 * @returns A TaskPage object.
 */
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

/**
 * Converts a Notion page response to a TaskPage.
 * @param pageResponse The response from a Notion page query.
 * @returns A TaskPage object.
 */
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
        : undefined
      : undefined;
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
    "relation" in properties["Project"] &&
    properties["Project"]["relation"][0] !== undefined
      ? properties["Project"]["relation"]
      : [];
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
 * @param response A Notion user response.
 * @returns A NotionUser object.
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
