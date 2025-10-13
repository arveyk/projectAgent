import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { createEditBlock, createFinalBlock } from "../../blockkit/createBlocks";
import addTaskNotionPage, { PageAddResult } from "../../utils/notiondb";
import { updateDbPage } from "../../utils/db-update";
import { sendLoadingMsg } from "../../blockkit/loadingMsg";
import { SLACK_BOT_TOKEN } from "../../env";
import { BlockAction, ButtonAction } from "@slack/bolt";
import { CreatePageResponse, UpdatePageResponse } from "@notionhq/client";
import {
  convertTaskPageFromButtonPayload,
  Task,
  TaskPage,
} from "../../utils/task";
import { task } from "../../utils/controllers/someTypes";
import { taskGood } from "../../test-data/tasks/example-tasks";

const key: string = "value";

/**
 * interactionHandler - Response to user interactions with blocks when a button
 * 		     is pressed
 *
 * @request - request from slack
 * @response - response that the function sends
 * @next - function to pass control to other functions that router uses
 *
 * @return - No return value
 */

export default function interactionHandler(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const payload = JSON.parse(request.body.payload);
  console.log(`Body: ${JSON.stringify(request.body)}`);
  console.log(`Body.payload${JSON.stringify(request.body.payload)}`);
  console.log("TRIGGER_ID", payload["trigger_id"]);
  console.log(`RESPONSE URL ${payload["response_url"]}`);
  console.log(`ACTIONS: ${JSON.stringify(payload["actions"])}`);

  const trigger_id: string = payload["trigger_id"];
  const response_url: string = payload["response_url"];
  const message: string = payload["message"];
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
      // validate Date
      sendEdit(payload, response_url, undefined);
    } else if (action_text === "Submit") {
      sendSubmit(payload, response_url);
    } else if (action_text === "Yes") {
      // validate Date
      sendEdit(payload, response_url, undefined);
    } else if (action_text === "No") {
      sendReject(payload, action_text, response_url, "Updated");
    } else {
      sendReject(payload, action_text, response_url, "Added");
    }
  }
  next();
}

function sendReject(
  payload: BlockAction,
  action_text: string,
  response_url: string,
  action: string,
) {
  console.log(
    `Text in button ${"value" in payload.actions[0] ? payload.actions[0]["value"] : "No value"}, Action_Text${action_text}`,
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

function sendEdit(
  payload: BlockAction,
  response_url: string,
  err: string | undefined,
) {
  if (payload["actions"][0].type === "button") {
    const interactionsTextPayload = payload["actions"][0].value;
    const taskDetailsObj = JSON.parse(interactionsTextPayload || "{}");
    console.log(`taskDetailsObj: ${JSON.stringify(taskDetailsObj)}`);
    const blockObj = createEditBlock(taskDetailsObj);

    if (err) {
      blockObj.blocks[0].text
        ? (blockObj.blocks[0].text.text = "*Due Date cannot be a past Date*")
        : null;
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
}

function sendSubmit(payload: BlockAction, response_url: string) {
  if (payload["actions"][0].type === "button") {
    const taskPageObj: TaskPage = JSON.parse(payload["actions"][0].value || "{}");
    const taskDetailsObj: Task = taskPageObj.task;

    const actionKeysArr = Object.keys(
      payload.state ? payload.state.values : {},
    );
    const userInputs = payload.state ? payload.state.values : {};

    actionKeysArr.map((key) => {
      const actionIdKey = Object.keys(userInputs[key]);
      console.log("ActionIDKey: ", actionIdKey);

      switch (actionIdKey[0]) {
        case "task_title_id":
          taskDetailsObj.taskTitle = userInputs[key][`${actionIdKey}`].value || "";
          break;
        case "assignee_id":
          taskDetailsObj.assignee = userInputs[key][`${actionIdKey}`].value || "";
          break;
        case "due_date_id":
          taskDetailsObj.dueDate = new Date(userInputs[key][`${actionIdKey}`].value || "");
          break;
        case "start_date_id":
          taskDetailsObj.startDate = new Date(userInputs[key][`${actionIdKey}`].value || "");
          break;
        case "description_id":
          taskDetailsObj.description = userInputs[key][`${actionIdKey}`].value || "";
          break;
        case "project_id":
          taskDetailsObj.project = userInputs[key][`${actionIdKey}`].value || "";
          break;
      }
    });

    // const block = createFinalBlock(taskDetailsObj);

    const block = createFinalBlock(taskPageObj);

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
}

function sendApprove(payload: BlockAction, response_url: string) {
  if (payload["actions"][0].type === "button") {

    const taskPage0 = convertTaskPageFromButtonPayload(payload);
    console.log(`converted taskPage by convertTaskPageFromButtonPayload: ${JSON.stringify(taskPage0)}`);
    const taskPage: TaskPage = JSON.parse(payload["actions"][0].value || "{}");

    console.log(`(sendApprove) taskPage: ${JSON.stringify(taskPage)}`);

    (async () => {
      let rowActionResult: {
        success: boolean;
        page?: CreatePageResponse | CreatePageResponse;
        erroMsg?: string;
      },
        actionMessage: string,
        emoji: string;

      if (taskPage.url) {
        await sendLoadingMsg("Updating Task", response_url);

        rowActionResult = await updateDbPage(taskPage);
        actionMessage = "Updated";
        emoji = "pencil2";
        console.log("Update Action");
      } else {
        await sendLoadingMsg("Adding Task", response_url);
        console.log(`(sendApprove) taskDetailsObj.task: ${taskPage.task}`);
        rowActionResult = await addTaskNotionPage(
          taskPage.task,
          payload.user.username,
        );
        actionMessage = "Created";
        emoji = "white_check_mark";
        console.log(`Page added successfully? ${rowActionResult.success}`);
      }
      if (rowActionResult.success === true) {
        const Row = rowActionResult.page;
        // console.log(`ROW URL:${JSON.stringify(Row ? Row.url : "Not given")}}`);

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
                    text: `:${emoji}: *Task Successfully ${actionMessage}*\nApproved by ${username} <${"url" in Row ? Row.url : "Row ID is" + Row.id}|(View)>`,
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
}

function sendError(
  createRowResult: PageAddResult,
  payload: BlockAction,
  response_url: string,
) {
  // Send error message
  if (payload["actions"][0].type === "button") {
    const taskDetailsObj = JSON.parse(payload["actions"][0]["value"] || "{}");
    let errMessage = "Create";
    let errEmoji = "heavy_multiplication_x";
    if (taskDetailsObj.url) {
      errMessage = "Update";
      errEmoji = "x";
    }
    /*axios({
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
      */
    axios
      .post(
        response_url,
        {
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
}
