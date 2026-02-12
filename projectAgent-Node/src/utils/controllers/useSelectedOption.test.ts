import {
  EXAMPLE_USER_AND_PROJECT_SELECTED,
  EXAMPLE_ONLY_PROJECT_SELECTED,
  EXAMPLE_NO_ITEM_SELECTED
} from "../../test-data/example-selections-payload";
import { integrateSelectedValues } from "./useSelectedOption";
import { TaskPage, ProjectWithName } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";

const payload_user_and_project_selected = EXAMPLE_USER_AND_PROJECT_SELECTED.payload;
const payload_projects_selected = EXAMPLE_ONLY_PROJECT_SELECTED.payload;
const payload_no_item_selected = EXAMPLE_NO_ITEM_SELECTED.payload;



describe("Run payload Extraction and use values", () => {
  it("Should extract users's selections", () => {
    // console.log(payload, payload_01);

    const taskPageObject: TaskPage
     = payload_user_and_project_selected["actions"][0].value.taskPageObject || "{}";

    const projectsBeforeAddingSelectedOptions =
      taskPageObject.task.project || [];

    const task = integrateSelectedValues(
      taskPageObject.task,
      payload_user_and_project_selected,
    );
    const taskProjects = task.project || [];

    console.log(task);
    expect(taskPageObject.task.assignees).not.toEqual(task.assignees);
    expect(task.project).toBeDefined();

    expect(projectsBeforeAddingSelectedOptions.length).toBeLessThan(
      taskProjects.length,
    );
  });
  it("Should extract users's selections", () => {
      // console.log(payload, payload_01);

      const taskPageAndOptionsObject: {
        taskPageObject: TaskPage;
        userOptions: NotionUser[];
        projectOptions: ProjectWithName[];
      } = payload_projects_selected["actions"][0].value || "{}";

      const taskPageObject = taskPageAndOptionsObject.taskPageObject;

      const task = integrateSelectedValues(
        taskPageObject.task,
        payload_projects_selected,
      );
      console.log(task);
      expect(taskPageObject.task.assignees).toEqual(task.assignees);
    });
    it("Should have same task object after integration attempt", () => {

      const taskPageObject: TaskPage =
      payload_no_item_selected["actions"][0].value.taskPageObject || "{}";

      const task = integrateSelectedValues(
        taskPageObject.task,
        payload_no_item_selected,
      );
      console.log(task);
      expect(task).toEqual(taskPageObject.task);
    });
});
