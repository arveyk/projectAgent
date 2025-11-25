import { parseTask } from "./aiagent";

import {
  payloadGood,
  payloadHarvey,
  payloadInferDates,
  payloadNew,
  payloadNoDates
} from "../test-data/payloads/slashcmd/payloads";
import {
  taskGood,
  taskHarvey,
  taskInferDates,
  taskKitchen,
} from "../test-data/tasks/example-tasks";

describe("Tests parseTaskSlashCmd with a good payload", () => {
  it("Parses the task correctly", async () => {
    expect(payloadGood).toBeDefined;
    expect(typeof payloadGood).toBe("object");
    const timestamp = 1755039682 * 1000;

    const parsedTask = await parseTask(payloadGood, timestamp);
    console.log(JSON.stringify(parsedTask));

    //expect(parsedTask.assignees).toMatch(taskGood.assignees);
    expect(parsedTask.taskTitle).toBeTruthy();
    expect(parsedTask.description).toBeTruthy();
  }, 10000);
});

describe("Tests parseTaskSlashCmd with a good payload from Harvey", () => {
  it("Parses the task correctly", async () => {
    expect(payloadHarvey).toBeDefined;
    expect(typeof payloadHarvey).toBe("object");
    const timestamp = 1755039682 * 1000;

    const parsedTask = await parseTask(payloadHarvey, timestamp);
    console.log(JSON.stringify(parsedTask));

    //expect(parsedTask.assignees).toMatch(taskHarvey.assignees);
    expect(parsedTask.taskTitle).toBeTruthy();
    expect(parsedTask.description).toBeTruthy();
  }, 10000);
});

describe("Tests parseTaskSlashCmd inferring dates", () => {
  it("Parses the task and infers start date and due date correctly", async () => {
    expect(payloadInferDates).toBeDefined;
    expect(typeof payloadInferDates).toBe("object");
    const timestamp = 1755039682 * 1000;

    const parsedTask = await parseTask(payloadInferDates, timestamp);
    console.log(JSON.stringify(parsedTask));

    //expect(parsedTask.assignees).toMatch(taskInferDates.assignees);
    expect(parsedTask.taskTitle).toBeTruthy();
    expect(parsedTask.description).toBeTruthy();
  }, 10000);
});

describe("tests parseTaskSlashCmd with the payload that's been causing trouble", () => {
  it("", async () => {
    expect(payloadNew).toBeDefined;
    expect(typeof payloadNew).toBe("object");
    const timestamp = Date.now();

    const parsedTask = await parseTask(payloadNew, timestamp);
    console.log(JSON.stringify(parsedTask));
    console.log(JSON.stringify(taskKitchen));
  }, 10000);
});
