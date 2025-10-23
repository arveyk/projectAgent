import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { createFinalBlock } from "../../blockkit/createBlocks";
import addTaskNotionPage, { PageAddResult } from "../../utils/notiondb";
import { sendLoadingMsg } from "../../blockkit/loadingMsg";
import { SLACK_BOT_TOKEN } from "../../env";
import { BlockAction, ButtonAction } from "@slack/bolt";
import { CreatePageResponse, UpdatePageResponse } from "@notionhq/client";
import { redirectToNotionBlock } from "../../blockkit/edit_in_notion_button";
import {
  convertTaskPageFromButtonPayload,
  Task,
  TaskPage,
} from "../../utils/task";
import { deletePage } from "../../utils/db-deletepage";
import { updateDbPage } from "../../utils/db-update";
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

    if (action_text === "Confirm" || action_text === "Add Task") {
      // validate Date
      // sendEdit(payload, response_url, undefined);

      const taskPageObj: TaskPage = JSON.parse(
        payload["actions"][0].value || "{}",
      );
      console.log("Edit in Notion, Response Url", response_url);
      // let action = "updated";
      // if (!taskPageObj.url) {
      //   action = "Created";
      // }
      (async () => {
        try {
          // await sendLoadingMsg("Adding Task", response_url);
          console.log(`(sendApprove) taskDetailsObj.task: ${taskPageObj.task}`);
          const taskAddResult = await addTaskNotionPage(taskPageObj.task);

          // const emoji = "white_check_mark";
          console.log(`Page added successfully? ${taskAddResult.success}`);

          const newTaskPage = taskAddResult.page;
          if (taskAddResult.success === true && newTaskPage) {
            taskPageObj.pageId = newTaskPage.id;
            taskPageObj.url = "url" in newTaskPage ? newTaskPage.url : "";

            const editInNotionBlocks = redirectToNotionBlock(taskPageObj.url);
            console.log(
              "editInNotionBlocks",
              JSON.stringify(editInNotionBlocks),
            );
            const replaceBlockRes = axios({
              method: "post",
              url: response_url,
              data: {
                replace_original: "true",
                text: "Sequence complete",
                blocks: editInNotionBlocks.blocks,
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
                console.log(
                  "AXIOS ERROR in Edit in notion if-else - InteractionHandler",
                  err,
                );
              });
          } else {
            sendError(taskAddResult, payload, response_url);
            console.log(taskAddResult.errorMsg);
          }
        } catch (error) {
          console.error("Error adding task", error);
        }
      })();

    } else if (action_text === "Edit in Notion" || action_text === "Done" || action_text === "Confirm Edits") {
      
      console.log("Edit in Notion, Response Url", response_url);
      let action = "*Done*";

      if (payload["actions"][0].value === "done_123") {
        action = "*Done: Task Created*";
      }
      if (action_id === "updateId-02") {
        action = "*Done: Task Updated*";
      }

      const replaceBlockRes = axios({
        method: "post",
        url: response_url,
        data: {
          replace_original: "true",
          text: "Sequence complete",
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `:white_check_mark: ${action}`,
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
          console.log(
            "AXIOS ERROR in Edit in notion if-else - InteractionHandler",
            err,
          );
        });

      // sendApprove(payload, response_url);
    } else if (action_text === "Delete") {
      (async () => {
        const pageUrl = payload.actions[0].value;
        const deletionResult = await deletePage(pageUrl);
        console.log(deletionResult);
        // TODO return message indicating success or failure
        sendReject(
          payload,
          action_text,
          response_url,
          ":put_litter_in_its_place: Task Deleted",
        );
      })();
    } else if (action_text === "Cancel") {
      let cancelMessage = ":x: Task not Added";
      if (action_id === "cancelUpdateId-02"){
        cancelMessage = ":x: Task not Updated";
      }
      sendReject(
        payload,
        action_text,
        response_url,
        cancelMessage,
      );
    } else {
      sendReject(
        payload,
        action_text,
        response_url,
        ":x: Task not Added/Updated: No Matching Action",
      );
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
            text: `${action}`,
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
    // TODO create the task and redirect user to task page so they can edit task there
  }
}

/**
 * when user submits block with edited task details for creating/updating a task
 * @param payload
 * @param response_url
 *
function addTaskandTellUser(payload: BlockAction, response_url: string) {
  if (payload["actions"][0].type === "button") {
    const taskPageObj: TaskPage = JSON.parse(
      payload["actions"][0].value || "{}",
    );
    const taskDetailsObj: Task = taskPageObj.task;
    const block = redirectToNotionBlock(taskPageObj.url || "");

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
} */
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
                text: `:${errEmoji}: *Unable to ${errMessage} Entry*: ${createRowResult.errorMsg}, `,
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
