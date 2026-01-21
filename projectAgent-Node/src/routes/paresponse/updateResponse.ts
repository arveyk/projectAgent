import axios from "axios";
import { addTaskNotionPage, 
  PageAddResult,
} from "../../utils/database/addNewTaskToDatabase";
import { SLACK_BOT_TOKEN } from "../../env";
import { BlockAction } from "@slack/bolt";
import { createRedirectToNewPageBlock } from "../../blockkit/createRedirectToNewPageBlock";
import { ProjectWithName, TaskPage } from "../../utils/taskFormatting/task";
import { deletePage } from "../../utils/database/deleteDatabasePage";
import { APIGatewayProxyEventV2, Context, StreamifyHandler } from "aws-lambda";
import {
  extractRequestBody,
  extractPayload,
} from "../../utils/slashCommandProcessing";
import { NotionUser } from "../../utils/controllers/userTypes";
import { integrateSelectedValues } from "../../utils/controllers/useSelectedOption";

/**
 * interactionHandler - Response to user interactions with blocks when a button
 * 		     is pressed
 *
 * @request - request from slack
 * @response - response that the function sends
 * @next - function to pass control to other functions that router uses
 */
const interactionHandler: StreamifyHandler = async function (
  event: APIGatewayProxyEventV2,
  responseStream: awslambda.HttpResponseStream,
  context: Context,
) {
  const httpResponseMetadata = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
  };

  responseStream = awslambda.HttpResponseStream.from(
    responseStream,
    httpResponseMetadata,
  );
  responseStream.write("Button clicked\n");
  responseStream.end();

  const reqBody = extractRequestBody(event);
  const payload = extractPayload(reqBody);
  console.log(`Body: ${JSON.stringify(reqBody)}`);
  console.log(`Body.payload${JSON.stringify(payload)}`);
  console.log("TRIGGER_ID", payload["trigger_id"]);
  console.log(`RESPONSE URL ${payload["response_url"]}`);
  console.log(`ACTIONS: ${JSON.stringify(payload["actions"])}`);

  const trigger_id: string = payload["trigger_id"];
  const response_url: string = payload["response_url"];
  const message: string = payload["message"];
  console.log(
    `TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`,
  );

  const action_id: string = payload["actions"][0]["action_id"];
  let action_text = "";

  if (typeof payload["actions"][0]["selected_option"] !== "undefined") {
    console.log("Changed, No longer handling these Blocks");
  } else {
    action_text = payload["actions"][0]["text"]["text"];
    console.log("action_text in else block", action_text);

    if (action_text === "Confirm" || action_text === "Add Task") {
      const taskPageAndOptionsObject: {
        taskPageObject: TaskPage;
        userOptions: NotionUser[];
        projectOptions: ProjectWithName[];
      } = JSON.parse(payload["actions"][0].value || "{}");
      console.log(payload["actions"][0].value);
      console.log(JSON.stringify(taskPageAndOptionsObject));

      const taskPageObj: TaskPage =
        taskPageAndOptionsObject.taskPageObject as TaskPage;

      if (action_id === "SelectionActionId-2") {
        console.log("Utilize users input");
        const userSelections: NotionUser[] =
          taskPageAndOptionsObject.userOptions;
        console.log(`${userSelections}`);
        const projectOptions: ProjectWithName[] =
          taskPageAndOptionsObject.projectOptions;

        // task with integrated selected assignee and project values from slack interaction
        const taskWithIntegratedValues = integrateSelectedValues(
          taskPageAndOptionsObject.taskPageObject.task,
          userSelections,
          projectOptions,
          payload,
        );

        taskPageObj.task.project = taskWithIntegratedValues.project;
        taskPageObj.task.assignees = taskWithIntegratedValues.assignees;
      }
      console.log("Edit in Notion, Response Url", response_url);
      await (async () => {
        try {
          console.log(
            `(sendApprove) taskPageObj: ${JSON.stringify(taskPageObj)}, taskPageObj.task: ${taskPageObj.task}`,
          );
          const taskAddResult = await addTaskNotionPage(taskPageObj.task);

          console.log(`Page added successfully? ${taskAddResult.success}`);

          const newTaskPage = taskAddResult.page;
          if (taskAddResult.success === true && newTaskPage) {
            taskPageObj.pageId = newTaskPage.id;
            taskPageObj.url = "url" in newTaskPage ? newTaskPage.url : "";

            const editInNotionBlocks = createRedirectToNewPageBlock(
              taskPageObj.url,
            );
            console.log(
              "editInNotionBlocks",
              JSON.stringify(editInNotionBlocks),
            );
            await axios({
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
    } else if (
      action_text === "Edit in Notion" ||
      action_text === "Done" ||
      action_text === "Confirm Edits"
    ) {
      console.log("Edit in Notion, Response Url", response_url);
      let action = "*Done*";

      if (payload["actions"][0].value === "done_123") {
        action = "*Done: Task Created*";
      }
      if (action_id === "updateId-02") {
        action = "*Done: Task Updated*";
      }

      await axios({
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
    } else if (action_text === "Delete") {
      await (async () => {
        const pageUrl = payload.actions[0].value;
        const deletionResult = await deletePage(pageUrl);
        console.log(deletionResult);

        // TODO return message indicating success or failure
        await sendReject(
          payload,
          action_text,
          response_url,
          ":put_litter_in_its_place: Task Deleted",
        );
      })();
    } else if (action_text === "Cancel") {
      let cancelMessage = ":x: Task not Added";
      if (action_id === "cancelUpdateId-02") {
        cancelMessage = ":x: Task not Updated";
      }
      await sendReject(payload, action_text, response_url, cancelMessage);
    } else {
      await sendReject(
        payload,
        action_text,
        response_url,
        ":x: Task not Added/Updated: No Matching Action",
      );
    }
  }
};

async function sendReject(
  payload: BlockAction,
  action_text: string,
  response_url: string,
  action: string,
) {
  console.log(
    `Text in button ${"value" in payload.actions[0] ? payload.actions[0]["value"] : "No value"}, Action_Text${action_text}`,
  );
  await axios({
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
                text: `:${errEmoji}: *Unable to ${errMessage} Entry*: ${createRowResult.errorMsg}`,
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

export { interactionHandler };
