import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });
//console.log(process.env);

export const getSlackUsers = async function () {
  const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
  const listUsersURL = "https://slack.com/api/users.list";
  const slackResp = await axios.get(listUsersURL, {
    headers: {
      "Content-Type": "application/json charset=utf-8",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
    family: 4,
  });

  const membersArray = slackResp.data.members;
  const usersArr = [];

  membersArray.forEach((element) => {
    if (element.is_bot !== true) {
      console.log(
        `realname: ${element.real_name}, email: ${element.profile.email}, phone:${element.profile.phone}`,
      );
      usersArr.push({
        source: "slack",
        userID: element.id,
        name: element.real_name,
        email: element.profile.email,
        phone: element.profile.phone,
      });
    }
  });
  return usersArr;
};

const sampleUserId = "U092TCSFAA2";
export async function getSlackUserById(userID) {
  console.log("User ID", userID);
  const getUserInfoUrl = "https://slack.com/api/users.info";
  const userInfo = await axio.get(getUserInfoUrl, {
    data: {
      user: userId,
    },
    headers: {
      "Content-Type": "application/json charset=utf-8",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
    family: 4,
  });
}
//getSlackUsers();
