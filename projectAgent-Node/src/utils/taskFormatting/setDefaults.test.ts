import {
  EXAMPLE_TASK_MISSING_ASSIGNEES,
  EXAMPLE_TASK_MISSING_DUE_DATE,
  EXAMPLE_TASK_MISSING_START_DATE,
  EXAMPLE_TASK_MISSING_START_DUE_ASSIGNEES,
  EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS,
  EXAMPLE_USER_DATA_DANA,
} from "../../test-data/tasks/example-tasksWithDefaultValues";
import { setDefaults } from "./setDefaults";

describe("Test setDefaults with all required fields", () => {
  it("Should return an identical copy of the task", () => {
    const taskWithDefaults = setDefaults(
      EXAMPLE_USER_DATA_DANA,
      EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS,
    );
    expect(taskWithDefaults).toMatchObject(
      EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS,
    );
  });
});

describe("Test setDefaults with missing start/due dates or assignees", () => {
  it("Should return a copy of the task with the default start date", () => {
    const taskWithDefaults = setDefaults(
      EXAMPLE_USER_DATA_DANA,
      EXAMPLE_TASK_MISSING_START_DATE,
    );
    expect(taskWithDefaults).toMatchObject(
      EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS,
    );
  });
  it("Should return a copy of the task with the default due date", () => {
    const taskWithDefaults = setDefaults(
      EXAMPLE_USER_DATA_DANA,
      EXAMPLE_TASK_MISSING_DUE_DATE,
    );
    expect(taskWithDefaults).toMatchObject(
      EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS,
    );
  });
  it("Should return a copy of the task with the default assignee", () => {
    const taskWithDefaults = setDefaults(
      EXAMPLE_USER_DATA_DANA,
      EXAMPLE_TASK_MISSING_ASSIGNEES,
    );
    expect(taskWithDefaults).toMatchObject(
      EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS,
    );
  });
  it("Should return a copy of the task with the default start date, due date, and assignee", () => {
    const taskWithDefaults = setDefaults(
      EXAMPLE_USER_DATA_DANA,
      EXAMPLE_TASK_MISSING_START_DUE_ASSIGNEES,
    );
    expect(taskWithDefaults).toMatchObject(
      EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS,
    );
  });
});
