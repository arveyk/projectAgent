import axios from "axios";
import { ALL_SLN_WEBHOOK_URL } from "../env";
import { createNewTaskBlockWithSelections } from "../blockkit/createBlockPartsForNewTask";
import {
  TaskPage,
} from "../utils/task";
import { exampleUserSearchResponse2 } from "../test-data/example-usersearch-response";
import { createNewTaskBlock } from "../blockkit/createNewTaskBlock";

const task: TaskPage = {
  task: {
    taskTitle: "End of year Plans",
    assignees: [
      {
        name: "Benjamin Noah",
        email: "smoothbenja@gmail.com",
        userId: "U08UDKY38QK",
      },
    ],
    assignedBy: [
      {
        name: "Benjamin Noah",
        email: "slybenja@gmail.com",
        userId: "U08UDKY38QK",
      },
    ],

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

// selection block new layout
const columnLayoutWithSelections = createNewTaskBlockWithSelections(
  task_b.task,
  "Notion Users",
  {
    identifiedUsers: [
      {
        userId: "152d872b-594c-8145-9c2c-000204787b69",
        name: "Ceci Kurdelak",
        email: "ceci.kurdelak@solutional.com",
      },
    ],
    ambiguousUsers: [
      {
        userId: "136d872b-594c-817b-adaa-00026796be69",
        name: "James Dirksen",
        email: "james.dirksen@solutional.com",
      },
      {
        userId: "13dd872b-594c-810f-8bb4-000282e27820",
        name: "Daniel Dirksen",
        email: "daniel.dirksen@solutional.com",
      },
    ],
  },
);

const blockSelectOrNoSelect = createNewTaskBlock(task.task, [
  exampleUserSearchResponse2[1],
]);

axios({
  method: "post",
  url: ALL_SLN_WEBHOOK_URL,
  data: {
    text: "Message testing block",
    blocks: blockSelectOrNoSelect.blocks,
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
