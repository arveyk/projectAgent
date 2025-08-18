import { SLACK_BOT_TOKEN } from "../../env.js";
import axios from 'axios';


const listURL = "https://slack.com/api/users.list";

const slackResp = await axios.get(listURL, {
  headers: {
    "Content-Type": "application/json charset=utf-8",
    "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
  },
   family: 4
});

const membersArray = slackResp.data.members;

membersArray.forEach((element) => {
  console.log(`realname: ${element.real_name}, email: ${element.profile.email}, phone:${element.profile.phone}`);
});
