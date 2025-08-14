export const createTaskInfoBlock = function (task) {
  return `*Task Title:*\t\t\t${task.tasktitle} \n*Assignee:* \t\t\t${task.assignee}\n*Due Date:*\t\t\t${task.duedate}\n*Start Date:*\t\t\t${task.startdate}\n*Phone Number:*\t${task.phonenumber}\n*Email:*\t\t\t${task.email}\n*Preferred Channel:*\t\t\t${task.preferredchannel}\n*Description:* \t\t${task.taskdetail}\n*Project:* \t\t${task.project}`;
};

export function createEditBlock(task) {
  let duedate, startdate;
  try {
    duedate = new Date(task.duedate);
  } catch (error) {
    duedate = new Date().toISOString();
  }
  try {
    stardate = new Date(task.startdate);
  } catch (error) {
    startdate = new Date().toISOString();
  }
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
            text: `${task.tasktitle || "xxx"}`,
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
            text: `Due date must not be in past. Current Value: ${duedate || "xxx"}`,
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
            text: `${startdate}`,
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
            text: `${task.phonenumber || "xxx"}`,
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
            text: `${task.preferredchannel || "xxx"}`,
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
            text: `Current Task Details: ${task.taskdetail || "xxx"}`,
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

export function createFinalBlock(task) {
  task.email ? "Ok FinalBlock" : (task.email = " ");
  task.preferredchannel ? "Ok FinalBlock" : (task.preferredchannel = " ");
  task.project ? "Ok FinalBlock" : (task.project = " ");
  task.phonenumber ? "Ok FinalBlock" : (task.phonenumber = " ");
  task.taskdetail ? "Ok FinalBlock" : (task.taskdetail = " ");
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
        ],
      },
    ],
  };
}
