import axios from "axios";
import { SLACK_BOT_TOKEN } from "../../env.js";
const userID = "U092TCSFAA2";

const getUserUrl = "https://slack.com/api/users.info";

if (!SLACK_BOT_TOKEN) throw new Error("NO API Key given");
axios({
  method: "GET",
  url: getUserUrl,
  data: {
    user: userID
  }, headers: {
    "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
    "Content-type": "application/json; charset=UTF-8"
  }, family: 4
}).then((response) => {
  console.log(response)
});
