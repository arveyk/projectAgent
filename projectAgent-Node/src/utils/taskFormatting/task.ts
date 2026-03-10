import {
  GroupObjectResponse,
  isFullUser,
  PageObjectResponse,
  PartialUserObjectResponse,
  UserObjectResponse,
} from "@notionhq/client";
import { BlockAction } from "@slack/bolt";
import { PersonNoId, SlackUser } from "../controllers/userTypes";
import { TaskParseResult } from "../aiagent";
import { ProjectWithName, Task, TaskPage, TaskPageNewTask } from "../../domain";


/**
 * Extracted task details together with info of the user creating the task (which will be used to create the assignedBy field)
 */
export type ParsedData = {
  task: Task;
  taskCreator: SlackUser;
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

  const dueDate = taskInput.dueDate;
  const startDate = taskInput.startDate;
  const assignees = taskInput.assignees
    ? taskInput.assignees.map((assignee) => {
        return { name: assignee };
      })
    : [];

  const taskProjects = taskInput.projects || [];

  // Only put anything in the similarProjects field if no exact project matches were found
  const similarProjects =
    taskProjects.length > 0 ? [] : taskInput.similarProjects || [];

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
    dueDate: dueDate ? dueDate : undefined,
    startDate: startDate ? startDate : undefined,
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
): TaskPageNewTask {
  if (payload["actions"][0].type === "button") {
    const interactionsValue = JSON.parse(
      payload["actions"][0]["value"] || "{}",
    );
    const taskPageObj: TaskPageNewTask = JSON.parse(
      payload["actions"][0]["value"] || "{}",
    );
    console.log("Interactions Value", JSON.stringify(interactionsValue));
    console.log("Task Details Obj", JSON.stringify(taskPageObj));
    let taskPage: TaskPageNewTask;

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
      ? properties["Assigned to"].people
          .map(extractAssignees)
          .filter((person) => person !== null)
      : [];

  const assignedBy =
    "people" in properties["Assigned by"]
      ? properties["Assigned by"].people
          .map(extractAssignees)
          .filter((person) => person !== null)
      : [];

  const dueDate =
    "date" in properties["Due"]
      ? properties["Due"].date
        ? properties["Due"].date.start
        : undefined
      : undefined;
  const startDate =
    "date" in properties["Start"]
      ? properties["Start"].date
        ? properties["Start"].date.start
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
 * @returns A PersonNoId object, ignoring bots and groups, or null if the response is not a person user.
 */
export function extractAssignees(
  response:
    | PartialUserObjectResponse
    | UserObjectResponse
    | GroupObjectResponse,
): PersonNoId | null {
  if (
    response["object"] !== "user" ||
    !isFullUser(response) ||
    response["type"] !== "person"
  ) {
    return null;
  }

  const user: PersonNoId = {
    name: response["name"] !== null ? response["name"] : "Unnamed person",
    email: response["person"]["email"],
  };
  return user;
}
