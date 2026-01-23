import { Task, User } from "../taskFormatting/task";
import { getNotionUsers } from "./getUsersNotion";
import { NotionUser, UserSearchResult } from "./userTypes";

/**
 * Function to identify the assignees of a task using names and emails to search
 * @param task: task to be created that contains the required assignees array
 *
 * @returns     returns the user(s) in Notion (name and email) that match the user details
 *   extracted by the AI. 
 */
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
 * @param slackUsername:  name of user in slack used to search for user/user
 *   in Notion to use as assignee(s)
 * 
 * @returns               Array Notion users that match the slack user with the name
 *   equal to value of slackUsername
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
  //console.log(`Slack name: ${slackUserName}, Notion name: ${notionUserName}`);
  if (slackUserName !== undefined && notionUserName !== undefined) {
    if (
      slackUserName.toLowerCase().replace(".", " ").replace("@", "") ===
      notionUserName.toLowerCase().replace(".", " ").replace("@", "")
    ) {
     // console.log(`Found Matching user, CompareNames Function, ${slackUserName}`);
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
      // console.log(`Found Matching user, CompareEmails Function, ${slackEmail}`);
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
  //console.log(`Slack name: ${slackUserName}, Notion name: ${notionUserName}`);
  if (slackUserName !== undefined && notionUserName !== undefined) {
    if (
      notionUserName
        .toLowerCase()
        .replace("@", "")
        .includes(slackUserName.toLowerCase().replace("@", ""))
    ) {
     // console.log(`Found Matching user, ${notionUserName}`);
      return true;
    } else if (
      slackUserName
        .toLowerCase()
        .replace("@", "")
        .includes(notionUserName.toLowerCase().replace("@", ""))
    ) {
      console.log(`Found Matching user, ${notionUserName}`);
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
 * @param nameMatches:  Users found using name matching logic
 * @param emailMatches: Users found using email matching logic
 *
 * @returns             A single list containing all the unique users from both lists.
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

/**
 *
 * @param slackEmail: The email of the Slack user
 * @param email:      The primary email to match against users in Notion
 *
 * @returns           A list of Notion users that match the email
 */
export async function findMatchingNotionUserByEmail(
  slackEmail: string,
): Promise<NotionUser[]> {
  const allNotionUsers: NotionUser[] = await getNotionUsers();

  let emailMatches: NotionUser[] = [];
  if (slackEmail !== undefined) {
    emailMatches = allNotionUsers.filter((user) => {
      if (user.email !== undefined) {
        return compareEmails(slackEmail, user.email);
      } else {
        return false;
      }
    });
  }

  return emailMatches;
}

/**
 * Function to find the assigner's details from the Notion side
 * @param identifiedAppUser: The assigner(creator) of the new task, inferred from Slack
 * 
 * @returns                  Array containing only the Notion user that matches slack user that is creating the
 *   task. This is what is placed in the assignedBy field in a task
 */
export async function findAssignedBy(identifiedAppUser: User) {
  const matchingNotionUser = await findMatchingNotionUserByEmail(
    identifiedAppUser.email,
  );

  // console.log(
  //  `(findAssignedBy  slackEmail: string,
// y), any found ${identifiedAppUser}, searched id: ${identifiedAppUser.userId}`,
  //  JSON.stringify(matchingNotionUser),
  // );

  return matchingNotionUser;
}
