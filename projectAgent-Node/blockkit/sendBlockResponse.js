import axios from "axios";
import { ALL_SLN_WEBHOOK_URL }  from '../env.js';
import { createEditBlock } from './editblock.js'


console.log(ALL_SLN_WEBHOOK_URL);
//task management webhook url
//
const task = {
  "tasktitle": "End of Hamas and rescue hostages",
  "assignee": "Benjamin Noah",
  "duedate": "7-11-2027",
  "startdate": "1-11-2027",
  "email": "replace@soon.com",
  "phonenumber": "43-335-344-4344",
  "preferredchannel": "Call, email",
  "taskdetail": "Benjamin Noah, draw for us a strategy for ending this war, many innocents are dying, especially on our side. What ever it takes, we must take them down and rescue our people",
}
const blocks_01 = createEditBlock(task);
const blocks_02 = [
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
            "type": "plain_text",
            "text": `${task.tasktitle}`,
          }
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
            "type": "plain_text",
            "text": `${task.assignee}`,
          }
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
            "type": "plain_text",
            "text": `${task.duedate}`,
          }
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
            "type": "plain_text",
            "text": `${task.startdate}`,
          }
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
            "type": "plain_text",
            "text": `${task.email}`,
          }
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
            "type": "plain_text",
            "text": `${task.phonenumber}`,
          }
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
            "type": "plain_text",
            "text": `${task.preferredchannel}`,
          }
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
            "type": "plain_text",
            "text": "Please add a value for task details",
          }
        },
        label: {
          type: "plain_text",
          text: "Task Detail",
          emoji: true,
        },
      },
	     {
        "type": "context",
        "elements": [
          {
            "type": "plain_text",
            "text": `Current Task Details ${task.taskdetail}`,
            "emoji": true
          }
        ]
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
]


axios({
  method: "post",
  url: ALL_SLN_WEBHOOK_URL,
  data: {
     text: "Message testing block", 
     blocks: blocks_01.blocks
  }

}).then((response) => {
  console.log(response);
});
