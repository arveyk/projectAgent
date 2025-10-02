import axios from "axios";
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
  console.log(NOTION_API_KEY);
  const notionUsers: ListUsersResponse = await axios.get(
    "https://api.notion.com/v1/users",
    {
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
      },
      family: 4,
    },
  );

  // console.log(notionUsers.data.results);
  // const allUserArray = notionUsers.results;
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
