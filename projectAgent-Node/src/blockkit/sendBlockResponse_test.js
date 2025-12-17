"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var env_1 = require("../env");
var createBlocks_1 = require("./createBlocks");
// import { createConfirmationBlock } from "./createBlocks";
var columnLayoutBlock_1 = require("./columnLayoutBlock");
var editblock_1 = require("./editblock");
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
var task = {
    task: {
        taskTitle: "End of year Plans",
        assignees: [{ name: "Benjamin Noah", email: "", userId: "U08UDKY38QK" }],
        assignedBy: [{ name: "Benjamin Noah", email: "", userId: "U08UDKY38QK" }],
        dueDate: new Date("7-11-2027"),
        startDate: new Date("1-11-2027"),
        description: "Benjamin, create a routing plan for end of year. As a Company I would like for us to visit one another ang get to know each other",
        project: "Project Agent",
    },
    pageId: "",
};
var task_b = {
    task: {
        taskTitle: "Add Timothy",
        assignees: [{ name: "asas", email: "", userId: "U08UDKY38QK" }],
        assignedBy: [{ name: "asas", email: "", userId: "U08UDKY38QK" }],
        dueDate: new Date(),
        startDate: new Date("2025-08-07"),
        description: "Add Timothy to an unspecified system or list",
        project: "Project Agent",
    },
    pageId: "",
};
var blocks_02 = (0, createBlocks_1.createBlockNewTask)(task_b);
//const blocks_05 = createUpdateBlock(task);
//const blocks_03 = createConfirmationBlock(task);
var blocks_04 = (0, editblock_1.createFinalBlock)(task);
var columnLayoutBlock = (0, columnLayoutBlock_1.createColumnLayoutBlockNewTask)(task);
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
(0, axios_1.default)({
    method: "post",
    url: env_1.ALL_SLN_WEBHOOK_URL,
    data: {
        text: "Message testing block",
        //blocks: blocks_05.blocks,
        blocks: columnLayoutBlock,
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
    .then(function (response) {
    console.log(response);
})
    .catch(function (error) {
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
