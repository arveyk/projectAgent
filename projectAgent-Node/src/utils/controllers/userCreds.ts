import { Task } from "../task";
import { getNotionUsers } from "./getNotionUsers";
import { getSlackUsers } from "./getUsers";
import { searchUser } from "./searchUserAi";
import { User } from "./someTypes";
import {
  taskHarvey,
  task_feed_cats,
  task_unknown_fields,
  taskGood,
  taskInferDates,
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
export const getMatchingUser = async function (task: Task): Promise<User | undefined> {
  //Change function name to getUserInChannel
  const notionUsers = await getNotionUsers();
  const slackUsers = await getSlackUsers();
  const notionMatch = {
    count: 0,
    position: 0
  };

  let retrieveUsers: User[] = [];
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
      retrieveUsers.push(person);
      notionMatch.count += 1
      notionMatch.position = index;
    }
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

  // matchResultCheck(notionMatch, notionUsers, retrieveUsers, slackUsers, task, userParseResult);
  switch (retrieveUsers.length) {
    case 0:
      console.log(
        "No Match, use ai? search substring?",
        JSON.stringify(retrieveUsers),
      );
      /* search using substring */
      slackUsers.forEach((user) => {
        user.name = user.name ? user.name : "Nameless";

        if (user.name.toLowerCase().replace("@", "").includes(task.assignee.toLowerCase().replace("@", ""))) {

          console.log("Found Matching user", user);
          retrieveUsers.push(user);
        }
      });
      index = 0;
      notionUsers.forEach((user) => {
        user.name = user.name ? user.name : "Nameless"
        if (compareNames(user.name, task.assignee)) {
          console.log(user.name, task.assignee);
        }

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
  console.log("2nd Last", retrieveUsers);
  console.log("UserParseResult", userParseResult);
  return userParseResult;
};

/**
 * compareNames - function to compare two names
 *
 * @param: name1 - first name to compare
 * @param: name2 - second name to compare
 * @Returns: boolean indicating if names match
 */
function compareNames(nameOfUser: string, assigneeName: string): boolean {
  if (nameOfUser.toLowerCase().replace("@", "").includes(assigneeName.toLowerCase().replace("@", ""))) {
    console.log("Found Matching user, CompareNames Function", nameOfUser);
    return true;
  } return false;
}
// getMatchingUser(task_feed_cats);
