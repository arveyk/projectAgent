import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env.js";

export const deleteLoadingMsg = async function (timeStamp, channel_id) {
  const eventResURL = "https://slack.com/api/chat.delete";
  try {
    // TODO make the message only appear to the user who triggered the slash command
    // TODO make the message go away when the wait is over
    await axios.post(
      eventResURL,
      {
        channel: channel_id,
        text: "Some Text",
	ts: timeStamp
      },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
	family: 4
      },
    );
  } catch (err) {
    console.log(err);
  }
}
