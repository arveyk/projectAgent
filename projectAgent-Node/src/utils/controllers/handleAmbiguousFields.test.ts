import { createNewTaskBlock } from "../../blockkit/createNewTaskBlock";
import {
  exampleUserSearchResponse2,
} from "../../test-data/example-usersearch-response";

const EXAMPLE_ASSIGNED_BY: NotionUser[] = [
    {
        "userId":"152d872b-594c-8145-9c2c-000204787b69",
        "name":"Ceci Kurdelak",
        "email":"ceci.kurdelak@solutional.com"
    }
]


import { Task } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";
const task: Task = {
  taskTitle: "Give estimate of project agent completion date",
  assignees: [
    {
      name: "James Dirksen",
      "email": "james.dirksen@solutional.com"
    },
  ],
  dueDate: "2025-12-19T14:00:00.000Z",
  startDate: undefined,
  description: " Give us an estimate of project agent completion date",
  project: [{id: "agent"}],
};

describe("Runs the createNewTaskBlock function", () => {
  it("should print out if the user search attempt has multiple finds", () => {
    const blockObj = createNewTaskBlock(EXAMPLE_ASSIGNED_BY, task, exampleUserSearchResponse2);
  });
});
