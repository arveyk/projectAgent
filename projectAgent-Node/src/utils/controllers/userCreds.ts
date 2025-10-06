import { Task } from "../task";
import { getNotionUsers } from "./getNotionUsers";
import { getSlackUsers } from "./getUsers";
import { searchUser } from "./searchUserAi";
import { User } from "./someTypes";

/**
 * getUserInChannel - function to check for a user with matching credentials
 *  existing in Slack channel
 *
 * @param: task - object constaining task fields including assignee
 * @Returns: resulting matching user
 */
export const getMatchingUser = async function (task: Task): Promise<any> {
  //Change function name to getUserInChannel
  const notionUsers = await getNotionUsers();
  const slackUsers = await getSlackUsers();

  // const usersArr: User[] = [];

  slackUsers.forEach((element) => {
      console.log(
        `realname: ${element.real_name}, email: ${element.profile.email}, phone:${element.profile.phone}`,
      );
      // usersArr.push(element);
  });

  let retrieveUsers: User[] = [];
  //tasks.forEach(task => {
  //});
  slackUsers.forEach((user) => {
    if (
      task.assignee.replace("@", "").replace(".", " ").toLowerCase() ===
      user.name ? user.name.replace("@", "").toLowerCase() : "NO NAME"
    ) {
      console.log("Found Matching user", user);
      retrieveUsers.push(user);
    }
  });
  notionUsers.forEach((person) => {
    if (task.assignee.replace("@", "").replace(".", " ").toLowerCase() === person.name.replace("@", "").toLowerCase()) {
      //   console.log("Matching Person", person);
      retrieveUsers.push(person);
    }
  });

  let userParseResult = { found: false };
  switch (retrieveUsers.length) {
    case 0:
      console.log(
        "No Match, use ai? search substring?",
        JSON.stringify(retrieveUsers),
      );
      /**
       * search using substring
       *
       * slackUsers.forEach((user) => {
       *   if (task.assignee.replace("@", "").includes(user.name.replace("@", "")) || user.name.replace("@", "").includes(task.assignee.replace("@", ""))) {
       *     console.log("Found Matching user", user);
       *     retrieveUsers.push(user);
       *   }
       * });
       * notionUsers.forEach((user) => {
       *   if (task.assignee.replace("@", "").includes(user.name.replace("@", "")) || user.name.replace("@", "").includes(task.assignee.replace("@", ""))) {
       *     console.log("Found Matching user", user);
       *     retrieveUsers.push(user);
       *   }
       * });
       *
       * retrieveUsers.length === 1
       *   ? console.log("found using substring") userParseResult = retrieveUsers[0]
       *   : console.log("Not found even with substring");
       */
      userParseResult = await searchUser(task, retrieveUsers);
       /**
	* if(!userParseResult.found || userParseResult.multiple)
	*
	*/
      console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
      if (userParseResult.found === false) {
        console.log("Not found use as-is");
      }
      break;
    case 1:
      // only one source for exact match
      console.log("Exact Match, use searcRes[0]");
      userParseResult = retrieveUsers[0];
      retrieveUsers.email
	? console.log(' e')
	: task.email = retrieveUsers.email
      retrieveUsers.phonenumber
	? console.log(' p') 
	: task.phonenumber = retrieveUsers.phonenumber
      break;
    case 2:
      // notion and slack exact match
      if (retrieveUsers[0].source !== retrieveUsers[1].source) {
        retrieveUsers[0].source === "notion"
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


/**
 * function to decide on how the number of user
 * @param: retrievedUser - the array of users found in Notion and/or Slack
 * @param: task - task to match against?
 */
export async function matchResultCheck(retrievedUsers: User[], task: Task) {
  let userParseResult;
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
      userParseResult = retrievedUsers[0];
      break;
    case 2:
      // notion and slack exact match
      if (retrievedUsers[0].source !== retrievedUsers[1].source) {
        retrievedUsers[0].source === "slack"
          ? (userParseResult = retrievedUsers[0])
          : (userParseResult = retrievedUsers[1]);
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
