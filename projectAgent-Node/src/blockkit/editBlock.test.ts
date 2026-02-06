import { createTaskInfo } from "./createBlockPartsForNewTask";
import { notionTask } from "../test-data/tasks/example-tasks";
import { Task} from "../utils/taskFormatting/task";
import { DateTime } from "luxon";
import { EXAMPLE_ALL_PROJECTS_IN_NOTIONDB } from "../test-data/example-all-notion-projects";


const taskKitchen: Task = {
  taskTitle: "Fix plumbing issue in second floor kitchen",
  assignees: [{name: "Jeremy"}],
  dueDate: DateTime.fromMillis(1759852422989)
    .setZone("Africa/Nairobi")
    .toJSDate().toDateString(),
  description:
    "Fix the plumbing issue in the second floor kitchen. Call when the task is completed.",
};

describe("tests createTaskInfoBlock", () => {
  it("Creates  task block", () => {
    console.log(JSON.stringify(notionTask));
    const taskBlock = createTaskInfo(
      notionTask, EXAMPLE_ALL_PROJECTS_IN_NOTIONDB, notionTask.assignees
    );
    console.log(JSON.stringify(taskBlock));
  });
  it("Creates a task block from the troublesome payload", () => {
    console.log(`taskKitchen: ${JSON.stringify(taskKitchen)}`);
    const taskBlock = createTaskInfo(
      notionTask, EXAMPLE_ALL_PROJECTS_IN_NOTIONDB, notionTask.assignees
    );
    console.log(`block: ${JSON.stringify(taskBlock)}`);
  });
});
