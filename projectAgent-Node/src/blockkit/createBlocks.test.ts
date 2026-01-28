// import { createBlockNewTask } from "./createBlocks";

// import {
//   notionTask,
//   task_in_db,
//   task_in_db_reworded,
//   task_not_in_db,
// } from "../test-data/tasks/example-tasks";
// import { TaskPage } from "../utils/taskFormatting/task";

// const taskPage: TaskPage = {
//   task: notionTask,
//   pageId: "",
// };

// describe("Test createBlockNewTask with a valid task object", () => {
//   it("returns blocks containing the task data", async () => {
//     expect(notionTask).toBeDefined();
//     const blocks = createBlockNewTask(taskPage);
//     console.log(JSON.stringify(blocks));

//     expect(JSON.stringify(blocks.blocks)).toMatch(
//       /Task Title.{1,8}Schedule meeting with customer \\n/gm,
//     );
//     expect(JSON.stringify(blocks.blocks)).toMatch(/Assignee:.{1,8}Jacob\\n/gm);
//     expect(JSON.stringify(blocks.blocks)).toMatch(
//       /Due Date:.{1,50}2025-05-11/gm,
//     );
//     expect(JSON.stringify(blocks.blocks)).toMatch(
//       /Start Date:.{1,50}2025-01-11/gm,
//     );
//     expect(JSON.stringify(blocks.blocks)).toMatch(
//       /Phone Number:.{1,8}55-555-5555/gm,
//     );
//     expect(JSON.stringify(blocks.blocks)).toMatch(
//       /Preferred Channel:.{1,8}Slack\\n/gm,
//     );
//     expect(JSON.stringify(blocks.blocks)).toMatch(
//       /Description:\*.{1,8}Schedule a meeting with the customer\. Check the sender's Calendly for available times\."/gm,
//     );
//   });
// });
