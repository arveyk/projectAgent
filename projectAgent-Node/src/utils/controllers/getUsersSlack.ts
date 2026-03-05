import axios from "axios";
import { SLACK_BOT_TOKEN } from "../../env";
import { UsersListResponse } from "@slack/web-api";
import { SlackUser } from "./userTypes";
import { SlashCommand } from "@slack/bolt";
import { DateTime } from "luxon";

const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;

/* Combined data of user on Slack that is creating a task. Both time zone data and 
userId, name and email that will be user to create the assigned by field in the task */
type SlackUserData = {
  userId: string;
  name: string;
  email: string;
  timezoneData: {
    tz: string;
    tz_label: string;
    tz_offset: number;
  };
};

/* Similar to SlackUserData but with timezoneData resolved to eventTimeData */
type UserData = {
  eventTimeData: DateTime;
  userId: string;
  name: string;
  email: string;
};

/**
 * Fetches a list of users from Slack and returns an array of user objects.
 * @returns An array of user objects.
 */
export const getSlackUsers = async function (): Promise<SlackUser[]> {
  const listUsersURL = "https://slack.com/api/users.list";
  const failureMessage = "Failed to fetch Slack users";

  const workspaceUsersQuery = await queryUserOrUsersFromSlack(listUsersURL, failureMessage);
  const slackResponse: UsersListResponse = workspaceUsersQuery.data;

  const membersArray = slackResponse.members;

  if (membersArray) {
    const slackWorkSpaceMembers: SlackUser[] = membersArray.filter((user) => {
      return user.is_bot !== true;
    }).map((humanUsers) => {
      return {
        userId: humanUsers.id,
        name: humanUsers.real_name || "name not found",
        email: humanUsers.profile ? humanUsers.profile.email : undefined,
      }
    });

    console.log(`Total users found: ${slackWorkSpaceMembers.length}`);
    return slackWorkSpaceMembers;
  }
  const usersArr: SlackUser[] = [];
  console.log(`Total users found: ${usersArr.length}`);
  return [];
};

/**
 * Returns the Slack user with the given user id.
 * @param userID The id of the user to find.
 * @returns The Slack user with the given user id.
 */
export async function getSlackUserDataById(
  userID: string,
): Promise<SlackUserData> {
  console.log("User ID", userID);

  const userQueryUrl = `https://slack.com/api/users.info?user=${userID}`;

  const retrieveUserInfoResponse = await queryUserOrUsersFromSlack(userQueryUrl,
    "Failed to fetch Slack user Data");

  if (!retrieveUserInfoResponse.data["ok"]) {
    console.log(retrieveUserInfoResponse.data);
    throw new Error(`Invalid user ID`);
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
  console.log(
    "(getSlackUserById): Response status:",
    retrieveUserInfoResponse.status,
    "profile",
    userData.profile.real_name,
  );

  // console.log("User Data", JSON.stringify(userData));
  return {
    userId: userID,
    name: userData.real_name,
    email: userData.profile.email,
    timezoneData: {
      tz: userData["tz"],
      tz_label: userData["tz_label"],
      tz_offset: offsetSeconds / (SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR),
    },
  };
}

export async function getAppUserData(
  reqBody: SlashCommand,
  timestamp: number,
): Promise<UserData> {
  const userID = reqBody["user_id"];
  const userData = await getSlackUserDataById(userID);
  const userTZData = userData.timezoneData;

  console.log(`user timezone data: ${JSON.stringify(userTZData)}`);
  console.log(`timestamp: ${JSON.stringify(timestamp)}`);

  const time = DateTime.fromMillis(timestamp).setZone(userTZData.tz);

  return {
    eventTimeData: time,
    userId: userData.userId,
    name: userData.name,
    email: userData.email,
  };
}

export async function queryUserOrUsersFromSlack(hostURL: string, errorMessage: string) {
  try {
    const userQueryResponse = await axios.get(hostURL, {
      headers: {
        "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
      family: 4
    });

    return userQueryResponse;
  } catch (error) {
    console.log(error);
    throw new Error(errorMessage);
    /*
    return {
      success: false,
      data: error
    }*/
  }
}