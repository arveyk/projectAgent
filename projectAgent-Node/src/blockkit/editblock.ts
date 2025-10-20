import { validateDate, formatSlackDate } from "../utils/dateHandler";
import { DateTime } from "luxon";
import { Task, TaskPage } from "../utils/task";

export const createTaskInfoBlock = function (taskPageObj: TaskPage) {
  /**
   * Temporarry fix for Date format issue
   */
  // task.dueDate = new Date(task.dueDate);
  const task = taskPageObj.task;
  const assigneesArr = task.assignees;
  let assigneeNames = "";

  console.log(`(createTaskInfoBlock), assigneesArray: ${assigneesArr}, task${JSON.stringify(task)}`);
  if (assigneesArr && Array.isArray(assigneesArr)) {
    assigneesArr.forEach((assignee) => {
      assigneeNames += `${assignee.name}, `;
    });
    assigneeNames = assigneeNames.slice(0, -2); // Remove trailing comma and space
  }
  task.startDate =
    task.startDate && task.startDate.toString() !== "Invalid Date"
      ? new Date(task.startDate)
      : DateTime.now().toJSDate();
  console.log(`(createtaskInfoBlock) task: ${JSON.stringify(taskPageObj)}`);
  console.log(
    `CreateTaskInfoBlock log message => task: ${JSON.stringify(task)}`,
  );
  return `*Task Title:*\t\t\t${task.taskTitle} \n*Assignee:* \t\t\t${assigneeNames}\n*Due Date:*\t\t\t${formatSlackDate(new Date(task.dueDate))}\n*Start Date:*\t\t\t${task.startDate !== new Date(NaN) && task.startDate !== undefined ? formatSlackDate(task.startDate) : task.startDate}\n*Description:* \t\t${task.description}\n*Project:* \t\t${task.project || " "}`;
};

// export function createFinalBlock(task: Task) {
export function createFinalBlock(taskPageObj: TaskPage) {
  const task = taskPageObj.task;

  task.project ? "Ok FinalBlock" : (task.project = " ");
  task.description ? "Ok FinalBlock" : (task.description = " ");
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Please approve to apply Changes or Decline by discard*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: createTaskInfoBlock(taskPageObj),
        },
      },
      {
        type: "divider",
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Ok",
            },
            style: "primary",
            value: `${JSON.stringify(taskPageObj)}`, // value: `${JSON.stringify(taskPageObj)}`,
            action_id: "actionId-0",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Cancel",
            },
            style: "danger",
            value: "discard_123",
            action_id: "actionId-1",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Edit in Notion",
              emoji: true,
            },
            value: JSON.stringify(taskPageObj), //  value: JSON.stringify(taskPageObj),
            action_id: "actionId-2",
          },
        ],
      },
    ],
  };
}

export function createDoneBlock(taskPageObj: TaskPage) {
  const task = taskPageObj.task;

  task.project ? "Ok FinalBlock" : (task.project = " ");
  task.description ? "Ok FinalBlock" : (task.description = " ");
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Task Created/Update in Notion*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: createTaskInfoBlock(taskPageObj),
        },
      },
      {
        type: "divider",
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              // text: "Approve",
              text: "Ok",
            },
            style: "primary",
            value: `${JSON.stringify(taskPageObj)}`, // value: `${JSON.stringify(taskPageObj)}`,
            action_id: "actionId-0",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Delete Task",
            },
            style: "danger",
            value: JSON.stringify(taskPageObj), //  value: JSON.stringify(taskPageObj),
            action_id: "actionId-1",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Done",
              emoji: true,
            },
            value: "Done_123",
            action_id: "actionId-2",
          },
        ],
      },
    ],
  };
}
