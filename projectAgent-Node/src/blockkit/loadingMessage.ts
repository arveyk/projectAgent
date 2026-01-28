import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env";

/**
 * Creates a Slack block for a loading message.
 * @param {*} messageText The text of the loading message.
 * @param {*} slashCommand The text of the slash command that triggered the app.
 * @returns A Slack block for a loading message.
 */
export const createLoadingMessageBlock = function (
  messageText: string,
  slashCommand?: string,
) {
  const blocks = slashCommand
    ? {
        replace_original: true,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `>${slashCommand}\n\n:arrows_counterclockwise: ${messageText}…`,
            },
          },
        ],
      }
    : {
        replace_original: true,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `:arrows_counterclockwise: ${messageText}…`,
            },
          },
        ],
      };
  return blocks;
};

/**
 * Sends a loading message to the user who triggered a Slack event.
 * @param {*} messageText The text of the loading message.
 * @param {*} response_url The URL to send the block to.
 * @param {*} slashCommand The text of the slash command that triggered the app.
 */
export const sendLoadingMessage = async function (
  messageText: string,
  response_url: string,
  slashCommand?: string,
) {
  const blocks = createLoadingMessageBlock(messageText, slashCommand);
  try {
    // TODO make the message go away when the wait is over
    await axios.post(
      response_url,
      {
        text: messageText,
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

/**
 * Deletes a loading message.
 * @param timeStamp
 * @param channel_id
 */
export const deleteLoadingMessage = async function (
  timeStamp: string,
  channel_id: string,
) {
  const eventResURL = "https://slack.com/api/chat.delete";
  try {
    // TODO make the message only appear to the user who triggered the slash command
    // TODO make the message go away when the wait is over
    await axios.post(
      eventResURL,
      {
        channel: channel_id,
        text: "Some Text",
        ts: timeStamp,
      },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
        family: 4,
      },
    );
  } catch (err) {
    console.log(err);
  }
};
