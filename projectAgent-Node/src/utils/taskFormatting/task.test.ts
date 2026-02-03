// import { convertTaskPageFromDbResponse } from "./task";
// import { exampleDbResultExistingTask } from "../test-data/db-results/exampleDbResults";
// import { pageObjectResponse } from "../test-data/db-results/pageResponse";

// describe("tests convertTaskPageFromDbResponse", () => {
//   it("", () => {
//     const taskPage = convertTaskPageFromDbResponse(pageObjectResponse);
//     console.log(JSON.stringify(taskPage));
//   });
// });
import { convertTask } from "./task";
import { llmTaskWithClearProject } from "../../test-data/llmTasks/llm_taskWithClearProject";
import { llmTaskWithNoFoundProject } from "../../test-data/llmTasks/llm_taskWithNoFoundProject";
import { llmTaskWithUnclearProject } from "../../test-data/llmTasks/llm_taskWithUnclearProject";
import { llmTaskThatCausedBug } from "../../test-data/llmTasks/llm_taskThatCausedBug";
import { allProjects } from "../../test-data/projects/example-project";

describe("Tests convertTask with a task with a clear project and similar projects", () => {
  it("should return a Task with an empty similarProjects field", () => {
    const task = convertTask(llmTaskWithClearProject, allProjects);
    expect(task.project).toBeDefined();
    expect(task.project?.length).toBeGreaterThan(0);
    expect(task.similarProjects?.length).toBeLessThan(1);
  })
})

describe("Tests convertTask with a task with multiple similar projects and no clear project", () => {
  it("should return a Task with a non-empty similarProjects field", () => {
    const task = convertTask(llmTaskWithUnclearProject, allProjects);
    expect(task.similarProjects).toBeDefined();
    expect(task.similarProjects?.length).toBeGreaterThan(0);
    expect(task.project?.length).toBeLessThan(1);
  })
})

describe("Tests convertTask with a task with no similar projects and no clear project", () => {
  it("should return a Task with an empty similarProjects field", () => {
    const task = convertTask(llmTaskWithNoFoundProject, allProjects);
    expect(task.similarProjects?.length).toBeFalsy();
    expect(task.project?.length).toBeLessThan(1);
  })
})

describe("Tests convertTask with a task with a clear project and similar projects, the same that caused the bug", () => {
  it("should return a Task with an empty similarProjects field", () => {
    const task = convertTask(llmTaskThatCausedBug, allProjects);
    expect(task.project).toBeDefined();
    expect(task.project?.length).toBeGreaterThan(0);
    expect(task.similarProjects?.length).toBeLessThan(1);
  })
})
