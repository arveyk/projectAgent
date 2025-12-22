import { Task, TaskPage } from "../utils/task";
import { createColumnLayoutTaskInfoBlock } from "./columnLayoutBlock";
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

  const sectionInfo = createColumnLayoutTaskInfoBlock(taskPage);
  // task.startDate = startDate;
  // task.dueDate = dueDate;
  return {
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
          /*
                    {
                      type: "button",
                      text: {
                        type: "plain_text",
                        text: "Confirm Edits",
                        emoji: true,
                      },
                      value: `${JSON.stringify(taskPage)}`,
                      url: `${taskUrl}`,
                      style: "primary",
                      action_id: "updateId-02",
                    },
                    */
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
