import { User } from "./someTypes.js";
import { ListUsersResponse } from "@notionhq/client/build/src/api-endpoints.js";
import { NOTION_API_KEY } from "../../env.js";
import { Client} from "@notionhq/client";

const notion = new Client({
  auth: NOTION_API_KEY,
});

if (!NOTION_API_KEY) throw new Error("No Notion API Key given");

// Function to get Notion users
export const getNotionUsers = async function () {
  const humanUsers: User[] = [];
  
  const notionResp = await notion.users.list({});
  console.log("Logging  in getNotionUsere", notionResp);

  notionResp.results.forEach((user) => {
    if (user.type === "person") {
      humanUsers.push({
        source: "notion",
        name: user.name,
        email: user.person.email,
      });
    }
  });
  console.log(JSON.stringify(humanUsers));
  return humanUsers;
};
getNotionUsers();
