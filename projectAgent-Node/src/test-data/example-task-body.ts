import { BlockObjectRequest } from "@notionhq/client";

export const exampleTaskBody: BlockObjectRequest[] = [
    {
        object: "block",
        type: "paragraph",
        paragraph: {
            rich_text: [
                {
                    type: "text",
                    text: {
                        content: "Fix the plumbing issue in the second floor kitchen. Call when the task is completed."
                    }
                }
            ]
        }
    }
];