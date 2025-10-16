import { Task } from "../task";
import { getNotionUsers } from "./getUsersNotion";
import { NotionUser, SlackUser } from "./userTypes";

export async function findMatchingAssignees(task: Task) {
  const notionUsers = await getNotionUsers();
  // TODO find matching names
  // TODO find matching emails
  // TODO remove duplicates
}

/**
 * Finds a Notion user matching the Slack user who assigned the given task.
 * @param slackUsername
 */
export async function findMatchingAssigner(slackUsername: string) {
  const allNotionUsers: NotionUser[] = await getNotionUsers();
  const nameMatches = allNotionUsers.filter((user) => {
    return compareNames(slackUsername, user.name);
  })
  if (nameMatches.length < 1) {
    console.log(
      "No match, now searching by substring:",
    );
    /* search using substring */
    const partialNameMatches = allNotionUsers.filter((user) => {
      return isPartialNameMatch(slackUsername, user.name);
    })
    return partialNameMatches;
  }
  else {
    return nameMatches;
  }

}

/**
 * Compares the name of a Slack user with the name of a Notion user.
 * @param slackUserName 
 * @param notionUserName 
 * @returns True if the names match, else returns false.
 */
export function compareNames(slackUserName: string, notionUserName: string): boolean {
  console.log(`Slack name: ${slackUserName}, Notion name: ${notionUserName}`);
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

export function compareEmails(slackEmail: string, notionEmail: string): boolean {
  if (slackEmail === notionEmail) {
    console.log("Found Matching user, CompareEmails Function", slackEmail);
    return true;
  }
  else {
    return false;
  }
}

export function isPartialNameMatch(slackUserName: string, notionUserName: string): boolean {
  console.log(`Slack name: ${slackUserName}, Notion name: ${notionUserName}`);
  if (notionUserName.toLowerCase()
      .replace("@", "")
      .includes(slackUserName.toLowerCase().replace("@", ""))
  ) {
    console.log("Found Matching user", notionUserName);
    return true;
  }
  else if (slackUserName.toLowerCase()
    .replace("@", "")
    .includes(notionUserName.toLowerCase().replace("@", ""))
  ) {
    console.log("Found Matching user", notionUserName);
    return true;
  }
  else {
    return false;
  }
}

