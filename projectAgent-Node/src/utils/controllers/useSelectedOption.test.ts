import {
  EXAMPLE_USER_AND_PROJECT_SELECTED,
  EXAMPLE_ONLY_PROJECT_SELECTED,
  EXAMPLE_NO_ITEM_SELECTED,
  EXAMPLE_ONLY_ASSIGNEE_SELECTED,
} from "../../test-data/example-payloads-with-user-selections";
import { integrateSelectedValues } from "./useSelectedOption";
import { TaskPage, ProjectWithName, Task } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";

const payloadUserAndProjectSelected = EXAMPLE_USER_AND_PROJECT_SELECTED.payload;
const payloadProjectsSelected = EXAMPLE_ONLY_PROJECT_SELECTED.payload;
const payloadNoItemSelected = EXAMPLE_NO_ITEM_SELECTED.payload;
const payloadAssigneeSelected = EXAMPLE_ONLY_ASSIGNEE_SELECTED.payload;

describe("Tests that selected values in payload are added to task object", () => {
  it("Should extract users's selections", () => {
    // console.log(payload, payload_01);

    const taskPageObjectBothValues: TaskPage =
      payloadUserAndProjectSelected["actions"][0].value.taskPageObject || "{}";

    const taskBeforeAddingValues = taskPageObjectBothValues.task;
    const projectsBeforeAddingSelectedOptions =
      taskBeforeAddingValues.project || [];

    const task = integrateSelectedValues(
      taskPageObjectBothValues.task,
      payloadUserAndProjectSelected,
    );
    const taskProjects = task.project || [];

    console.log(task);
    expect(taskPageObjectBothValues.task.assignees).not.toEqual(task.assignees);
    expect(task.project).toBeDefined();

    expect(projectsBeforeAddingSelectedOptions.length).toBeLessThan(
      taskProjects.length,
    );

    expect(task).toMatchObject({
      assignedBy: taskBeforeAddingValues.assignedBy,
      assignees: task.assignees,
      description: taskBeforeAddingValues.description,
      dueDate: taskBeforeAddingValues.dueDate,
      project: task.project,
      startDate: taskBeforeAddingValues.startDate,
      taskTitle: taskBeforeAddingValues.taskTitle,
    });
  });
  it("Should extract users's assignee selections", () => {
    // console.log(payload, payload_01);

    const taskPageObjAssigneeSelected: TaskPage =
      payloadAssigneeSelected["actions"][0].value.taskPageObject || "{}";

    const taskWithAdditionalAssignees = integrateSelectedValues(
      taskPageObjAssigneeSelected.task,
      payloadAssigneeSelected,
    );

    const allAssignees = taskWithAdditionalAssignees.assignees;

    console.log(taskPageObjAssigneeSelected.task, taskWithAdditionalAssignees);
    expect(allAssignees.length).toBeGreaterThan(
      taskPageObjAssigneeSelected.task.assignees.length,
    );
    expect(taskWithAdditionalAssignees.project?.length).toBe(
      taskPageObjAssigneeSelected.task.project
        ? taskPageObjAssigneeSelected.task.project.length
        : 0,
    );
  });
  it("Should extract users's project selections", () => {
    // console.log(payload, payload_01);

    const taskPageProjectSelected: {
      taskPageObject: TaskPage;
    } = payloadProjectsSelected["actions"][0].value || "{}";

    const taskPageObject = taskPageProjectSelected.taskPageObject;

    const taskWithAdditionalProjects = integrateSelectedValues(
      taskPageObject.task,
      payloadProjectsSelected,
    );
    expect(taskPageObject.task.assignees).toEqual(
      taskWithAdditionalProjects.assignees,
    );
    expect(taskWithAdditionalProjects.project?.length).toBeGreaterThan(
      taskPageObject.task.project ? taskPageObject.task.project.length : 0,
    );
  });

  it("Should have same task object after values integration attempt", () => {
    const taskPageObjectNoneSelected: TaskPage =
      payloadNoItemSelected["actions"][0].value.taskPageObject || "{}";

    const task = integrateSelectedValues(
      taskPageObjectNoneSelected.task,
      payloadNoItemSelected,
    );
    console.log(task);
    expect(task).toEqual(taskPageObjectNoneSelected.task);
  });
});
