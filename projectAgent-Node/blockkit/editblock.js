export function createEditBlock(task) {
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
            text: `${task.tasktitle}`,
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
            text: `${task.assignee || " "}`,
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
            text: `Due date must not be in past. Current Value: ${task.duedate || " "}`,
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
            text: `${task.startdate || " "}`,
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
            text: `${task.email || " "}`,
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
            text: `${task.phonenumber || " "}`,
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
            text: `${task.preferredchannel || " "}`,
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
          action_id: "task_details_id",
          placeholder: {
            type: "plain_text",
            text: "Please enter a value if you wish to change task details",
          },
        },
        label: {
          type: "plain_text",
          text: "Task Detail",
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: `Current Task Details ${task.taskdetail}`,
            emoji: true,
          },
        ],
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

export function createFinalBlock(task) {
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
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Task Title:*\t\t\t${task.tasktitle} \n*Assignee:* \t\t\t${task.assignee}\n*Due Date:*\t\t\t${task.duedate}\n*Start Date:*\t\t\t${task.startdate}\n*Phone Number:*\t${task.phonenumber}\n*Email:*\t\t\t\t\t${task.email}\n*Preferred Channel:*\t${task.preferredchannel}\n*Description:* \t\t${task.taskdetail}`,
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
        ],
      },
    ],
  };
}
