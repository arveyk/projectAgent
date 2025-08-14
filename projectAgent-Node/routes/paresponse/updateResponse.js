import axios from "axios";
import {
  createEditBlock,
  createFinalBlock,
} from "../../blockkit/createBlocks.js";
import addTaskNotionPage from "../../utils/notiondb.js";
import { updateDbPage } from "../../utils/db-update.js";
import { sendLoadingMsg } from "../../blockkit/loadingMsg.js";

import { SLACK_BOT_TOKEN } from "../../env.js";

/**
 * testUpdateReply - Response to user interactions with blocks when a button
 * 		     is pressed
 *
 * @request - request from slack
 * @response - response that the function sends
 * @next - function to pass control to other functions that router uses
 *
 * @return - No return value
 */

export default function testUpdateReply(request, response, next) {
  const payload = JSON.parse(request.body.payload);
  console.log(`Body: ${JSON.stringify(request.body)}`);
  console.log(`Body.payload${JSON.stringify(request.body.payload)}`);
  console.log("TRIGGER_ID", payload["trigger_id"]);
  console.log(`RESPONSE URL ${payload["response_url"]}`);
  console.log(`ACTIONS: ${JSON.stringify(payload["actions"])}`);

  const trigger_id = payload["trigger_id"];
  const response_url = payload["response_url"];
  const message = payload["message"];
  console.log(
    `TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`,
  );

  const action_id = payload["actions"][0]["action_id"];
  let action_text = "";

  if (typeof payload["actions"][0]["selected_option"] !== "undefined") {
    console.log("Changed, No longer Handling these Blocks");
  } else {
    action_text = payload["actions"][0]["text"]["text"];
    console.log("action_text in else block", action_text);

    if (action_text === "Approve") {
      sendApprove(payload, response_url);
    } else if (action_text === "Edit") {
      sendEdit(payload, response_url);
    } else if (action_text === "Submit") {
      sendSubmit(payload, response_url);
    } else if (action_text === "Yes") {
      sendEdit(payload, response_url);
    } else if (action_text === "No") {
      sendReject(payload, action_text, response_url, "Updated");
    } else {
      sendReject(payload, action_text, response_url, "Added");
    }
  }
  next();
}

function sendReject(payload, action_text, response_url, action) {
  console.log(
    `Text in button ${payload.actions[0]["value"]}, Action_Text${action_text}`,
  );
  const replaceBlockRes = axios({
    method: "post",
    url: response_url,
    data: {
      replace_original: "true",
      text: "Changes Not Approved",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `:x: *Action Rejected: Task not ${action}*`,
          },
        },
      ],
    },
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    family: 4,
  })
    .then((Response) => {
      console.log("Update msg", Response);
    })
    .catch((err) => {
      console.log("AXIOS ERROR in sendReject", err);
    });
}

function sendEdit(payload, response_url, err) {
  const taskDetailsObj = JSON.parse(payload["actions"][0].value);
  const blockObj = createEditBlock(taskDetailsObj);

  if (err) {
    blockObj.blocks[0].text.text = "*Due Date cannot be a past Date*";
  }

  const editResp = axios({
    method: "post",
    url: response_url,
    data: {
      text: "Edit Block",
      blocks: blockObj.blocks,
    },
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    family: 4,
  })
    .then((Response) => {
      console.log("Update msg", Response);
    })
    .catch((err) => {
      console.log("AXIOS ERROR in sendEdit", err);
    });
}

