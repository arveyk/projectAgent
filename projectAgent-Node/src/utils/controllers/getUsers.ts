import axios from "axios";
import { SLACK_BOT_TOKEN, SLACK_USER_OAUTH_TOKEN } from "../../env";
import { UsersListResponse } from "@slack/web-api";
import { User } from "./someTypes";


/**
 * Fetches a list of users from Slack and returns an array of user objects.
 * Each user object contains the source, userID, name, email, and phone.
 *
 * @returns {Promise<Array>} An array of user objects.
 */
// eslint-disable-next-line no-unused-vars


export const getSlackUsers = async function (): Promise<User[]> {
  const listUsersURL = "https://slack.com/api/users.list";
  const slackResp: UsersListResponse = await axios.get(listUsersURL, {
    headers: {
      "Content-Type": "application/json charset=utf-8",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
    family: 4,
  }).then((response) => {
    // console.log("Slack users response:", response.data);
    return response.data;
  }).catch((error) => {
    console.error("Error fetching Slack users:", error);
    throw new Error("Failed to fetch Slack users");
  });

  const membersArray = slackResp.members;
  const usersArr: User[] = [];

  if (membersArray) {
    membersArray.forEach((element) => {
      if (element.is_bot !== true) {
        console.log(
          `realname: ${element.real_name}, email: ${element.profile ? element.profile.email : null}, phone:${element.profile ? element.profile.phone : null}`,
        );
        usersArr.push({
          source: "slack",
          userId: element.id,
          name: element.real_name || null,
          email: element.profile ? element.profile.email : undefined,
          phoneNumber: element.profile ? element.profile.phone : undefined,
        });
      }
    });
  }
  // console.log("Users array:", JSON.stringify(usersArr));
  console.log(`Total users found: ${usersArr.length}`);
  return usersArr;
};


const sampleUserId = "U092TCSFAA2";
export async function getSlackUserById(userID: string) {
  console.log("User ID", userID);
  const getUserInfoUrl = "https://slack.com/api/users.profile.get";
  const userInfo = await axios.get(getUserInfoUrl, {
    data: {
      user: userID,
    },
    headers: {
      "Content-Type": "application/json charset=utf-8",
      Authorization: `Bearer ${SLACK_USER_OAUTH_TOKEN}`,
    },
    family: 4,
  }).then((response) => {
    return response.data;
  }).catch((error) => {
      console.error("Error fetching Slack user by ID:", error);
      throw new Error("Failed to fetch Slack user by ID");
    });
  console.log("User info:", JSON.stringify(userInfo));
  if (userInfo.ok !== true) {
    throw new Error(`Error fetching user by ID: ${userInfo.error}`);
  }
  return [
    {
      source: "slack",
      userId: userID,
      name: userInfo.profile.real_name,
      email: userInfo.profile ? userInfo.profile.email : null,
      phoneNumber: userInfo.profile ? userInfo.profile.phone : null,
      // Uncomment below if you want to include the profile image URL     
    }];
}
// getSlackUsers();
// getSlackUserById("U09AE554J85");
