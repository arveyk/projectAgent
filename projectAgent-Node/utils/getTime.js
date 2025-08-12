import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env.js";

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;

/**
 * Gets timezone data about a user.
 * @param {*} userID The user's ID
 * @returns The user's timezone, timezone label, and offset from UTC
 */
export const getUserTimezone = async function(userID) {
    const resp = await axios({
        method: "get",
        url: `https://slack.com/api/users.info?user=${userID}`,
        headers: {
              "Content-Type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
            },
    });
    const userData = resp.data["user"];
    return {
        tz: userData["tz"],
        tz_label: userData["tz_label"],
        tz_offset: userData["tz_offset"] / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR)
    }
}