import axios from "axios";
import dotenv from "dotenv";
import { NOTION_API_KEY } from "../../env.js";

export const getNotionUsers = async function () {
  console.log(NOTION_API_KEY);
  const notionUsers = await axios.get("https://api.notion.com/v1/users", {
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
    },
    family: 4,
  });

  //console.log(notionUsers.data.results);
  const allUserArray = notionUsers.data.results;
  const humanUsers = [];
  allUserArray.forEach((user) => {
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
//getNotionUsers();
