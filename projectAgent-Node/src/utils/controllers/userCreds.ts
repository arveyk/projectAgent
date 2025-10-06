import { Task } from "../task";
import { getNotionUsers } from "./getNotionUsers";
import { getSlackUsers } from "./getUsers";
import { searchUser } from "./searchUserAi";
import { User } from "./someTypes";
import {
  taskHarvey,
  taskSubstr,
  taskSubstr2
} from "../../test-data/tasks/example-tasks";


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
  const notionMatch = {
    count: 0,
    position: 0
  };

  // const usersArr: User[] = [];

  /*slackUsers.forEach((element) => {
    console.log(
      `realname: ${element.name}, email: ${element.email}, phone:${element.phoneNumber}`,
    );
    // usersArr.push(element);
  });
  */

  let retrieveUsers: User[] = [];
  //tasks.forEach(task => {
  //});
  slackUsers.forEach((user) => {
    const userName = user.name
      ? user.name.replace("@", "").toLowerCase()
      : "No Name";
    if (
      task.assignee.replace("@", "").replace(".", " ").toLowerCase() ===
      userName
    ) {
      console.log("Found Matching user", user);
      retrieveUsers.push(user);
    }
  });
  let index = 0;
  notionUsers.forEach((person) => {
    person.name = person.name ? person.name : "No Name";
    if (task.assignee.replace("@", "").replace(".", " ").toLowerCase() === person.name.replace("@", "").toLowerCase()) {
      //   console.log("Matching Person", person);
      retrieveUsers.push(person);
      notionMatch.count += 1
      notionMatch.position = index;
    }
    // console.log("index, position", index, notionMatch.position)
    index += 1
  });

  /*let userParseResult = {
    found: false,
    multipleFound: false,
    name: "",
    email: "",
    phone: ""
  };*/
  let userParseResult;
  switch (retrieveUsers.length) {
    case 0:
      console.log(
        "No Match, use ai? search substring?",
        JSON.stringify(retrieveUsers),
      );
      /* search using substring */
      slackUsers.forEach((user) => {
        user.name = user.name ? user.name : "Nameless";
        if (user.name.toLowerCase().includes(task.assignee.toLowerCase()))
          console.log(user.name, task.assignee);

        // if (task.assignee.toLowerCase().replace("@", "").includes(user.name.toLowerCase().replace("@", "")) || user.name.toLowerCase().replace("@", "").includes(task.assignee.toLowerCase().replace("@", ""))) {
        if (user.name.toLowerCase().replace("@", "").includes(task.assignee.toLowerCase().replace("@", ""))) {

                console.log("Found Matching user", user);
          retrieveUsers.push(user);
        }
      });
      index = 0;
      notionUsers.forEach((user) => {
        console.log("index, position", index, notionMatch.position)
        user.name = user.name ? user.name : "Nameless"
        if (user.name.toLowerCase().includes(task.assignee.toLowerCase())) {
          console.log(user.name, task.assignee);
        }

        // if (task.assignee.toLowerCase().replace("@", "").includes(user.name.toLowerCase().replace("@", "")) || user.name.toLowerCase().replace("@", "").includes(task.assignee.toLowerCase().replace("@", ""))) {
        if (user.name.toLowerCase().replace("@", "").includes(task.assignee.toLowerCase().replace("@", ""))) {

          console.log("Found Matching user", user);
          retrieveUsers.push(user);
          notionMatch.count += 1;
          notionMatch.position = index;
        }
        index += 1
      });
      const retrivedUsersCount = Number(retrieveUsers.length);
      retrivedUsersCount === 1
        ? userParseResult = retrieveUsers[0]
        : console.log("Zero or Multiple found even with Sub-stringing");

      // Check for notion User
      if (notionMatch.count === 1) {
        userParseResult = notionUsers[notionMatch.position]
        console.log("Found", notionMatch.position);
      }
      /*
       *
       const aiSearchResult = await searchUser(task, retrieveUsers);
  * if(!userParseResult.found || userParseResult.multiple)
  *
      console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
      
      if (aiSearchResult.found === false) {
        console.log("Not found use as-is");
      }
  */
      break;
    case 1:
      // only one source for exact match
      console.log("Exact Match, use searcRes[0]");
      userParseResult = retrieveUsers[0];
      userParseResult.email
        ? console.log(' e')
        : task.email = userParseResult.email
      userParseResult.phoneNumber
        ? console.log(' p')
        : task.phoneNumber = retrieveUsers[0].phoneNumber
      break;
    case 2:
      // notion and slack exact match
      if (retrieveUsers[0].source !== retrieveUsers[1].source) {
        retrieveUsers[0].source === "notion"
          ? (userParseResult = retrieveUsers[0])
          : (userParseResult = retrieveUsers[1]);
      }
      break;
    default:
      console.log("Multiple found");
      console.log(notionMatch);
      if (notionMatch.count === 1) {
        userParseResult = retrieveUsers[notionMatch.position - 1]
      }
  }
  console.log(retrieveUsers);
  console.log("UserParseResult", userParseResult);
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
      /**
       * userParseResult = await searchUser(task, retrievedUsers);
      console.log(`User Search result: ${JSON.stringify(userParseResult)}`);
      if (userParseResult.found === false) {
        console.log("Not found use as-is");
        userParseResult = task;
      }*/
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
      break;
      */
  }
}
// getMatchingUser(taskHarvey);
