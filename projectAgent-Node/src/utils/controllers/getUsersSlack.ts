import axios from "axios";
import { SLACK_BOT_TOKEN } from "../../env";
import { UsersListResponse } from "@slack/web-api";
import { SlackUser } from "./userTypes";
import { SlashCommand } from "@slack/bolt";
import { DateTime } from "luxon";


const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;


type SlackUserData = {
  userId: string;
  name: string;
  email: string;
  timezoneData: {
    tz: string;
    tz_label: string;
    tz_offset: number;
  }
}
type UserData = {
  eventTimeData: DateTime;
  userId: string;
  name: string;
  email: string;
}

/**
 * Fetches a list of users from Slack and returns an array of user objects.
 * @returns An array of user objects.
 */
export const getSlackUsers = async function (): Promise<SlackUser[]> {
  const listUsersURL = "https://slack.com/api/users.list";
  const slackResp: UsersListResponse = await axios
    .get(listUsersURL, {
      headers: {
        "Content-Type": "application/json charset=utf-8",
        Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      },
      family: 4,
    })
    .then((response) => {
      // console.log("Slack users response:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching Slack users:", error);
      throw new Error("Failed to fetch Slack users");
    });

  const membersArray = slackResp.members;
  const usersArr: SlackUser[] = [];

  if (membersArray) {
    membersArray.forEach((element) => {
      if (element.is_bot !== true) {
        console.log(
          `realname: ${element.real_name}, email: ${element.profile ? element.profile.email : null}, phone:${element.profile ? element.profile.phone : null}`,
        );
        usersArr.push({
          userId: element.id,
          name: element.real_name || "name not found",
          email: element.profile ? element.profile.email : undefined,
        });
      }
    });
  }
  console.log(`Total users found: ${usersArr.length}`);
  return usersArr;
};

/**
 * Returns the Slack user with the given user id.
 * @param userID The id of the user to find.
 * @returns The Slack user with the given user id.
 */
export async function getSlackUserDataById(userID: string): Promise<SlackUserData> {
  console.log("User ID", userID);

  const retrieveUserInfoResponse = await axios({
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

  if (!retrieveUserInfoResponse.data["ok"]) {
    throw new Error(`Error fetching user by ID: ${retrieveUserInfoResponse}`);
  }
  const userData = retrieveUserInfoResponse.data["user"];

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
  console.log("(getSlackUserById): User info:", retrieveUserInfoResponse, "profile", userData.profile);



  console.log("User Data", JSON.stringify(userData))
  return {
    userId: userID,
    name: userData.real_name,
    email: userData.profile.email,
    timezoneData: {
      tz: userData["tz"],
      tz_label: userData["tz_lable"],
      tz_offset: offsetSeconds / (SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR)
    }
  }
}

export async function getAppUserData(
  reqBody: SlashCommand,
  timestamp: number,
): Promise<UserData> {
  const userID = reqBody["user_id"];
  const userData = await getSlackUserDataById(userID);
  const userTZData = userData.timezoneData;

  console.log(`user timezone data: ${JSON.stringify(userTZData)}`);
  console.log(`timestamp: ${timestamp}`);

  const time = DateTime.fromMillis(timestamp).setZone(userTZData.tz);

  return {
    eventTimeData: time,
    userId: userData.userId,
    name: userData.name,
    email: userData.email,
  };
}
