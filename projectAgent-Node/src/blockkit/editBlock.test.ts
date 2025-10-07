import { createTaskInfoBlock } from "./editblock";
import { task } from "../test-data/tasks/example-tasks";
import { ta } from "zod/dist/types/v4/locales";
import { Task } from "../utils/task";
import { DateTime } from "luxon";

const taskKitchen: Task = {
  taskTitle: "Fix plumbing issue in second floor kitchen",
  assignee: "Jeremy",
  dueDate: DateTime.fromMillis(1759852422989)
    .setZone("Africa/Nairobi")
    .toJSDate(),
  description:
    "Fix the plumbing issue in the second floor kitchen. Call when the task is completed.",
};

describe("tests createTaskInfoBlock", () => {
  it("Creates  task block", () => {
    console.log(JSON.stringify(task));
    const taskBlock = createTaskInfoBlock(task);
    console.log(JSON.stringify(taskBlock));
  });
  it("Creates a task block from the troublesome payload", () => {
    console.log(`taskKitchen: ${JSON.stringify(taskKitchen)}`);
    const taskBlock = createTaskInfoBlock(taskKitchen);
    console.log(`block: ${JSON.stringify(taskBlock)}`);
  });
});
