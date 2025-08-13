import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env.js";

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const MILLISECONDS = 1000;

/**
 * Gets timezone data about a user.
 * @param {*} userID The user's ID
 * @returns The user's timezone, timezone label, and offset from UTC
 */
export const getUserTimezoneData = async function (userID) {
  const resp = await axios({
    method: "get",
    url: `https://slack.com/api/users.info?user=${userID}`,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
  });

  if (resp.data["ok"]) {
    const userData = resp.data["user"];
    return {
      tz: userData["tz"],
      tz_label: userData["tz_label"],
      tz_offset: userData["tz_offset"] / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR),
    };
  } else {
    throw new Error("Invalid user ID");
  }
};

export const getEventTimeData = async function (reqBody, timestamp) {
  // TODO get event timestamp and convert it to a date in the sender's timezone
  const userID = reqBody["user_id"];
  const userTZData = await getUserTimezoneData(userID);
  // console.log(`user timezone data: ${JSON.stringify(userTZData)}`);
  // console.log(`timestamp: ${timestamp}`);

  const timestampMillis = parseInt(timestamp) * MILLISECONDS;
  // console.log(`timestamp (milliseconds: ${timestampMillis}`);

  const timeISO = new Date(timestampMillis).toISOString();
  // console.log(`time (ISO): ${timeISO}`);

  return {
    timeISO: timeISO,
    timezone: userTZData.tz,
    timezoneOffset: userTZData.tz_offset,
  };
};
