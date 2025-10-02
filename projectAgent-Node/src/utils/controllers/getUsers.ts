import axios from "axios";
import { SLACK_BOT_TOKEN } from "../../env";
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
  });

  const membersArray = slackResp.members;
  const usersArr: User[] = [];

  if (membersArray) {
    membersArray.forEach((element) => {
      if (element.is_bot !== true) {
        console.log(
          `realname: ${element.real_name}, email: ${element.profile ? element.profile.email : null}, phone:${element.profile ? element.profile.phone: null}`,
        );
        usersArr.push({
          source: "slack",
          userId: element.id,
          name: element.real_name || null,
          email: element.profile ? element.profile.email : undefined,
          phonenumber: element.profile ? element.profile.phone : null,
        });
      }
    });
  }
  return usersArr;
};


const sampleUserId = "U092TCSFAA2";
export async function getSlackUserById(userID: string) {
  console.log("User ID", userID);
  const getUserInfoUrl = "https://slack.com/api/users.info";
  const userInfo = await axios.get(getUserInfoUrl, {
    data: {
      user: userID,
    },
    headers: {
      "Content-Type": "application/json charset=utf-8",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
    family: 4,
  });
}
//getSlackUsers();
