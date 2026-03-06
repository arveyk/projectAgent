import { createTaskInfo } from "./createBlockPartsForNewTask";
import { notionTask, taskNoAssignee } from "../test-data/tasks/example-tasks";
import { EXAMPLE_ALL_PROJECTS_IN_NOTIONDB } from "../test-data/example-all-notion-projects";
import { ProjectWithName } from "../utils/taskFormatting/task";

const SAMPLE_PROJECTS: ProjectWithName[] = [
  {
    "projectName": "Products: Courses by Solutional",
    "id": "247eef29-a653-806a-84ee-d9791693ab62"
  },
  {
    "projectName": "Internal: TNOps Podcast",
    "id": "247eef29-a653-8075-a6a7-c8f60e66ec26"
  },
  {
    "projectName": "Internal: Staff",
    "id": "247eef29-a653-8078-beec-e0cfce63afa7"
  }
]

describe("Tests createTaskInfo Function", () => {
  it("Creates task block for notion task without assingee or start date", () => {
    console.log(JSON.stringify(taskNoAssignee));
    const taskBlock = createTaskInfo(
      taskNoAssignee, SAMPLE_PROJECTS, notionTask.assignees
    );
    console.log(JSON.stringify(taskBlock));

    expect(taskBlock).toBeDefined();
    const dueDate = new Date(taskNoAssignee.dueDate || "").toDateString();
    const dueDateRegex = RegExp(`Due Date:.{1,4}${dueDate}`,"gm");

    expect(JSON.stringify(taskBlock)).toMatch(
      /Task Title.{1,4}Fix plumbing issue in second floor kitchen/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(/Assignees:.{1,4}/gm);
    expect(JSON.stringify(taskBlock)).toMatch(
      dueDateRegex,
    );
    expect(JSON.stringify(taskBlock)).toMatch(
      /Start Date:.{1,4}/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(
      /Description:\*.{1,8}Fix the plumbing issue in the second floor kitchen\. Call when the task is completed\."/gm,
    );

    expect(JSON.stringify(taskNoAssignee).length).toBeLessThan(2001);
        // Work around for checking if block structure is consistent
        expect(() => {
            JSON.stringify(taskBlock);
        }).not.toThrow();

  });

  it("Creates a task block from the troublesome payload", () => {
    console.log(`taskKitchen: ${JSON.stringify(notionTask)}`);
    const taskBlock = createTaskInfo(
      notionTask, EXAMPLE_ALL_PROJECTS_IN_NOTIONDB, notionTask.assignees
    );
    console.log(`block: ${JSON.stringify(taskBlock)}`);
    expect(taskBlock).toBeDefined();

    const dueDate = new Date(notionTask.dueDate || "").toDateString();
    const dueDateRegex = RegExp(`Due Date:.{1,4}${dueDate}`, "gm");

    const startDate = new Date(notionTask.startDate || "").toDateString();
    const startDateRegex = RegExp(`Start Date:.{1,4}${startDate}`, "gm");

    expect(JSON.stringify(taskBlock)).toMatch(
      /Task Title.{1,4}Schedule meeting with customer/gm,
    );
    expect(JSON.stringify(taskBlock)).toMatch(/Assignees:.{1,4}Jacob \(jacomsmail@example.com\)/gm);
    expect(JSON.stringify(taskBlock)).toMatch(
      dueDateRegex,
    );
    expect(JSON.stringify(taskBlock)).toMatch(
      startDateRegex,
    );
    expect(JSON.stringify(taskBlock)).toMatch(
      /Description:\*.{1,8}Schedule a meeting with the customer\. Check the sender's Calendly for available times\."/gm,
    );

    expect(JSON.stringify(notionTask).length).toBeLessThan(2001);
        // Work around for checking if block structure is consistent
        expect(() => {
            JSON.stringify(taskBlock);
        }).not.toThrow();
  });
});
