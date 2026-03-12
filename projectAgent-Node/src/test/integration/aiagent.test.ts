import { parseTask } from "../../utils/aiagent";

import {
  payloadGood,
  payloadHarvey,
  payloadInferDates,
  payloadNew,
} from "../../test-data/payloads/slashcmd/payloads";
import { taskKitchen } from "../../test-data/tasks/example-tasks";
import { EXAMPLE_ALL_PROJECTS_IN_NOTIONDB } from "../../test-data/example-all-notion-projects";
import { DateTime } from "luxon";

describe("Tests parseTaskSlashCmd with a good payload", () => {
  it("Parses the task correctly", async () => {
    expect(payloadGood).toBeDefined;
    expect(typeof payloadGood).toBe("object");
    const currentDate = DateTime.fromISO("2025-08-12");

    const parsedTask = await parseTask(
      payloadGood,
      currentDate,
      EXAMPLE_ALL_PROJECTS_IN_NOTIONDB,
    );
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.taskTitle).toBeTruthy();
    expect(parsedTask.description).toBeTruthy();
    expect(parsedTask.dueDate).toMatch("2025-09-01");
    expect(
      parsedTask.assignees.find((person) => person.name.includes("Jeff")),
    ).toBeTruthy();
  }, 20000);
});

describe("Tests parseTaskSlashCmd with a good payload from Harvey", () => {
  it("Parses the task correctly", async () => {
    expect(payloadHarvey).toBeDefined;
    expect(typeof payloadHarvey).toBe("object");
    const currentDate = DateTime.fromISO("2025-08-12");

    const parsedTask = await parseTask(
      payloadHarvey,
      currentDate,
      EXAMPLE_ALL_PROJECTS_IN_NOTIONDB,
    );
    console.log(JSON.stringify(parsedTask));

    expect(parsedTask.taskTitle).toBeTruthy();
    expect(parsedTask.description).toBeTruthy();
    expect(parsedTask.dueDate).toMatch("2025-08-13");
    expect(
      parsedTask.assignees.find((person) => person.name.includes("Harvey")),
    ).toBeTruthy();
  }, 20000);
});

describe("Tests parseTaskSlashCmd inferring dates", () => {
  it("Parses the task and infers start date and due date correctly", async () => {
    expect(payloadInferDates).toBeDefined;
    expect(typeof payloadInferDates).toBe("object");
    const currentDate = DateTime.fromISO("2025-08-12");

    const parsedTask = await parseTask(
      payloadInferDates,
      currentDate,
      EXAMPLE_ALL_PROJECTS_IN_NOTIONDB,
    );
    console.log(JSON.stringify(parsedTask));
    expect(parsedTask.taskTitle).toBeTruthy();
    expect(parsedTask.description).toBeTruthy();
    expect(parsedTask.startDate).toMatch("2025-08-13");
    expect(parsedTask.dueDate).toMatch("2025-08-14");
    expect(
      parsedTask.assignees.find((person) => person.name.includes("Ellen")),
    ).toBeTruthy();
  }, 20000);
});

describe("tests parseTaskSlashCmd with the payload that's been causing trouble", () => {
  it("", async () => {
    expect(payloadNew).toBeDefined;
    expect(typeof payloadNew).toBe("object");
    const currentDate = DateTime.fromISO("2025-08-12");

    const parsedTask = await parseTask(
      payloadNew,
      currentDate,
      EXAMPLE_ALL_PROJECTS_IN_NOTIONDB,
    );
    console.log(JSON.stringify(parsedTask));
    console.log(JSON.stringify(taskKitchen));
    expect(
      parsedTask.assignees.find((person) => person.name.includes("Jeremy")),
    ).toBeTruthy();
  }, 20000);
});
