import { getNotionUsers } from "./getNotionUsers.js";
import { getSlackUsers } from "./getUsers.js";
import { searchUser } from "./searchUserAi.js";
import { task_feed_cats } from "../../test-data/tasks/example-tasks.js";

//import { notionUsers, slackUsers } from "../../storage/users.js";
//const notionUsers = ;
//const slackUsers = ;

/**
 * getUserInChannel - function to check for a user with matching credentials
 *  existing in Slack channel
 *
 * @param: task - object constaining task fields including assignee
 * @Returns: resulting matching user
 */
export const getUserInChannel = async function (task) {
	//Change function name to getUserInChannel
  const notionUsers = await getNotionUsers();
  const slackUsers = await getSlackUsers();

  const usersArr = [];

  slackUsers.forEach((element) => {
    if (element.is_bot !== true) {
      //console.log(
      //  `realname: ${element.real_name}, email: ${element.profile.email}, phone:${element.profile.phone}`,
      //);
      usersArr.push(element);
    }
  });

  let retrieveUsers = [];
  //tasks.forEach(task => {
  //});
  usersArr.forEach((user) => {
    if (
      task.assignee.replace("@", "").replace(".", " ").toLowerCase() ===
      user.name
    ) {
      console.log("Found Matching user", user);
      retrieveUsers.push(user);
    }
  });
  /**
  notionUsers.forEach((person) => {
    if (task.assignee.replace("@", "").replace(".", " ").toLowerCase() === person.name.replace("@", "").toLowerCase()) {
      //   console.log("Matching Person", person);
      retrieveUsers.push(person);
    }
  });
  */

  let userParseResult;
  switch (retrieveUsers.length) {
    case 0:
      console.log(
        "No Match, use ai? search substring?",
        JSON.stringify(retrieveUsers),
      );
      userParseResult = await searchUser(task, retrieveUsers);
      /**
       * search using substring
       *
       * usersArr.forEach((user) => {
       *   if (task.assignee.replace("@", "").includes(user.name.replace("@", "")) || user.name.replace("@", "").includes(task.assignee.replace("@", ""))) {
       *     console.log("Found Matching user", user);
       *     retrieveUsers.push(user);
       *   }
       * });
       * retrieveUsers.length > 0
       *   ? console.log("found using substring")
       *   : console.log("Not found even with substring");
       */
      console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
      if (userParseResult.found === false) {
        console.log("Not found use as-is");
        userParseResult = task;
      }
      break;
    case 1:
      // only one source for exact match
      console.log("Exact Match, use searcRes[0]");
      userParseResult = retrieveUsers[0];
      retrieveUsers.email
	? console.log(' e')
	: task.email = retr
      retrieveUsers.phonenumber
	? console.log(' p') 
	: task.phonenumber = retrieveUsers.phonenumber
      break;
    case 2:
      // notion and slack exact match
      if (retrieveUsers[0].source !== retrieveUsers[1].source) {
        retrieveUsers[0].source === "slack"
          ? (userParseResult = retrieveUsers[0])
          : (userParseResult = retrieveUsers[1]);
      }
      break;
    /*
    default:
      console.log("Multiple results");
      userParseResult = await searchUser(task, retrieveUsers);
      console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
      if (!userParseResult.found) {
        console.log("Not found use as-is");
      }
      break;
     * userActivityArr = await = axios.get("https://slack.com/api/users.getPresence", {
     *   user: userID,
     * }, {
     *   headers: {
     *     "Content-Type: application/json:charset=utf-8",
     *     "Authorization": `Bearer SLACK_BOT_TOKEN`,
     *    }, family: 4
     * }`
     * )
     *
     */
  }
  console.log(retrieveUsers);
  return userParseResult;
};

export async function matchResultCheck(retrievedUsers) {
  switch (retrievedUsers.length) {
    case 0:
      console.log(
        "No Match, use ai? search substring?",
        JSON.stringify(retrievedUsers),
      );
      userParseResult = await searchUser(task, retrievedUsers);
      console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
      if (userParseResult.found === false) {
        console.log("Not found use as-is");
        userParseResult = task;
      }
      break;
    case 1:
      // only one source for exact match
      console.log("Exact Match, use searcRes[0]");
      userParseResult = retrieveUsers[0];
      break;
    case 2:
      // notion and slack exact match
      if (retrieveUsers[0].source !== retrieveUsers[1].source) {
        retrieveUsers[0].source === "slack"
          ? (userParseResult = retrieveUsers[0])
          : (userParseResult = retrieveUsers[1]);
      }
      break;
    /**
    default:
      console.log("Multiple results");
      userParseResult = await searchUser(task, retrieveUsers);
      console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
      if (!userParseResult.found) {
        console.log("Not found use as-is");
      }
      break;
      */
  }
}
getUserInChannel(task_feed_cats);
