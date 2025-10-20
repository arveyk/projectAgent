import { Task } from "../task";
import { getNotionUsers } from "./getUsersNotion";
import { NotionUser, UserSearchResult } from "./userTypes";

export async function findMatchingAssignees(
  task: Task,
): Promise<UserSearchResult[]> {
  const assignees = task.assignees;
  const matches = Promise.all(
    assignees.map(async (assignee) => {
      const match: UserSearchResult = {
        person: assignee,
        foundUsers: await findMatchingNotionUser(assignee.name, assignee.email),
      };
      return match;
    }),
  );

  return matches;
}

/**
 * Finds a Notion user matching the Slack user who assigned the given task.
 * @param slackUsername
 */
export async function findMatchingNotionUser(
  slackUsername: string,
  email?: string,
): Promise<NotionUser[]> {
  const allNotionUsers: NotionUser[] = await getNotionUsers();

  let emailMatches: NotionUser[] = [];
  if (email !== undefined) {
    emailMatches = allNotionUsers.filter((user) => {
      if (user.email !== undefined) {
        return compareEmails(email, user.email);
      } else {
        return false;
      }
    });
  }

  const nameMatches = allNotionUsers.filter((user) => {
    return compareNames(slackUsername, user.name);
  });
  if (nameMatches.length < 1) {
    console.log("No match, now searching by substring:");
    /* search using substring */
    const partialNameMatches = allNotionUsers.filter((user) => {
      return isPartialNameMatch(slackUsername, user.name);
    });
    return deduplicateUsers(partialNameMatches, emailMatches);
  } else {
    return deduplicateUsers(nameMatches, emailMatches);
  }
}

/**
 * Compares the name of a Slack user with the name of a Notion user.
 * @param slackUserName
 * @param notionUserName
 * @returns True if the names match, else returns false.
 */
export function compareNames(
  slackUserName: string,
  notionUserName: string,
): boolean {
  console.log(`Slack name: ${slackUserName}, Notion name: ${notionUserName}`);
  if (slackUserName !== undefined && notionUserName !== undefined) {
    if (
      slackUserName.toLowerCase().replace(".", " ").replace("@", "") ===
      notionUserName.toLowerCase().replace(".", " ").replace("@", "")
    ) {
      console.log("Found Matching user, CompareNames Function", slackUserName);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * Compares the email of a Slack user with the email of a Notion user.
 * @param slackEmail
 * @param notionEmail
 * @returns True if the emails match, else returns false.
 */
export function compareEmails(
  slackEmail: string,
  notionEmail: string,
): boolean {
  if (slackEmail !== undefined && notionEmail !== undefined) {
    if (slackEmail === notionEmail) {
      console.log("Found Matching user, CompareEmails Function", slackEmail);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * Determines if the name of a Slack user and the name of a Notion user are partial matches.
 * @param slackUserName
 * @param notionUserName
 * @returns True if the names are partial matches, else returns false.
 */
export function isPartialNameMatch(
  slackUserName: string,
  notionUserName: string,
): boolean {
  console.log(`Slack name: ${slackUserName}, Notion name: ${notionUserName}`);
  if (slackUserName !== undefined && notionUserName !== undefined) {
    if (
      notionUserName
        .toLowerCase()
        .replace("@", "")
        .includes(slackUserName.toLowerCase().replace("@", ""))
    ) {
      console.log("Found Matching user", notionUserName);
      return true;
    } else if (
      slackUserName
        .toLowerCase()
        .replace("@", "")
        .includes(notionUserName.toLowerCase().replace("@", ""))
    ) {
      console.log("Found Matching user", notionUserName);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * Concatenates name matches and email matches into a single array, and removes all duplicates.
 * @param nameMatches
 * @param emailMatches
 * @returns A single list containing all the unique users from both lists.
 */
export function deduplicateUsers(
  nameMatches: NotionUser[],
  emailMatches: NotionUser[],
): NotionUser[] {
  const uniqueIds: string[] = [];
  const uniqueUsers: NotionUser[] = nameMatches
    .concat(emailMatches)
    .filter((user) => {
      if (!uniqueIds.includes(user.userId)) {
        uniqueIds.push(user.userId);
        return true;
      } else {
        return false;
      }
    });

  return uniqueUsers;
}
