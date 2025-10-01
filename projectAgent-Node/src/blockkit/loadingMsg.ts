import axios from "axios";

/**
 * Creates a Slack block for the loading message.
 * @param {*} message
 * @returns
 */
export const createBlockLoadingMsg = function (message: string) {
  return {
    replace_original: true,
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

/**
 * Sends a loading message to the user who triggered a Slack event.
 * @param {*} message
 * @param {*} response_url
 */
export const sendLoadingMsg = async function (message: string, response_url: string) {
  const blocks = createBlockLoadingMsg(message);
  try {
    // TODO make the message go away when the wait is over
    const slackResp = await axios.post(
      response_url,
      {
        text: message,
        blocks: blocks.blocks,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        family: 4,
      },
    );
  } catch (err) {
    console.log(err);
  }
};
