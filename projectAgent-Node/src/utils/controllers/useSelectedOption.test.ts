import {
  EXAMPLE_USER_AND_PROJECT_SELECTED,
  EXAMPLE_ONLY_PROJECT_SELECTED,
} from "../../test-data/example-selections-payload";
import { integrateSelectedValues } from "./useSelectedOption";
import { TaskPage, ProjectWithName } from "../taskFormatting/task";

const payload = EXAMPLE_USER_AND_PROJECT_SELECTED.payload;
const payload_02 = JSON.parse(EXAMPLE_ONLY_PROJECT_SELECTED.payload);

describe("Run payload Extraction and use values", () => {
  (it("Should extract users's selections and integrate them into task", () => {
    // console.log(payload, payload_01);

    const taskPageAndOptionsObject: {
      taskPageObject: TaskPage;
    } = JSON.parse(payload["actions"][0].value || "{}");

    const taskPageObject = taskPageAndOptionsObject.taskPageObject;
    const projectsBeforeAddingSelectedOptions =
      taskPageObject.task.project || [];

    const task = integrateSelectedValues(
      taskPageObject.task,
      payload,
    );
    const taskProjects = task.project || [];

    console.log(task);

    expect(taskPageObject.task.assignees).not.toEqual(task.assignees);
    expect(task.project).toBeDefined();

    expect(projectsBeforeAddingSelectedOptions.length).toBeLessThan(
      taskProjects.length,
    );
  }),
    it("Should extract users's selections, integrate assignees", () => {
      // console.log(payload, payload_01);

      const taskPageAndOptionsObject: {
        taskPageObject: TaskPage;
      } = JSON.parse(payload_02["actions"][0].value || "{}");

      const taskPageObject = taskPageAndOptionsObject.taskPageObject;

      const task = integrateSelectedValues(
        taskPageObject.task,
        payload_02,
      );
      console.log(task);
      expect(taskPageObject.task.assignees).toEqual(task.assignees);
      expect(taskPageObject.task.project).toEqual(task.project);
    }));
});
