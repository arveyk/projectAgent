export function createUpdateBlock(task) {
  return {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Task Already exist, would you like to Update it?",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Task title*:\t\t\t\t\t\t\t ${task.tasktitle} \n *Assignee*  \t\t\t\t\t\t\t${task.assignee}\n* Due Date*  \t\t\t\t\t\t  ${task.duedate}\n*Start Date*  \t\t\t\t\t\t  ${task.startdate}\n*Email:* \t\t\t\t\t\t\t\t  ${task.email} \n*Phone Number:* \t\t\t\t${task.phonenumber}\n *Preferred Channel:* \t\t\t${task.preferredchannel} \n*Task Details:*\t\t\t\t\t ${task.description}\n*Project:*\t\t\t\t\t\t${task.project}\n*Task Link* \t\t\t\t\t\t\t<${task.url}|link>`,
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
              text: "Yes",
              emoji: true,
            },
            value: JSON.stringify(task),
            action_id: "actionId-1",
            style: "primary",
          },
        ],
      },
    ],
  };
}
