import {
  EXAMPLE_USER_AND_PROJECT_SELECTED,
  EXAMPLE_ONLY_PROJECT_SELECTED,
} from "../../test-data/example-selections-payload";
import { integrateSelectedValues } from "./useSelectedOption";
import { TaskPage, ProjectWithName } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";

const payload = EXAMPLE_USER_AND_PROJECT_SELECTED.payload;
const payload_02 = EXAMPLE_ONLY_PROJECT_SELECTED.payload;
describe("Run payload Extraction and use values", () => {
  (it("Should extract users's selections", () => {
    // console.log(payload, payload_01);

    const taskPageAndOptionsObject: {
      taskPageObject: TaskPage;
      userOptions: NotionUser[];
      projectOptions: ProjectWithName[];
    } = payload["actions"][0].value || "{}";

    const taskPageObject = taskPageAndOptionsObject.taskPageObject;
    const projectsBeforeAddingSelectedOptions =
      taskPageObject.task.project || [];

    const task = integrateSelectedValues(
      taskPageObject.task,
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
      } = payload_02["actions"][0].value || "{}";

      const taskPageObject = taskPageAndOptionsObject.taskPageObject;

      const task = integrateSelectedValues(
        taskPageObject.task,
        payload,
      );
      console.log(task);
      expect(task.assignees).toEqual(task.assignees);
    }));
});
