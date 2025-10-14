import { addTaskNotionPage } from "./notiondb";
import { PageAddResult } from "./notiondb";
import { Task } from "./task";

const task: Task = {
  taskTitle: "Schedule meeting with customer",
  assignees: [{
    name: "Jacob",
    email: "j@cob.com"
}],
  dueDate: new Date("2025-11-11"),
  startDate: new Date("2025-11-01"),
  description:
    "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
};

describe("Tests addTaskNotionPage", () => {
    it("Successfully adds a new page", async () => {
        const result: PageAddResult = await addTaskNotionPage(task, "crkurdelak");
        console.log(JSON.stringify(result));

        expect(result.success).toBeTruthy();
    })
})