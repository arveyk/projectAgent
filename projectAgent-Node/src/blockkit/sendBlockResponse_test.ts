import axios from "axios";
import { ALL_SLN_WEBHOOK_URL } from "../env";

import { createBlockNewTask } from "./createBlocks";
// import { createConfirmationBlock } from "./createBlocks";
import { createNewTaskBlockWithoutSelections } from "./columnLayoutBlock";
import { createNewTaskBlockWithSelections } from "./createNewTaskBlock";
import { createFinalBlock } from "./editblock";
import { createUpdateBlock } from "./updateBlock";
import { Task, TaskPage } from "../utils/task";
import { exampleUserSearchResponse2 } from "../test-data/example-usersearch-response";
import { createNewTaskBlock } from "../utils/controllers/createNewTaskBlock";


const task: TaskPage = {
  task: {
    taskTitle: "End of year Plans",
    assignees: [{ name: "Benjamin Noah", email: "smoothbenja@gmail.com", userId: "U08UDKY38QK" }],
    assignedBy: [{ name: "Benjamin Noah", email: "slybenja@gmail.com", userId: "U08UDKY38QK" }],

    dueDate: new Date("7-11-2027"),
    startDate: new Date("1-11-2027"),
    description:
      "Benjamin, create a routing plan for end of year. As a Company I would like for us to visit one another and get to know each other",
    project: "Project Agent",
  },
  pageId: "",
};
const task_b: TaskPage = {
  task: {
    taskTitle: "Add Timothy",
    assignees: [{ name: "Small Bro", email: "", userId: "U08UDKY38QK" }],
    assignedBy: [{ name: "Bro CEO", email: "", userId: "U08UDKY38QK" }],
    dueDate: new Date(),
    startDate: new Date("2025-08-07"),
    description: "Add Timothy to an unspecified system or list",
    project: "Project Agent",
  },
  pageId: "",
};

const blocks_02 = createBlockNewTask(task_b);
//const blocks_05 = createUpdateBlock(task);
//const blocks_03 = createConfirmationBlock(task);
const blocks_04 = createFinalBlock(task);
const columnLayoutBlock = createNewTaskBlockWithoutSelections(task);

// selection block new layout
const columnLayoutWithSelections = createNewTaskBlockWithSelections(
  task_b.task,
  "Notion Users",
  {
    identifiedUsers: [
      {
        "userId": "152d872b-594c-8145-9c2c-000204787b69",
        "name": "Ceci Kurdelak",
        "email": "ceci.kurdelak@solutional.com"
      }
    ],
    ambiguousUsers: [
      {
        "userId": "136d872b-594c-817b-adaa-00026796be69",
        "name": "James Dirksen",
        "email": "james.dirksen@solutional.com"
      },
      {
        "userId": "13dd872b-594c-810f-8bb4-000282e27820",
        "name": "Daniel Dirksen",
        "email": "daniel.dirksen@solutional.com"
      }
    ]
  }
);

const blockSelectOrNoSelect = createNewTaskBlock(
  task.task,
  [exampleUserSearchResponse2[1]]
);
//let taskDetailsObj = JSON.parse(blocks["actions"][0]["value"]);

/*if (blocks_02.blocks[3].elements) {
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
    // blocks: columnLayoutBlock.blocks,
    // blocks: columnLayoutWithSelections.blocks
    blocks: blockSelectOrNoSelect.blocks
    /*blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: ":x: *Unable to Update Entry*",
        },
      },
    ],*/
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
