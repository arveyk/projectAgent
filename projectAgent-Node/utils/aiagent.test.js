const request = require("supertest");
import { parseTaskSlashCmd } from "./aiagent";

import {
  payloadGood,
  payloadInferDates,
  payloadNoTask,
} from "../test-data/payloads/slashcmd/payloads";
import {
  taskGood,
  taskInferDates,
  noTask,
} from "../test-data/tasks/example-tasks";

describe("Tests parseTaskSlashCmd with a good payload", () => {
  it("Parses the task correctly", async () => {
    expect(payloadGood).toBeDefined;
    expect(typeof payloadGood).toBe("object");

    const parsedTask = await parseTaskSlashCmd(payloadGood);
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.assignee).toMatch(taskGood.assignee);
    expect(parsedTask.tasktitle).toMatch(taskGood.tasktitle);
    expect(parsedTask.taskdetail).toMatch(taskGood.taskdetail);
  });
});

describe("Tests parseTaskSlashCmd inferring dates", () => {
  it("Parses the task and infers start date and due date correctly", async () => {
    expect(payloadInferDates).toBeDefined;
    expect(typeof payloadInferDates).toBe("object");

    const parsedTask = await parseTaskSlashCmd(payloadInferDates);
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.assignee).toMatch(taskInferDates.assignee);
    expect(parsedTask.tasktitle).toMatch(taskInferDates.tasktitle);
    expect(parsedTask.taskdetail).toMatch(taskInferDates.taskdetail);
  });
});

describe("Tests parseTaskSlashCmd with no task", () => {
  it("Parses the task and infers start date and due date correctly", async () => {
    expect(payloadNoTask).toBeDefined;
    expect(typeof payloadNoTask).toBe("object");

    const parsedTask = await parseTaskSlashCmd(payloadNoTask);
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.assignee).toMatch(noTask.assignee);
    expect(parsedTask.tasktitle).toMatch(noTask.tasktitle);
    expect(parsedTask.taskdetail).toMatch(noTask.taskdetail);
  });
});
