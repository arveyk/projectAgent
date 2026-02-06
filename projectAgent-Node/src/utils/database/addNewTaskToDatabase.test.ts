import { addTaskNotionPage } from "./addNewTaskToDatabase";
import { PageAddResult } from "./addNewTaskToDatabase";
import { jacobsTask } from "../../test-data/tasks/example-tasks";

describe("Tests addTaskNotionPage", () => {
  it("Successfully adds a new page", async () => {
    const result: PageAddResult = await addTaskNotionPage(jacobsTask);
    console.log(JSON.stringify(result));

    expect(result.success).toBeTruthy();
  });
});
