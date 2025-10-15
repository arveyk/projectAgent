import { Task } from "../task";
import { getNotionUsers } from "./getUsersNotion";
import { getSlackUsers } from "./getUsersSlack";
import { NotionUser, SlackUser } from "./someTypes";

/**
 * getUserInChannel - function to check for a user with matching credentials
 *  existing in Slack channel
 *
 * @param: task - object constaining task fields including assignee
 * @Returns: resulting matching user
 */
export const getMatchingUser = async function (
  task: Task,
): Promise<SlackUser | undefined> {
  //Change function name to getUserInChannel
  const notionUsers = await getNotionUsers();
  const slackUsers = await getSlackUsers();
  const notionMatch = {
    count: 0,
    position: 0,
  };

  let matchingNotionUsers: NotionUser[] = [];
  slackUsers.forEach((user) => {
    const SlackUsername = user.name
      ? user.name.replace("@", "").toLowerCase()
      : "No Name";

    if (
      task.assignees.replace("@", "").replace(".", " ").toLowerCase() ===
      SlackUsername
    ) {
      console.log("Found Matching user", user);
      matchingNotionUsers.push(user);
    }
  });
  let index = 0;
  notionUsers.forEach((person) => {
    person.name = person.name ? person.name : "No Name";
    // if (task.assignee.replace("@", "").replace(".", " ").toLowerCase() === person.name.replace("@", "").toLowerCase()) {
    if (compareNames(task.assignees, person.name)) {
      matchingNotionUsers.push(person);
      notionMatch.count += 1;
      notionMatch.position = index;
    }
    index += 1;
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
  switch (matchingNotionUsers.length) {
    case 0:
      console.log(
        "No Match, use ai? search substring?",
        JSON.stringify(matchingNotionUsers),
      );
      /* search using substring */
      slackUsers.forEach((user) => {
        user.name = user.name ? user.name : "Nameless";

        if (
          user.name
            .toLowerCase()
            .replace("@", "")
            .includes(task.assignees.toLowerCase().replace("@", ""))
        ) {
          console.log("Found Matching user", user);
          matchingNotionUsers.push(user);
        }
      });
      index = 0;
      notionUsers.forEach((user) => {
        user.name = user.name ? user.name : "Nameless";
        if (compareNames(user.name, task.assignees)) {
          console.log(user.name, task.assignees);
        }

        if (
          user.name
            .toLowerCase()
            .replace("@", "")
            .includes(task.assignees.toLowerCase().replace("@", ""))
        ) {
          console.log("Found Matching user", user);
          matchingNotionUsers.push(user);
          notionMatch.count += 1;
          notionMatch.position = index;
        }
        index += 1;
      });
      const retrivedUsersCount = Number(matchingNotionUsers.length);
      if (retrivedUsersCount === 1) {
        userParseResult = matchingNotionUsers[0];

        console.log("Found with Sub-stringing", matchingNotionUsers[0]);
        task.assignees = matchingNotionUsers[0].name
          ? matchingNotionUsers[0].name
          : task.assignees;
      } else {
        console.log("Zero or Multiple found even with Sub-stringing");
      }
      // Check for notion User
      if (notionMatch.count === 1) {
        userParseResult = notionUsers[notionMatch.position];

        task.assignees = userParseResult.name || task.assignees;
        console.log("Found", notionMatch.position);
      }
      break;
    case 1:
      // only one source for exact match
      console.log("Exact Match, use searcRes[0]");
      userParseResult = matchingNotionUsers[0];
      break;
    case 2:
      // notion and slack exact match
      if (matchingNotionUsers[0].source !== matchingNotionUsers[1].source) {
        matchingNotionUsers[0].source === "notion"
          ? (userParseResult = matchingNotionUsers[0])
          : (userParseResult = matchingNotionUsers[1]);
      }
      break;
    default:
      console.log("Multiple found");
      console.log(notionMatch);
      if (notionMatch.count === 1) {
        userParseResult = notionUsers[notionMatch.position];
      }
  }
  console.log("2nd Last", matchingNotionUsers);
  console.log("UserParseResult", userParseResult);
  return userParseResult;
};

/**
 * Compares the name of a Slack user with the name of a Notion user.
 * @param slackUserName 
 * @param notionUserName 
 * @returns True if the names match, else returns false.
 */
function compareNames(slackUserName: string, notionUserName: string): boolean {
  if (
    slackUserName.toLowerCase().replace("@", "") ===
    notionUserName.toLowerCase().replace(".", " ").replace("@", "")
  ) {
    console.log("Found Matching user, CompareNames Function", slackUserName);
    return true;
  }
  else {
    return false;
  }
}
