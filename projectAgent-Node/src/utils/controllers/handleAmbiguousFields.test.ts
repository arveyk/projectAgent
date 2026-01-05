import { createNewTaskBlock } from "./createNewTaskBlock";
import {
  exampleUserSearchResponse,
  exampleUserSearchResponse2,
} from "../../test-data/example-usersearch-response";
import { Task } from "../taskFormatting/task";
const task: Task = {
  taskTitle: "Give estimate of project agent completion date",
  assignees: [
    {
      name: "James Dirksen",
      //"email": "james.dirksen@solutional.com"
    },
  ],
  dueDate: new Date("2025-12-19T14:00:00.000Z"),
  startDate: undefined,
  description: " Give us an estimate of project agent completion date",
  project: "agent",
};

describe("Runs the createNewTaskBlock function", () => {
  it("should print out if the user search attempt has multiple finds", () => {
    const blockObj = createNewTaskBlock(task, exampleUserSearchResponse2);
  });
});