function sendSubmit(payload, response_url) {
  const taskDetailsObj = JSON.parse(payload["actions"][0].value);

  const actionKeysArr = Object.keys(payload.state.values);
  const userInputs = payload.state.values;

  actionKeysArr.map((key) => {
    const actionIdKey = Object.keys(userInputs[key]);
    console.log("ActionIDKey: ", actionIdKey);

    switch (actionIdKey[0]) {
      case "task_title_id":
        taskDetailsObj.tasktitle = userInputs[key][actionIdKey].value;
        break;
      case "assignee_id":
        taskDetailsObj.assignee = userInputs[key][actionIdKey].value;
        break;
      case "due_date_id":
        taskDetailsObj.duedate = userInputs[key][actionIdKey].value;
        break;
      case "start_date_id":
        taskDetailsObj.startdate = userInputs[key][actionIdKey].value;
        break;
      case "email_id":
        taskDetailsObj.email = userInputs[key][actionIdKey].value;
        break;
      case "phone_number_id":
        taskDetailsObj.phonenumber = userInputs[key][actionIdKey].value;
        break;
      case "preferred_channel_id":
        taskDetailsObj.preferredchannel = userInputs[key][actionIdKey].value;
        break;
      case "task_details_id":
        taskDetailsObj.taskdetails = userInputs[key][actionIdKey].value;
        break;
      case "project_id":
        taskDetailsObj.project = userInputs[key][actionIdKey].value;
        break;
    }
  });

  const block = createFinalBlock(taskDetailsObj);

  axios({
    method: "post",
    url: response_url,
    data: block,
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    family: 4,
  })
    .then((Response) => {
      console.log("Final Block Submission", Response);
    })
    .catch((err) => {
      console.log("AXIOS ERROR in sendSubmit", err);
    });
}

function sendApprove(payload, response_url) {
  const taskDetailsObj = JSON.parse(payload["actions"][0]["value"]);

  (async () => {
    let rowActionResult, actionMessage, emoji;

    if (taskDetailsObj.url) {
      await sendLoadingMsg("Adding Task", response_url);

      rowActionResult = await updateDbPage(taskDetailsObj);
      actionMessage = "Updated";
      emoji = "pencil2";
      console.log("Update Action");
    } else {
      await sendLoadingMsg("Updating Task", response_url);

      rowActionResult = await addTaskNotionPage(taskDetailsObj);
      actionMessage = "Created";
      emoji = "white_check_mark";
      console.log(`Page added successfully? ${rowActionResult.success}`);
    }
    if (rowActionResult.success === true) {
      const Row = rowActionResult.page;
      console.log(`ROW URL:${JSON.stringify(Row.url)}}`);

      let replaceBlockRes;
      if (Row) {
        const username = payload.user.username;
        replaceBlockRes = axios({
          method: "post",
          url: response_url,
          data: {
            replace_original: "true",
            text: `Block Replaced\nNotification: Task ${actionMessage} Successfully`,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `:${emoji}: *Task Successfully ${actionMessage}*\nApproved by ${username} <${Row.url}|(View)>`,
                },
              },
            ],
          },
          headers: {
            Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
          family: 4,
        })
          .then((Response) => {
            console.log("Update msg", Response);
          })
          .catch((err) => {
            console.log("1st AXIOS ERROR in sendApprove", err);
          });
      }
    } else {
      sendError(rowActionResult, payload, response_url);
    }
  })();
}

function sendError(createRowResult, payload, response_url) {
  // Send error message
  const taskDetailsObj = JSON.parse(payload["actions"][0]["value"]);
  let errMessage = "Create";
  let errEmoji = "heavy_multiplication_x";
  if (taskDetailsObj.url) {
    errMessage = "Update";
    errEmoji = "x";
  }
  axios(
    {
      method: "post",
      url: response_url,
      data: {
        replace_original: "true",
        text: "Block Replaced",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `:${errEmoji}: *Unable to ${errMessage} Entry*, `,
            },
          },
        ],
      },
    },
    {
      headers: {
        Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
      family: 4,
    },
  )
    .then((Response) => {
      console.log(
        "Error while Attempting to create row, Please check inputs",
        Response,
      );
    })
    .catch((err) => {
      console.log("2nd AXIOS ERROR in sendSubmit", err.response);
    });

  // If the due date is in the past, make the user edit it
  if (createRowResult.errorMsg === "A due date can't be in the past") {
    console.log(createRowResult.errorMsg);
    sendEdit(payload, response_url, "Past DueDate");
  } else {
    // TODO handle other error cases
    console.log(JSON.stringify(createRowResult.errorMsg));
  }
}
