//import dotenv from "dotenv";
import { getNotionUsers } from "./getNotionUsers.js";
import { getSlackUsers } from "./getUsers.js";
import { searchUser } from "./searchUserAi.js";
//dotenv.config();
//import { notionUsers, slackUsers } from "../../storage/users.js";

//const notionUsers = ;
//const slackUsers = ;
const sampleUser = [
  {
    assignee: "@Gladys",
    phone: "+2984783493434",
    email: "gladys@gmail.com",
  },
  {
    assignee: "brain",
    phone: "+5298477203434",
    email: "brialliantb@yahool.com",
  },
  {
    assignee: "@Ceci Drlak",
    phone: "+12984783434",
    email: "@cecidk@sonal.com"
  },
  {
    assignee: "Cecilia Omondi",
    phone: "32",
    email: "ceciliaomosh@yahoo.com"
  },
  {
    assignee: "Bobby",
    phone: "303948625",
    email: "bobbybrown@outlook.com"
  },
];

export const getMatchingUser = async function (task) {
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
  //console.log(usersArr, notionUsers);

  let retrieveUsers = [];
  //tasks.forEach(task => {
  //});
  usersArr.forEach((user) => {
    if (task.assignee.replace("@", "") === user.name.replace("@", "")) {
      console.log("Found Matching user", user);
      retrieveUsers.push(user);
    }
  });
  /**
  notionUsers.forEach((person) => {
    if (task.assignee.replace("@", "") === person.name.replace("@", "")) {
      //   console.log("Matching Person", person);
      retrieveUsers.push(person);
    }
  });
  */

  let userParseResult;
  switch (retrieveUsers.length) {
    case 0:
      console.log("No Match, use ai? search substring?", JSON.stringify(retrieveUsers));
      userParseResult = await searchUser(task, retrieveUsers);
      /**
       * usersArr.forEach((user) => {
       *   if (task.assignee.replace("@", "").includes(user.name.replace("@", ""))) {
       *     console.log("Found Matching user", user);
       *     retrieveUsers.push(user);
       *   }
       * });
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
      break;
    case 2:
      // notion and slack exact match
      if (retrieveUsers[0].source !== retrieveUsers[1].source) {
        retrieveUsers[0].source === "slack"
          ? userParseResult = retrieveUsers[0]
          : userParseResult = retrieveUsers[1];
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
getMatchingUser(sampleUser[0]);
