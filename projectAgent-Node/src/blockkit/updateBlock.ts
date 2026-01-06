import {
  // Task,
  TaskPage } from "../utils/task";
import { createColumnLayoutTaskInfo } from "./columnLayoutBlock";
/**
 *
 * @param task: A task object
 * @returns: A set of Slack blocks for updating a task
 */
export function createUpdateBlock(taskPage: TaskPage) {
  const taskUrl = taskPage.url;
  const sectionInfo = createColumnLayoutTaskInfo(taskPage.task, taskPage.task.assignees);
  // task.startDate = startDate;
  // task.dueDate = dueDate;
  return {
    text: "Updating a Task?",
    replace_original: true,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Task already exists, would you like to update it?",
          emoji: true,
        },
      },
      ...sectionInfo,
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Edit in Notion",
              emoji: true,
            },
            value: `${JSON.stringify(taskPage)}`,
            url: `${taskUrl}`,
            action_id: "updateId-01",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Cancel",
              emoji: true,
            },
            value: "click_me_123",
            style: "danger",
            action_id: "cancelUpdateId-02",
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: "*You can edit the task in Notion after confirming*",
          },
        ],
      },
    ],
  };
}
