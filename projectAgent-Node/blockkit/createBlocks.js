let channel_id = "C08R4M9P5SM";
export { createEditBlock, createFinalBlock } from "./editblock.js";

const createConfirmationBlock = function confirmBlock(task) {
  return {
    text: "Which Field would you like to edit?",
    replace_original: true,
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
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Task Title:*\t\t\t${task.tasktitle} \n*Assignee:* \t\t\t${task.assignee}\n*Due Date:*\t\t\t${task.duedate}\n*Start Date:*\t\t\t${task.startdate}\n*Phone Number:*\t${task.phonenumber}\n*Email:*\t\t\t${task.email}\n*Preferred Channel:*\t\t\t${task.preferredChannel}\n*Description:* \t\t${task.taskdetail}`,
        },
      },
      {
        type: "input",
        element: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an item",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "*1. Task Title*",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "*2. Assignee*",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "*3. Due Date*",
                emoji: true,
              },
              value: "value-2",
            },
            {
              text: {
                type: "plain_text",
                text: "*4. Start Date*",
                emoji: true,
              },
              value: "value-3",
            },
            {
              text: {
                type: "plain_text",
                text: "*5. Phone Number*",
                emoji: true,
              },
              value: "value-4",
            },
            {
              text: {
                type: "plain_text",
                text: "*6. Description*",
                emoji: true,
              },
              value: "value-5",
            },
          ],
          action_id: "static_select-action",
        },
        label: {
          type: "plain_text",
          text: "Field",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "Value",
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
        ],
      },
      {
        type: "divider",
      },
    ],
  };
};

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

// TODO function that creates blocks for updating a task

/**
 *
 * @param {*} task A task object
 * @returns A set of Slack blocks containing data from the task, to be used in confirming new tasks
 */
export const createBlockNewTask = function (task) {
  const blockText = `*Task Title:*\t\t\t${task.tasktitle} \n*Assignee:* \t\t\t${task.assignee}\n*Due Date:*\t\t\t${task.duedate}\n*Start Date:*\t\t\t${task.startdate}\n*Phone Number:*\t${task.phonenumber}\n*Email:*\t\t\t${task.email}\n*Preferred Channel:*\t\t\t${task.preferredChannel}\n*Description:* \t\t${task.taskdetail}`;

  return {
    text: "Creating a new Task?",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*You Are About to Create a New Task*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: blockText,
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
              text: "Approve",
            },
            style: "primary",
            value: JSON.stringify(task),
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
      {
        type: "divider",
      },
    ],
  };
};

const RequestApprovalBlock = {
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*You Are About to Create a New Task*",
      },
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Task Title:*\t\t\t${_Task Title_} \n*Assignee:* \t\t\t${Assignee}\n*Due Date:*\t\t\t${_Due Date_}\n*Phone Number:*\t$[_545-039-5264_]\n*Description:* \t\t${Task_Description}",
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
            text: "Approve",
          },
          style: "primary",
          value: "approve_123",
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
          value: "edit_123",
          action_id: "actionId-2",
        },
      ],
    },
    {
      type: "divider",
    },
  ],
};

export { createConfirmationBlock, RequestApprovalBlock, sampleModal };
