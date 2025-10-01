import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env.js";
import { DateTime } from "luxon";

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const MILLISECONDS = 1000;

export type TimezoneInfo = {
  tz: string;
  tz_label: string;
  tz_offset: number;
};

/**
 * Gets timezone data about a user.
 * @param {*} userID The user's ID
 * @returns The user's timezone, timezone label, and offset from UTC
 */
export async function getUserTimezoneData(
  userID: string,
): Promise<TimezoneInfo> {
  const resp = await axios({
    method: "get",
    url: `https://slack.com/api/users.info?user=${userID}`,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
  });

  if (!resp.data["ok"]) {
    throw new Error("Invalid user ID");
  } else {
    const userData = resp.data["user"];
    if (typeof userData["tz"] !== "string") {
      throw new Error("Invalid timezone response");
    }
    if (typeof userData["tz_label"] !== "string") {
      throw new Error("Invalid timezone label");
    }
    if (typeof userData["tz_offset"] !== "string") {
      throw new Error("Invalid timezone offset");
    }
    const offsetSeconds: number = parseInt(userData["tz_offset"]);
    if (isNaN(offsetSeconds)) {
      throw new Error("Timezone offset is not a number");
    }
    const info: TimezoneInfo = {
      tz: userData["tz"],
      tz_label: userData["tz_label"],
      tz_offset: offsetSeconds / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR),
    };
    return info;
  }
}

export async function getEventTimeData(
  reqBody,
  timestamp: string,
): Promise<DateTime> {
  const userID = reqBody["user_id"];
  const userTZData = await getUserTimezoneData(userID);
  // console.log(`user timezone data: ${JSON.stringify(userTZData)}`);
  // console.log(`timestamp: ${timestamp}`);

  const timestampMillis = parseInt(timestamp) * MILLISECONDS;
  // console.log(`timestamp (milliseconds: ${timestampMillis}`);

  if (isNaN(timestampMillis)) {
    throw new Error("Timestamp is not a number");
  }

  const time = DateTime.fromMillis(timestampMillis).setZone(userTZData.tz);

  return time;
}
