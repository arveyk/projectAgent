import axios from "axios";
import { ALL_SLN_WEBHOOK_URL } from "../env";

import { createBlockNewTask } from "./createBlocks";
// import { createConfirmationBlock } from "./createBlocks";

import { createFinalBlock } from "./editblock";
import { createUpdateBlock } from "./updateBlock";
import { Task, TaskPage } from "../utils/task";

/*type Task = {
  tasktitle: string;
  assignee: string;
  duedate: string;
  startdate: string;
  email: string;
  phonenumber: string;
  preferredchannel: string;
  description: string;
  project: string;
};
*/
const task: TaskPage = {
  task: {
  taskTitle: "End of year Plans",
  assignee: "Benjamin Noah",
  dueDate: new Date("7-11-2027"),
  startDate: new Date("1-11-2027"),
  description:
    "Benjamin, create a routing plan for end of year. As a Company I would like for us to visit one another ang get to know each other",
  project: "Project Agent",
},
pageId: ""
};
const task_b: TaskPage = {
  task: {
  taskTitle: "Add Timothy",
  assignee: " ",
  dueDate: new Date(),
  startDate: new Date("2025-08-07"),
  description: "Add Timothy to an unspecified system or list",
  project: "Project Agent",
},
pageId: ""
};

const blocks_02 = createBlockNewTask(task_b);
//const blocks_05 = createUpdateBlock(task);
//const blocks_03 = createConfirmationBlock(task);
const blocks_04 = createFinalBlock(task);
//let taskDetailsObj = JSON.parse(blocks["actions"][0]["value"]);

if (blocks_02.blocks[3].elements) {
  const blocks_11 = createFinalBlock(
    JSON.parse(blocks_02.blocks[3].elements[0].value),
  );
}
/*const blocks_12 = createEditBlock(
  JSON.parse(blocks_02.blocks[3].elements[0].value),
);
const blocks_13 = createFinalBlock(
  JSON.parse(blocks_12.blocks[12].elements[0].value),
);

const blocks_14 = createEditBlock(
  JSON.parse(blocks_05.blocks[2].elements[1].value),
);
const blocks_15 = createFinalBlock(
  JSON.parse(blocks_14.blocks[12].elements[0].value),
);
*/

axios({
  method: "post",
  url: ALL_SLN_WEBHOOK_URL,
  data: {
    text: "Message testing block",
    //blocks: blocks_05.blocks,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: ":x: *Unable to Update Entry*",
        },
      },
    ],
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
