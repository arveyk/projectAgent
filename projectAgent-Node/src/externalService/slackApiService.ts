import { SLACK_BOT_TOKEN } from "../env";
import axios from "axios";

export async function getChatHistory(channelId: string, timeStamp: number) {
  try {
    const chatHistory = await axios.get("https://slack.com/api/conversations.history", {
      params: {
        channel: channelId,
        inclusive: false,
        latest: timeStamp,
        limit: 50,
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

export async function sendBlockResponse() {
}
