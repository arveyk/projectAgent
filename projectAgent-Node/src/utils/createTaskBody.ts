import { BlockObjectRequest } from "@notionhq/client";
import { Task } from "./task";

/**
 * Creates page body blocks containing the task description.
 * @param task The task.
 * @returns Page body blocks containing the task description.
 */
export function createTaskBody(task: Task): BlockObjectRequest[] {
    // TODO create blocks for task body, containing task description
    return [
    {
        object: "block",
        type: "paragraph",
        paragraph: {
            rich_text: [
                {
                    type: "text",
                    text: {
                        content: task.description
                    }
                }
            ]
        }
    }
];
}