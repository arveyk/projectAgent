import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env.js";

export const getUserTimezone = async function(userID) {
    const resp = await axios({
        method: "get",
        url: `https://slack.com/api/users.info?user=${userID}`,
        headers: {
              "Content-Type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
            },
    });
    // TODO get timezone
    console.log(JSON.stringify(resp.data));
}