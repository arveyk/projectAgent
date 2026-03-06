import { NotionUser } from "./userTypes.js";
import { NOTION_API_KEY } from "../../env";
import { Client, ListUsersResponse } from "@notionhq/client";


const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

if (!NOTION_API_KEY) throw new Error("No Notion API Key given");

/**
 * Function to get Notion users
 * @param alreadyFetchedUsers Users already fetched from Notion
 * @return: Array of NotionUser objects
 */
export async function getNotionUsers(alreadyFetchedUsers: ListUsersResponse | null) {
  const notionResponse = alreadyFetchedUsers? alreadyFetchedUsers : await notion.users.list({});
  console.log("Logging results in getNotionUser", notionResponse.results.length);

  const humanUsers: NotionUser[] = notionResponse.results.filter((member) => {
    return member.type === "person";
  }).map((humanMembers) => {
    return {
      userId: humanMembers.id,
      name: humanMembers.name ? humanMembers.name : "",
      email: humanMembers.person.email
    }
  })
  
  console.log(`Number of human Users", ${humanUsers.length}
    First user: ${JSON.stringify(humanUsers[0], null, 2)}, \nLast user: ${JSON.stringify(
      humanUsers[humanUsers.length - 1], null, 2
    )}`
  );
  return humanUsers;
}
