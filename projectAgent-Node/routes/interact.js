import axios from "axios";
import { sampleModal, RequestApprovalBlock } from "../blockkit/createBlocks.js";
import { SLACK_BOT_TOKEN } from "../env.js";

function interactionsHandler(request, response, next) {
  const payloadStr = request.body.payload;
  const payload = JSON.parse(payloadStr);

  console.log("TRIGGER_ID", payload["trigger_id"]);
  console.log(`RESPONSE URL ${payload["response_url"]}`);
  console.log(payload["actions"]);

  const trigger_id = payload["trigger_id"];
  const response_url = payload["response_url"];
  const message = payload["message"];
  console.log(
    `TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`,
  );

  console.log("TRIGGER_ID VARIABLE", trigger_id, typeof trigger_id);

  sampleModal.trigger_id = trigger_id;

  const modalPost = axios({
    method: "post",
    url: "https://slack.com/api/views.open",
    data: sampleModal,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
  })
    .then((modalResponse) => {
      console.log(modalResponse["data"]);
    })
    .catch((err) => {
      console.log(err);
    });
  response.status(200).send("Interactions received");
}

function interactHandlerBlocks(request, response, next) {
  console.log(
    `REQUEST BODY PAYLOAD${request.body.payload}\nPAYLOAD TYPE: ${typeof request.body.payload}`,
  );

  const payloadStr = request.body.payload;
  const payload = JSON.parse(payloadStr);

  console.log("TRIGGER_ID", payload["trigger_id"]);
  console.log(`RESPONSE URL ${payload["response_url"]}`);
  console.log(payload["actions"]);

  const trigger_id = payload["trigger_id"];
  const response_url = payload["response_url"];
  const message = payload["message"];
  console.log(
    `TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`,
  );

  sampleModal.trigger_id = trigger_id;

  if (message.edited) {
    console.log("Response was Edited");
  } else {
    const modalPost = axios({
      method: "post",
      url: response_url,
      data: RequestApprovalBlock,
    })
      .then((modalResponse) => {
        console.log(modalResponse["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  response.status(200).send("Interactions received");
}

export { interactionsHandler, interactHandlerBlocks };
