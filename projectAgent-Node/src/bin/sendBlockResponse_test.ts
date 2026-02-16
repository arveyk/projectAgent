import axios from "axios";
import { ALL_SLN_WEBHOOK_URL } from "../env";
import { createNewTaskBlockWithUserAndOrProjectsSelections } from "../blockkit/createBlockPartsForNewTask";
import { ProjectWithName, TaskPage } from "../utils/taskFormatting/task";
import { exampleUserSearchResponse2 } from "../test-data/example-usersearch-response";
import { createNewTaskBlock } from "../blockkit/createNewTaskBlock";
import { NotionUser } from "../utils/controllers/userTypes";

const EXAMPLE_ASSIGNED_BY: NotionUser[] = [
  {
    userId: "136dsg2b-594c-817b-adaa-000l3lf9e69",
    name: "James Bond",
    email: "james.bond@example-domain.com",
  },
];

const EXAMPLE_PROJECTS_FROM_NOTION: ProjectWithName[] = [
  { projectName: "AssignedBy Harv Example", id: "doisicwu93f434f3" },
  { projectName: "AssignedBy Cece Example", id: "dwemcb87g4g3ns8g" },
  { projectName: "Angle", id: "dvalknvonierngxn" },
  { projectName: "Chessel", id: "m, nareu7924rnf8sdcLUHDH" },
  { projectName: "Prject Agent", id: "mdio0920OIJNSIUudiew" },
];

const task: TaskPage = {
  task: {
    taskTitle: "End of year Plans",
    assignees: [
      {
        name: "Benjamin Noah",
        email: "smoothbenja@example-mail.com",
        userId: "U08UDKY38QK",
      },
    ],
    assignedBy: [
      {
        name: "Benjamin Noah",
        email: "slybenja@example-mail.com",
        userId: "U08UDKY38QK",
      },
    ],

    dueDate: new Date("7-11-2027").toISOString(),
    startDate: new Date("1-11-2027").toISOString(),
    description:
      "Benjamin, create a routing plan for end of year. As a Company I would like for us to visit one another and get to know each other",
    project: [{ id: "Project Agent" }],
  },
  pageId: "",
};
const task_b: TaskPage = {
  task: {
    taskTitle: "Add Timothy",
    assignees: [{ name: "Small Bro", email: "", userId: "U08UDKY38QK" }],
    assignedBy: [{ name: "Bro CEO", email: "", userId: "U08UDKY38QK" }],
    dueDate: new Date().toISOString(),
    startDate: new Date("2025-08-07").toISOString(),
    description: "Add Timothy to an unspecified system or list",
    project: [{ id: "ewni8984fjdskn" }],
  },
  pageId: "",
};

// selection block new layout
const columnLayoutWithSelections =
  createNewTaskBlockWithUserAndOrProjectsSelections(
    task_b.task,
    EXAMPLE_PROJECTS_FROM_NOTION,
    {
      identifiedUsers: [
        {
          userId: "152d872b-594c-8145-9c2c-000204787b69",
          name: "Chimera Tabitha",
          email: "chimera.tabitha@example-domain.com",
        },
      ],
      ambiguousUsers: [
        {
          userId: "136d872b-594c-817b-adaa-00026796be69",
          name: "James Bond",
          email: "james.bond@example-domain.com",
        },
        {
          userId: "13dd872b-594c-810f-8bb4-000282e27820",
          name: "Belteshazar Dan",
          email: "belteshazar.dan@example-domain.com",
        },
      ],
    },
  );

const blockSelectOrNoSelect = await createNewTaskBlock(
  EXAMPLE_ASSIGNED_BY,
  task.task,
  [exampleUserSearchResponse2[1]],
);

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
