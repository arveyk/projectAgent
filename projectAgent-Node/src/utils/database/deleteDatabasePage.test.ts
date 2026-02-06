import { deletePage } from "./deleteDatabasePage";
import { describe, it } from "@jest/globals";
import { addTaskNotionPage } from "./addNewTaskToDatabase";
import { jacobsTask } from "../../test-data/tasks/example-tasks";

describe("Test deleting a notion page", () => {

  it("should not error", async () => {

    const addTaskResult = await addTaskNotionPage(jacobsTask);
    const taskPage = addTaskResult.page;
    if (addTaskResult.success === true && taskPage) {
        const response = await deletePage(taskPage.id);
        console.log(response);

    }
  });
});
