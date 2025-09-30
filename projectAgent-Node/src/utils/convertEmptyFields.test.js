import { convertEmptyFields } from "./convertEmptyFields";
import { task, task_unknown_fields } from "../test-data/tasks/example-tasks";

describe("Test convertEmptyFields with a task containing empty fields", () => {
  it("Returns the task with the <UNKNOWN> fields replaced by empty strings", () => {
    const newTask = convertEmptyFields(task_unknown_fields);
    console.log(JSON.stringify(newTask));
    expect(newTask).toMatchObject({
      tasktitle: "Schedule meeting with customer",
      assignee: "Jacob",
      duedate: "2025-05-11",
      startdate: "",
      phonenumber: "",
      email: "jacob@email.com",
      preferredChannel: "Slack",
      taskdetail:
        "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
    });
  });
});

describe("Test convertEmptyFields with a task with no empty fields", () => {
  it("Returns an identical task", () => {
    const newTask = convertEmptyFields(task);
    console.log(JSON.stringify(newTask));
    expect(newTask).toMatchObject(task);
  });
});
