import { SLACK_BOT_TOKEN } from "../env";
import axios from "axios";

/**
 * Function to retrive 5 most recent chats from the user's channel
 * 
 * @param channelId -  Id of the channel where project agent is invoked
 * @param timeStamp- time in milliseconds, at which project agent starts to process
 * request to create task, this is a work around since there is currently no timestamp
 * included in the slash command payload
 * 
 * @returns response from searching channel history
 */

export async function getChatHistory(channelId: string, timeStamp: number) {
  try {
    const chatHistory = await axios.get("https://slack.com/api/conversations.history", {
      params: {
        channel: channelId,
        inclusive: false,
        latest: String(timeStamp / 1000), // Convert to seconds.
        limit: 5,
      },
      headers: {
        "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      family: 4
    });
    return chatHistory;
  } catch (error) {
    console.log(error);
    throw error;
  };
};

/**
 * Function to post blocks on slack channel
 * @param responseURL: Url to post blocks to
 * @param slackBlock: Slack blocks to be sent to user as response to user
 * @param errorMessage: Error message in case post request fails
 * 
 * @returns: Response from slack
 */
export async function sendBlockResponse(responseURL: string, slackBlock: object[], errorMessage: string) {
  try {
    const postBlocksToUserResponse = await axios.post(responseURL,
      {
        replace_original: true,
        text: "Responding to your request",
        blocks: slackBlock
      },
      {
      headers: {
        "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
      family: 4
    });
    console.log("(sendBlockResponse)", postBlocksToUserResponse.data);
    return {
      success: true,
      data: postBlocksToUserResponse.data
    }
  } catch (error) {
    console.log(errorMessage, error);
    return {
      success: false,
      data: error
    }
  }
}