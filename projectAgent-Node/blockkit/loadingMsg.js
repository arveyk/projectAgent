import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env.js";

export const createBlockLoadingMsg = function (message) {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `:arrows_counterclockwise: ${message}…`,
        },
      },
    ],
  };
};

export const sendLoadingMsg = async function (message, response_url) {
  const blocks = createBlockLoadingMsg(message);
  try {
    // TODO make the message go away when the wait is over
    await axios.post(
      response_url,
      {
        text: "Some Text",
        blocks: blocks.blocks,
      },
      {
        headers: {
          //Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
	family: 4
      },
    );
  } catch (err) {
    console.log(err);
  }
};
