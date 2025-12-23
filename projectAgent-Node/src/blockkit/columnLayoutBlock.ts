import { formatSlackDate } from "../utils/dateHandler";
import { DateTime } from "luxon";
import { TaskPage } from "../utils/task";

export const createColumnLayoutTaskInfoBlock = function (taskPageObj: TaskPage) {
  const task = taskPageObj.task;
  const assigneesArr = task.assignees;
  let assigneeNames = "";
  console.log(
    `(createColumnLayoutTaskInfoBlock), assigneesArray: ${assigneesArr}, task${JSON.stringify(task)}`,
  );
  if (assigneesArr && Array.isArray(assigneesArr)) {
    assigneesArr.forEach((assignee) => {
      if (assignee) {
        assigneeNames += `${assignee.name} --- ${assignee.email}\n`;
      }
    });
    assigneeNames = assigneeNames.slice(0, -1); // Remove trailing comma and space
  }
  task.startDate =
    task.startDate && task.startDate.toString() !== "Invalid Date"
      ? new Date(task.startDate)
      : DateTime.now().toJSDate();
  console.log(`(createColumnLayoutTaskInfoBlock) task: ${JSON.stringify(taskPageObj)}`);
  const columnLayoutBlock = [
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": `*Task Title:*\n${task.taskTitle}`
        },
        {
          "type": "mrkdwn",
          "text": `*Project:*\n${task.project || " "}`
        }
      ]
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": `*Due Date:*\n${formatSlackDate(new Date(task.dueDate))}`
        },
        {
          "type": "mrkdwn",
          "text": `*Start Date:*\n${task.startDate !== new Date(NaN) && task.startDate !== undefined ? formatSlackDate(new Date(task.startDate)) : task.startDate}`
        }
      ]
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `*Assignees:*\n${assigneeNames}`
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `*Description:*\n${task.description}`
      }
    }
  ]

  return columnLayoutBlock;
};

export const createNewTaskBlockWithoutSelections = function (taskPageObj: TaskPage) {
  // console.log("Another console.log, Task", JSON.stringify(task));
  const ColumnLayoutTaskInfo = createColumnLayoutTaskInfoBlock(taskPageObj);
  const blockNewTask = {
    text: "Creating a new Task?",
    replace_original: true,
    blocks: [
      // Sprrrread those Details!!!
      ...ColumnLayoutTaskInfo,
      {
        "type": "actions",
        "elements": [
          /*{
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Add Task",
            },
            style: "primary",
            value: JSON.stringify(taskPageObj), // value: JSON.stringify(taskPageObj),
            action_id: "actionId-0",
          }, */
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Confirm",
              "emoji": true,
            },
            "value": JSON.stringify(taskPageObj), // value: JSON.stringify(taskPageObj),
            "style": "primary",
            "action_id": "actionId-2",
          },
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "Cancel",
            },
            "style": "danger",
            "value": "discard_123",
            "action_id": "actionId-1",
          },
        ],
      },
      {
        "type": "context",
        "elements": [
          {
            "type": "mrkdwn",
            "text": "*You can edit the task in Notion after adding it*",
          },
        ],
      },
    ],
  };
  // console.log("Entire Block being sent", JSON.stringify(blockNewTask));
  return blockNewTask;
};
