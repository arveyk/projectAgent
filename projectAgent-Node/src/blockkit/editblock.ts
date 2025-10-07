import { validateDate, formatSlackDate } from "../utils/dateHandler";
import { DateTime } from "luxon";
import { Task } from "../utils/task";

export const createTaskInfoBlock = function (task: Task) {
  console.log(`due date: ${task.dueDate}`);
  return `*Task Title:*\t\t\t${task.taskTitle} \n*Assignee:* \t\t\t${task.assignee}\n*Due Date:*\t\t\t${formatSlackDate(task.dueDate.toISOString())}\n*Start Date:*\t\t\t${task.startDate ? formatSlackDate(task.startDate.toISOString()) : task.startDate}\n*Phone Number:*\t${task.phoneNumber}\n*Email:*\t\t\t${task.email}\n*Preferred Channel:*\t\t\t${task.preferredChannel}\n*Description:* \t\t${task.description}\n*Project:* \t\t${task.project}`;
};

export function createEditBlock(task: Task) {
  // TODO display date in user's local timezone
  let dueDate, startDate;
  dueDate = task.dueDate ? validateDate(task.dueDate.toISOString()) : "xxx";
  startDate = task.startDate ? validateDate(task.startDate.toISOString()) : "xxx";

  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Which Field would you like to edit?*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "task_title_id",
          placeholder: {
            type: "plain_text",
            text: `${task.taskTitle || "xxx"}`,
          },
        },
        label: {
          type: "plain_text",
          text: "Task Title",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "assignee_id",
          placeholder: {
            type: "plain_text",
            text: `${task.assignee || "xxx"}`,
          },
        },
        label: {
          type: "plain_text",
          text: "Assignee",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "due_date_id",
          placeholder: {
            type: "plain_text",
            text: `${dueDate}`,
          },
        },
        label: {
          type: "plain_text",
          text: "Due Date",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "start_date_id",
          placeholder: {
            type: "plain_text",
            text: `${startDate}`,
          },
        },
        label: {
          type: "plain_text",
          text: "Start Date",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "email_id",
          placeholder: {
            type: "plain_text",
            text: `${task.email || "xxx"}`,
          },
        },
        label: {
          type: "plain_text",
          text: "Email",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "phone_number_id",
          placeholder: {
            type: "plain_text",
            text: `${task.phoneNumber || "xxx"}`,
          },
        },
        label: {
          type: "plain_text",
          text: "Phone Number",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "preferred_channel_id",
          placeholder: {
            type: "plain_text",
            text: `${task.preferredChannel || "xxx"}`,
          },
        },
        label: {
          type: "plain_text",
          text: "Preferred Channel",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "description_id",
          placeholder: {
            type: "plain_text",
            text: "Please enter a value if you wish to change task details",
          },
        },
        label: {
          type: "plain_text",
          text: "Task Description",
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: `Current Task Details: ${task.description || "xxx"}`,
            emoji: true,
          },
        ],
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "project_id",
          placeholder: {
            type: "plain_text",
            text: `${task.project || "xxx"}`,
          },
        },
        label: {
          type: "plain_text",
          text: "Project",
          emoji: true,
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
              text: "Submit",
            },
            style: "primary",
            value: `${JSON.stringify(task)}`,
            action_id: "actionId-0",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Discard",
            },
            style: "danger",
            value: "discard_123",
            action_id: "actionId-1",
          },
        ],
      },
      {
        type: "divider",
      },
    ],
  };
}

export function createFinalBlock(task: Task) {
  task.email ? "Ok FinalBlock" : (task.email = " ");
  task.preferredChannel ? "Ok FinalBlock" : (task.preferredChannel = "Slack");
  task.project ? "Ok FinalBlock" : (task.project = " ");
  task.phoneNumber ? "Ok FinalBlock" : (task.phoneNumber = " ");
  task.description ? "Ok FinalBlock" : (task.description = " ");
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Please approve to enact Changes or Decline by discard*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: createTaskInfoBlock(task),
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
              text: "Approve",
            },
            style: "primary",
            value: `${JSON.stringify(task)}`,
            action_id: "actionId-0",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Discard",
            },
            style: "danger",
            value: "discard_123",
            action_id: "actionId-1",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Edit",
              emoji: true,
            },
            value: JSON.stringify(task),
            action_id: "actionId-2",
          },
        ],
      },
    ],
  };
}
