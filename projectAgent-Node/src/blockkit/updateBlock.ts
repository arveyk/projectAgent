import { Task, TaskPage } from "../utils/task";

/**
 *
 * @param task: A task object
 * @returns: A set of Slack blocks for updating a task
 */
export function createUpdateBlock(taskPage: TaskPage) {
  const task = taskPage.task;
  const taskUrl = taskPage.url;
  const startDate = task.startDate
    ? task.startDate.toISOString().split("T")[0]
    : new Date().toISOString().split("T")[0];
  const dueDate = task.dueDate.toISOString().split("T")[0];

  // task.startDate = startDate;
  // task.dueDate = dueDate;
  return {
    blocks: [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "Task already exists, would you like to update it?",
          "emoji": true
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `*Task title*:\t\t\t\t\t\t\t ${task.taskTitle} \n *Assignee*  \t\t\t\t\t\t\t${JSON.stringify(task.assignees)}\n *Email*  \t\t\t\t\t\t\t${"Email Field to be added"}\n* Due Date*  \t\t\t\t\t\t  ${dueDate}\n*Start Date*  \t\t\t\t\t\t  ${startDate}\n *Task Details:*\t\t\t\t\t ${task.description}\n*Project:*\t\t\t\t\t\t\t${task.project}`,
        }
      },
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Cancel",
              "emoji": true
            },
            "value": "click_me_123",
            "action_id": "actionId-0"
          },
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Edit in Notion",
              "emoji": true
            },
            "value": `${JSON.stringify(taskPage)}`,
            url: `${taskUrl}`,
            style: "primary",
            "action_id": "actionId-1"
          }
        ]
      }
    ]
  };
}
const oldBlock = {
  blocks: [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Task already exists, would you like to update it?",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Task title*:\t\t\t\t\t\t\t ${task.taskTitle} \n *Assignee*  \t\t\t\t\t\t\t${task.assignee}\n* Due Date*  \t\t\t\t\t\t  ${dueDate}\n*Start Date*  \t\t\t\t\t\t  ${startDate}\n *Task Details:*\t\t\t\t\t ${task.description}\n*Project:*\t\t\t\t\t\t${task.project}\n*Task Link* \t\t\t\t\t\t\t<${taskPage.url}|link>",
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "No",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "actionId-0",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Edit in Notion",
            emoji: true,
          },
          value: "JSON.stringify(taskPage)",
          action_id: "actionId-1",
          style: "primary",
        },
      ],
    },
  ],
};
