import { simplifyTaskPages } from "./simplifyTaskPages";
import { EXAMPLE_TASK_RESPONSE_NO_TITLE } from "../../test-data/exampleTaskResponseNoTitle";

describe("Tests simplifyTaskPages with a task with no name", () => {
  it("Should run with no errors and put 'Untitled Task' as the title", () => {
    const simplifiedTask = simplifyTaskPages(
      EXAMPLE_TASK_RESPONSE_NO_TITLE.results,
    )[0];
    expect(simplifiedTask.taskTitle).toMatch("Untitled Task");
  });
});