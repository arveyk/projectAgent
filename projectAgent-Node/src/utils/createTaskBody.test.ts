import { createTaskBody } from "./createTaskBody";
import { taskKitchen } from "../test-data/tasks/example-tasks"
import { exampleTaskBody } from "../test-data/example-task-body";

describe("Tests createTaskBody", () => {
    it("Returns a list of BlockObjectRequest containing the task description", () => {
        console.log(JSON.stringify(taskKitchen));
        const taskBody = createTaskBody(taskKitchen);
        console.log(JSON.stringify(taskBody));
        expect(taskBody).toMatchObject(exampleTaskBody);
    })
})