import axios from "axios";
import { ALL_SLN_WEBHOOK_URL } from "../env.js";
import { createEditBlock } from "./editblock.js";
import { createBlockNewTask } from "./createBlocks.js";

const task = {
  tasktitle: "End of year Plans",
  assignee: "Benjamin Noah",
  duedate: "7-11-2027",
  startdate: "1-11-2027",
  email1: "replace@soon.com",
  phonenumber: "43-335-344-4344",
  preferredchannel: "Call, email",
  taskdetail:
    "Benjamin, create a routing plan for end of year. As a Company I would like for us to visit one another ang get to know each other",
  project: "Project Agent",
};
const task_b = {
  tasktitle: "Add Timothy",
  assignee: " ",
  duedate: " ",
  startdate: "2025-08-07",
  phonenumber: " ",
  email: " ",
  preferredchannel: " ",
  taskdetail: "Add Timothy to an unspecified system or list",
  project: "Project Agent",
};

const blocks_01 = createEditBlock(task);
const blocks_02 = createBlockNewTask(task_b);

axios({
  method: "post",
  url: ALL_SLN_WEBHOOK_URL,
  data: {
    text: "Message testing block",
    blocks: blocks_02.blocks,
  },
  headers: {
    "Content-Type": "application/json",
  },
  family: 4,
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
/*
axios({
  method: "post",
  url: ALL_SLN_WEBHOOK_URL,
  data: {
    text: "Message testing block",
    blocks: blocks_02.blocks,
  },
}).then((response) => {
  console.log(response);
});*/
