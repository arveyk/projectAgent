import { validateDate, formatSlackDate } from "../utils/dateHandler";
import { DateTime } from "luxon";
import { Task, TaskPage } from "../utils/task";
import { createColumnLayoutTaskInfoBlock } from "./columnLayoutBlock";

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

  const columnLayoutTaskInfo = createColumnLayoutTaskInfoBlock(taskPageObj);
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Task Created/Update in Notion*",
        },
      },
      // Spread those details !!
      ...columnLayoutTaskInfo,
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
