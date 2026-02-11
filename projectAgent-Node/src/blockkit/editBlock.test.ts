import { createTaskInfo } from "./createBlockPartsForNewTask";
import { notionTask, taskNoAssignee } from "../test-data/tasks/example-tasks";
import { EXAMPLE_ALL_PROJECTS_IN_NOTIONDB } from "../test-data/example-all-notion-projects";



describe("Tests createTaskInfo Function", () => {
  it("Creates  task block for notion task without assingee or start date", () => {
    console.log(JSON.stringify(taskNoAssignee));
    const taskBlock = createTaskInfo(
      taskNoAssignee, EXAMPLE_ALL_PROJECTS_IN_NOTIONDB, notionTask.assignees
    );
    console.log(JSON.stringify(taskBlock));

    expect(taskBlock).toBeDefined();

    expect(JSON.stringify(taskBlock)).toMatch(
      /Task Title.{1,4}Fix plumbing issue in second floor kitchen/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(/Assignees:.{1,4}/gm);
    expect(JSON.stringify(taskBlock)).toMatch(
      /Due Date:.{1,4}Wed Nov 12 2025/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(
      /Start Date:.{1,4}/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(
      /Description:\*.{1,8}Fix the plumbing issue in the second floor kitchen\. Call when the task is completed\."/gm,
    );


  });

  it("Creates a task block from the troublesome payload", () => {
    console.log(`taskKitchen: ${JSON.stringify(notionTask)}`);
    const taskBlock = createTaskInfo(
      notionTask, EXAMPLE_ALL_PROJECTS_IN_NOTIONDB, notionTask.assignees
    );
    console.log(`block: ${JSON.stringify(taskBlock)}`);

    expect(JSON.stringify(taskBlock)).toMatch(
      /Task Title.{1,4}Schedule meeting with customer/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(/Assignees:.{1,4}Jacob \(jacomsmail@example.com\)/gm);
    expect(JSON.stringify(taskBlock)).toMatch(
      /Due Date:.{1,4}Sun May 11 2025/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(
      /Start Date:.{1,4}Sat Jan 11 2025/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(
      /Description:\*.{1,8}Schedule a meeting with the customer\. Check the sender's Calendly for available times\."/gm,
    );
  });
});
