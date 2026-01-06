import { formatSlackDate } from "../utils/dateHandler";
import { DateTime } from "luxon";
import { NotionTask, TaskPage } from "../utils/task";
import { NotionUser } from "../utils/controllers/userTypes";

export const createColumnLayoutTaskInfo = function (
  notionTask: NotionTask,
  knownAssignees: NotionUser[]) {

  const task = notionTask;
  const knownAssigneesArr = knownAssignees; //task.assignees;
  let assigneeNames = "";
  const numberOfAssignees: number = knownAssigneesArr.length;

  console.log(
    `(createColumnLayoutTaskInfoBlock), assigneesArray: ${knownAssigneesArr}, task${JSON.stringify(task)}`,
  );
  if (knownAssigneesArr && Array.isArray(knownAssigneesArr)) {
    knownAssigneesArr.forEach((assignee) => {
      if (assignee) {
        assigneeNames += `${assignee.name}  ${assignee.email}\n`;
      }
    });
    assigneeNames = assigneeNames.slice(0, -1); // Remove trailing comma and space
  }
  task.startDate =
    task.startDate && task.startDate.toString() !== "Invalid Date"
      ? new Date(task.startDate)
      : DateTime.now().toJSDate();
  console.log(`(createColumnLayoutTaskInfoBlock) task: ${JSON.stringify(task)}`);

  const withAssigneesSection = [
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
  const withoutAssigneesSection = {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": `*Description:*\n${task.description}`
    }
  }

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
    // spread whatever array comes out of this expression
    ...(numberOfAssignees > 0 ? withAssigneesSection : [withoutAssigneesSection]),

  ]

  return columnLayoutBlock;
}

export const createNewTaskBlockWithoutSelections = function (taskPageObj: TaskPage) {
  // console.log("Another console.log, Task", JSON.stringify(task));
  const ColumnLayoutTaskInfo = createColumnLayoutTaskInfo(taskPageObj.task, taskPageObj.task.assignees);
  const blockNewTask = {
    text: "Creating a new Task?",
    replace_original: true,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*You Are About to Create a New Task*",
        },
      },
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
            "value": JSON.stringify({
              taskPageObject: taskPageObj,
              userOptions: []
            }), // value: JSON.stringify(taskPageObj)
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
