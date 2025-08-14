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

export const sendLoadingMsg = async function (message, channel_id) {
  const blocks = createBlockLoadingMsg(message);
  const eventResURL = "https://slack.com/api/chat.postMessage";
  try {
    await axios.post(
      eventResURL,
      {
        channel: channel_id,
        text: "Some Text",
        blocks: blocks.blocks,
      },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      },
    );
  } catch (err) {
    console.log(err);
  }
};
