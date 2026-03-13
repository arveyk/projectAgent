import { SLACK_BOT_TOKEN } from "../env";
import axios from "axios";

export async function postMessageOnSlackChannel(channelId: string, messageBlocks: object[]) {
  try {
    const postMessageUrl = "https://slack.com/api/chat.postMessage"
    const responseFromSlack = await axios.post(
      postMessageUrl,
      {
        channel: channelId,
        text: "Some Text",
        blocks: messageBlocks,
      },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
        family: 4,
      },
    );

    console.log("OK from slack", responseFromSlack.data);
    console.log("Data sent to Slack", responseFromSlack.config.data);

    return responseFromSlack.data;
  } catch (err) {  
    console.log("Error in Axios", err);
    return err;
  }
}