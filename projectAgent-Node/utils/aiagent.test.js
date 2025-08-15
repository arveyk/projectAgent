const request = require("supertest");
import { parseTaskSlashCmd } from "./aiagent";

import {
  payloadGood,
  payloadHarvey,
  payloadInferDates,
  payloadNoTask,
} from "../test-data/payloads/slashcmd/payloads";
import {
  taskGood,
  taskHarvey,
  taskInferDates,
  noTask,
} from "../test-data/tasks/example-tasks";

describe("Tests parseTaskSlashCmd with a good payload", () => {
  it("Parses the task correctly", async () => {
    expect(payloadGood).toBeDefined;
    expect(typeof payloadGood).toBe("object");
    const timestamp = "1755039682";

    const parsedTask = await parseTaskSlashCmd(payloadGood, timestamp);
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.assignee).toMatch(taskGood.assignee);
    expect(parsedTask.tasktitle).toMatch(taskGood.tasktitle);
    expect(parsedTask.description).toMatch(taskGood.taskdetail);
  });
});

describe("Tests parseTaskSlashCmd with a good payload from Harvey", () => {
  it("Parses the task correctly", async () => {
    expect(payloadHarvey).toBeDefined;
    expect(typeof payloadHarvey).toBe("object");
    const timestamp = "1755039682";

    const parsedTask = await parseTaskSlashCmd(payloadHarvey, timestamp);
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.assignee).toMatch(taskHarvey.assignee);
    expect(parsedTask.tasktitle).toMatch(taskHarvey.tasktitle);
    expect(parsedTask.description).toMatch(taskHarvey.taskdetail);
  });
});

describe("Tests parseTaskSlashCmd inferring dates", () => {
  it("Parses the task and infers start date and due date correctly", async () => {
    expect(payloadInferDates).toBeDefined;
    expect(typeof payloadInferDates).toBe("object");
    const timestamp = "1755039682";

    const parsedTask = await parseTaskSlashCmd(payloadInferDates, timestamp);
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.assignee).toMatch(taskInferDates.assignee);
    expect(parsedTask.tasktitle).toMatch(taskInferDates.tasktitle);
    expect(parsedTask.description).toMatch(taskInferDates.taskdetail);
  });
});

describe("Tests parseTaskSlashCmd with no task", () => {
  it("Parses the task and infers start date and due date correctly", async () => {
    expect(payloadNoTask).toBeDefined;
    expect(typeof payloadNoTask).toBe("object");
    const timestamp = "1755039682";

    const parsedTask = await parseTaskSlashCmd(payloadNoTask, timestamp);
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.assignee).toMatch(noTask.assignee);
    expect(parsedTask.tasktitle).toMatch(noTask.tasktitle);
    expect(parsedTask.description).toMatch(noTask.taskdetail);
  });
});
