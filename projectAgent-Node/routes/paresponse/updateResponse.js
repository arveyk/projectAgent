import axios from "axios";
import {
  createEditBlock,
  createFinalBlock,
} from "../../blockkit/createBlocks.js";
import addTaskNotionPage from "../../utils/notiondb.js";
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
    } else {
      sendReject(payload, action_text, response_url);
    }
  }
  next();
}

function sendReject(payload, action_text, response_url) {
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
            text: ":x: *Task Not Created*, ",
          },
        },
      ],
    },
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((Response) => {
      console.log("Update msg", Response);
    })
    .catch((err) => {
      console.log("AXIOS ERROR in sendReject", err);
    });
}

function sendEdit(payload, response_url) {
  const taskDetailsObj = JSON.parse(payload["actions"][0].value);
  const blockObj = createEditBlock(taskDetailsObj);

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
    const createRowResult = await addTaskNotionPage(taskDetailsObj);
    console.log(`Page added successfully? ${createRowResult.success}`);

    if (createRowResult.success === true) {
      const newRow = createRowResult.page;
      console.log(`ROW URL:${JSON.stringify(newRow.url)}}`);

      let replaceBlockRes;
      if (newRow) {
        const username = payload.user.username;
        replaceBlockRes = axios({
          method: "post",
          url: response_url,
          data: {
            replace_original: "true",
            text: "Block Replaced\nNotification: Task Created Successfully",
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `:white_check_mark: *Task Successfully Created*\nApproved by ${username} <${newRow.url}|View>`,
                },
              },
            ],
          },
          headers: {
            Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
          .then((Response) => {
            console.log("Update msg", Response);
          })
          .catch((err) => {
            console.log("1st AXIOS ERROR in sendApprove", err);
          });
      }
    } else {
      sendError(createRowResult, payload, response_url);
    }
  })();
}
function sendError(createRowResult, payload, response_url) {
  // Send error message
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
              text: ":heavy_multiplication_x: *Unable to Create Entry*, ",
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
    }
  )
    .then((Response) => {
      console.log(
        "Error while Attempting to create row, Please check inputs",
        Response
      );
    })
    .catch((err) => {
      console.log("2nd AXIOS ERROR in sendSubmit", err.response);
    });

  // If the due date is in the past, make the user edit it 
  if (createRowResult.errorMsg === "A due date can't be in the past") {
    console.log(createRowResult.errorMsg);
    sendEdit(payload, response_url);
  }
  else {
    // TODO handle other error cases
    console.log(JSON.stringify(createRowResult.errorMsg));
  }
}

