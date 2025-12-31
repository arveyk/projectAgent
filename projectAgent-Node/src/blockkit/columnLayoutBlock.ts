import { formatSlackDate } from "../utils/dateHandler";
import { DateTime } from "luxon";
import { NotionTask } from "../utils/task";

/**
 * Creates the Slack blocks for previewing the details of a new task.
 * @param notionTaskObj The new task.
 * @param assignees A list of people the task is assigned to.
 * @returns The Slack blocks for previewing the details of a new task.
 */
export const createColumnLayoutTaskInfo = function (notionTask: NotionTask) {
  const assigneesArr = notionTask.assignees;
  let assigneeNames = "";
  console.log(
    `(createColumnLayoutTaskInfo), assigneesArray: ${assigneesArr}, task${JSON.stringify(notionTask)}`,
  );
  if (assigneesArr && Array.isArray(assigneesArr)) {
    assigneesArr.forEach((assignee) => {
      if (assignee) {
        assigneeNames += `${assignee.name} (${assignee.email})\n`;
      }
    });
    // Remove trailing comma and space
    assigneeNames = assigneeNames.slice(0, -1);
  }
  notionTask.startDate =
    notionTask.startDate && notionTask.startDate.toString() !== "Invalid Date"
      ? new Date(notionTask.startDate)
      : DateTime.now().toJSDate();
  console.log(
    `(createColumnLayoutTaskInfo) task: ${JSON.stringify(notionTask)}`,
  );
  const columnLayoutBlock = [
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Task Title:*\n${notionTask.taskTitle}`,
        },
        {
          type: "mrkdwn",
          text: `*Project:*\n${notionTask.project || " "}`,
        },
      ],
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Due Date:*\n${
            notionTask.dueDate ? formatSlackDate(new Date(notionTask.dueDate)) : ""
          }`,
        },
        {
          type: "mrkdwn",
          text: `*Start Date:*\n${notionTask.startDate !== new Date(NaN) && notionTask.startDate !== undefined ? formatSlackDate(new Date(notionTask.startDate)) : notionTask.startDate}`,
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Assignees:*\n${assigneeNames}`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Description:*\n${notionTask.description}`,
      },
    },
  ];

  return columnLayoutBlock;
};
