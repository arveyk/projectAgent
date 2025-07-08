import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0
});

const task = z.object({
    title: z.string().describe("The title of the task"),
    assignee: z.string.describe("The person the task is assigned to"),
    start_date: z.date().describe("The start date of the task"),
    due_date: z.date().describe("The due date of the task")
});

const structuredLlm = model.withStructuredOutput(task, { name: "task" });
await structuredLlm.invoke("Split this task into its fields. ### Example: Prompt: Pamela, could you work on the prototype for the new design starting July 8th? Please have it ready to present by the 16th. Result: title: Work on design prototype, assignee: Pamela, start_date: 2025-07-08, due_date: 2025-07-16")