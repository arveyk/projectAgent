import {
  EXAMPLE_USER_AND_PROJECT_SELECTED,
  EXAMPLE_ONLY_PROJECT_SELECTED,
} from "../../test-data/example-selections-payload";
import { integrateSelectedValues } from "./useSelectedOption";
import { TaskPage, ProjectWithName } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";

const payload = EXAMPLE_USER_AND_PROJECT_SELECTED.payload;
const payload_02 = JSON.parse(EXAMPLE_ONLY_PROJECT_SELECTED.payload);
describe("Run payload Extraction and use values", () => {
  (it("Should extract users's selections", () => {
    // console.log(payload, payload_01);

    const taskPageAndOptionsObject: {
      taskPageObject: TaskPage;
      userOptions: NotionUser[];
      projectOptions: ProjectWithName[];
    } = JSON.parse(payload["actions"][0].value || "{}");

    const taskPageObject = taskPageAndOptionsObject.taskPageObject;
    const userSelection = taskPageAndOptionsObject.userOptions;
    const projectOptions = taskPageAndOptionsObject.projectOptions;
    const projectsBeforeAddingSelectedOptions =
      taskPageObject.task.project || [];

    const task = integrateSelectedValues(
      taskPageObject.task,
      userSelection,
      projectOptions,
      payload,
    );
    const taskProjects = task.project || [];

    console.log(task);
    expect(task.assignees).not.toEqual(task.assignees);
    expect(task.project).toBeDefined();

    expect(projectsBeforeAddingSelectedOptions).toBeLessThan(
      taskProjects.length,
    );
  }),
    it("Should extract users's selections", () => {
      // console.log(payload, payload_01);

      const taskPageAndOptionsObject: {
        taskPageObject: TaskPage;
        userOptions: NotionUser[];
        projectOptions: ProjectWithName[];
      } = JSON.parse(payload_02["actions"][0].value || "{}");

      const taskPageObject = taskPageAndOptionsObject.taskPageObject;
      const userSelection = taskPageAndOptionsObject.userOptions;
      const projects = taskPageAndOptionsObject.projectOptions;

      const task = integrateSelectedValues(
        taskPageObject.task,
        userSelection,
        projects,
        payload,
      );
      console.log(task);
      expect(task.assignees).toEqual(task.assignees);
    }));
});
