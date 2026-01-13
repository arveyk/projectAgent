import axios from "axios";
import { SLACK_BOT_TOKEN, SLACK_USER_OAUTH_TOKEN } from "../../env";
import { UsersListResponse } from "@slack/web-api";
import { SlackUser } from "./userTypes";

type UserInSlack = {
  source: "slack";
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
export async function getSlackUserById(userID: string): Promise<UserInSlack> {
  console.log("User ID", userID);
 
  const retrieveUserResponse = await axios({
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

const userData = retrieveUserResponse.data.user
  
  console.log("(getSlackUserById): User info:", retrieveUserResponse, "profile", userData.profile);
  if (!retrieveUserResponse.data) {
    throw new Error(`Error fetching user by ID: ${retrieveUserResponse}`);
  }

  console.log("User Data", JSON.stringify(userData))
  return {
    source: "slack",
    userId: userID,
    name: userData.real_name,
    email: userData.profile.email // ? retrieveUserResponse.profile.email : null,
  }
}
