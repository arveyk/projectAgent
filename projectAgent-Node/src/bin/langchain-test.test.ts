import {
  payloadNoDates,
  payloadExample,
} from "../test-data/payloads/slashcmd/payloads";
import { parseTask, EXAMPLE_OUTPUT_FOR_PROMPT_00, taskSchema } from "../utils/aiAgent";
import { structuredOutputDemo } from "./langchain-test";

describe("Tests structured output example", () => {
  it("", async () => {
    const message =
      "the title is Hello, it involves Bob, Jenny, and Acorn, and the date is Nov 1 2025";
    const structured = await structuredOutputDemo(message);
    console.log(structured);
  }, 10000);
});

describe("Tests parseTaskSlashCmd without a due date", () => {
  it("Parses the task correctly", async () => {
    expect(payloadNoDates).toBeDefined;
    expect(typeof payloadNoDates).toBe("object");
    const timestamp = 1755039682 * 1000;

    const parsedObject = await parseTask(payloadNoDates, timestamp);
    const parsedTask = parsedObject.task;
    console.log(JSON.stringify(parsedTask));

    //expect(parsedTask.assignees).toMatch(taskInferDates.assignees);
    expect(parsedTask.taskTitle).toBeTruthy();
    expect(parsedTask.description).toBeTruthy();
  }, 10000);
});

describe("Tests parseTaskSlashCmd with the same example given to the LLM", () => {
  it("Parses the task correctly", async () => {
    expect(payloadExample).toBeDefined;
    expect(typeof payloadExample).toBe("object");
    const timestamp = 1755039682 * 1000;

    const parsedObject = await parseTask(payloadExample, timestamp);
    const parsedTask = parsedObject.task;
    console.log(JSON.stringify(parsedTask));

    //expect(parsedTask.assignees).toMatch(taskInferDates.assignees);
    expect(parsedTask.taskTitle).toBeTruthy();
    expect(parsedTask.description).toBeTruthy();
    expect(taskSchema.parse(EXAMPLE_OUTPUT_FOR_PROMPT_00)).toBeTruthy();
  }, 10000);
});
