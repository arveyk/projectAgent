/**
 * for sending a thread as a reply to user interaction
 */

import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env.js";

function threadMsg(request, response) {
  const payloadStr = request.body.payload;
  const payload = JSON.parse(payloadStr);
  console.log(payload);

  const reply = axios({
    method: "post",
    url: "https://slack.com/api/chat.postMessage",
    data: {
      channel: `${payload.channel["id"]}`,
      thread_ts: `${payload.message["ts"]}`,
      text: "This is A threaded reply",
    },
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  response.status(200).send("Threaded message");
}

export { threadMsg };
