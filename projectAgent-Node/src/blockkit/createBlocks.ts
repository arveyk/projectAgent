export { createFinalBlock } from "./editblock";
import { createColumnLayoutTaskInfo } from "./columnLayoutBlock";
// import { BlockType } from "@slack/web-api/dist/types/response/ChatPostMessageResponse";
import { TaskPage } from "../utils/task";

const sampleModal = {
  trigger_id: "trigger_id",
  view: {
    type: "modal",
    callback_id: "modal-identifier",
    title: {
      type: "plain_text",
      text: "Just a modal",
    },
    blocks: [
      {
        type: "section",
        block_id: "section-identifier",
        text: {
          type: "mrkdwn",
          text: "*Welcome* to ~my~ Block Kit _modal_!",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Just a button",
          },
          action_id: "button-identifier",
        },
      },
    ],
  },
};

/**
 * Creates a set of Slack blocks to be used in confirming a new task.
 * @param {*} taskPageObj
 * @returns A set of Slack blocks containing data from the task, to be used in confirming new tasks
 */
export const createBlockNewTask = function (taskPageObj: TaskPage) {
  /**
   *  export const createBlockNewTask = function (taskPageObj: TaskPage) {
   * const task = taskPageObj.task;
   */

  // console.log("Another console.log, Task", JSON.stringify(task));
  const taskInfoColumnLayout = createColumnLayoutTaskInfo(taskPageObj);

  return {
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
      // Spread those details !!
      ...taskInfoColumnLayout,
      {
        type: "actions",
        elements: [
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
            type: "button",
            text: {
              type: "plain_text",
              text: "Confirm",
              emoji: true,
            },
            value: JSON.stringify(taskPageObj), // value: JSON.stringify(taskPageObj),
            style: "primary",
            action_id: "actionId-2",
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
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: "*You can edit the task in Notion after adding it*",
          },
        ],
      },
    ],
  };
};

/**
 * Creates a set of Slack blocks to be used in confirming a new task.
 * @param {*} taskPageObj
 * @returns A set of Slack blocks containing data from the task, to be used in confirming new tasks
 */

export { sampleModal };
