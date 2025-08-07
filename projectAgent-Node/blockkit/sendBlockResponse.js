import axios from "axios";
import { ALL_SLN_WEBHOOK_URL } from "../env.js";
import { createEditBlock } from "./editblock.js";

console.log(ALL_SLN_WEBHOOK_URL);
//task management webhook url
//
const task = {
  tasktitle: "End of Hamas and rescue hostages",
  assignee: "Benjamin Noah",
  duedate: "7-11-2027",
  startdate: "1-11-2027",
  email: "replace@soon.com",
  phonenumber: "43-335-344-4344",
  preferredchannel: "Call, email",
  taskdetail:
    "Benjamin Noah, draw for us a strategy for ending this war, many innocents are dying, especially on our side. What ever it takes, we must take them down and rescue our people",
};
const blocks_01 = createEditBlock(task);

axios({
  method: "post",
  url: ALL_SLN_WEBHOOK_URL,
  data: {
    text: "Message testing block",
    blocks: blocks_01.blocks,
  },
}).then((response) => {
  console.log(response);
});
