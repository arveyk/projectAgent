import { deletePage } from "./deleteDatabasePage";
import { describe, it } from "@jest/globals";
import { addTaskNotionPage } from "./addNewTaskToDatabase";
import { jacobsTask } from "../../test-data/tasks/example-tasks";

describe("Test deleting a notion page", () => {

  it("should delete the test page created", async () => {

    // Creating a task to be deleted
    const addTaskResult = await addTaskNotionPage(jacobsTask);
    const taskPage = addTaskResult.page;
    
    expect(addTaskResult.success).toBeTruthy();
    expect(taskPage).toBeDefined();

    const response = await deletePage(taskPage.url);
    console.log(response);
  });
});
