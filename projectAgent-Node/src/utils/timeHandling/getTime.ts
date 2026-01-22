import axios from "axios";
import { SLACK_BOT_TOKEN } from "../../env";
import { DateTime } from "luxon";
import { SlashCommand } from "@slack/bolt";

const SECONDS_IN_ONE_MINUTE = 60;
const MINUTES_IN_ONE_HOUR = 60;

export type TimezoneInfo = {
  tz: string;
  tz_label: string;
  tz_offset: number;
};

/**
 * Gets timezone data about a user.
 * @param userID: The user's ID
 * @returns       The user's timezone, timezone label, and offset from UTC
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
    family: 4,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error fetching Slack user TimeZone:", error);
      throw new Error("Failed to fetch Slack user TimeZone");
    });

  console.log(`user data raw response: ${JSON.stringify(resp.data)}`);

  if (!resp.data["ok"]) {
    throw new Error("Invalid user ID");
  } else {
    console.log(`user data response: ${JSON.stringify(resp.data["user"])}`);
    const userData = resp.data["user"];
    if (typeof userData["tz"] !== "string") {
      throw new Error("Invalid timezone response");
    }
    if (typeof userData["tz_label"] !== "string") {
      throw new Error("Invalid timezone label");
    }
    if (typeof userData["tz_offset"] !== "number") {
      throw new Error("Invalid timezone offset");
    }
    const offsetSeconds: number = userData["tz_offset"];
    if (isNaN(offsetSeconds)) {
      throw new Error("Timezone offset is not a number");
    }
    const info: TimezoneInfo = {
      tz: userData["tz"],
      tz_label: userData["tz_label"],
      tz_offset: offsetSeconds / (SECONDS_IN_ONE_MINUTE * MINUTES_IN_ONE_HOUR),
    };

    return info;
  }
}

/**
 * Function to get the time data that the user is on slack activates project agent
 * @param reqBody:   Payload containing the task details to be extracted and user creating
 *    the task
 * @param timestamp: Time at which project agent is activated in milliseconds
 * 
 * @returns          Timezone data at which the task is being created
 */
export async function getEventTimeData(
  reqBody: SlashCommand,
  timestamp: number,
): Promise<DateTime> {
  const userID = reqBody["user_id"];
  const userTZData = await getUserTimezoneData(userID);
  console.log(`user timezone data: ${JSON.stringify(userTZData)}`);
  console.log(`timestamp: ${timestamp}`);

  const time = DateTime.fromMillis(timestamp).setZone(userTZData.tz);

  return time;
}
