import { NotionUser } from "./userTypes.js";
import { ListUsersResponse } from "@notionhq/client/build/src/api-endpoints.js";
import { NOTION_API_KEY } from "../../env";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

if (!NOTION_API_KEY) throw new Error("No Notion API Key given");

/**
 * Function to get Notion users
 * @param: none
 * @return: Array of NotionUser objects
 */
export async function getNotionUsers() {
  const humanUsers: NotionUser[] = [];

  const notionResp = await notion.users.list({});
  // console.log("Logging  in getNotionUser", notionResp);

  notionResp.results.forEach((user) => {
    if (user.type === "person") {
      humanUsers.push({
        userId: user.id,
        name: user.name ? user.name : "",
        email: user.person.email,
      });
    }
  });
  console.log(JSON.stringify(humanUsers));
  return humanUsers;
};
