import { deletePage } from "../../utils/database/deleteDatabasePage";
import { describe, it } from "@jest/globals";
import { addTaskNotionPage, PageAddResult } from "../../utils/database/addNewTaskToDatabase";
import { jacobsTask } from "../../test-data/tasks/example-tasks";

describe("Test adding and deleting a notion page", () => {

  it("Should add then delete the test page created", async () => {

    // Creating a task to be deleted
    const addTaskResult: PageAddResult = await addTaskNotionPage(jacobsTask);
    const taskPage = addTaskResult.page;
    
    expect(addTaskResult.success).toBeTruthy();
    expect(taskPage).toBeDefined();

    const response = await deletePage(taskPage?.url);
    expect(response).toBeDefined();
    console.log(response);
  });
});