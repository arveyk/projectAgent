import { createNewTaskBlock } from "./createNewTaskBlock";
import { exampleUserSearchResponse } from "../test-data/example-usersearch-response";

import {
    notionTask,
} from "../test-data/tasks/example-tasks";
import { TaskPage } from "../utils/taskFormatting/task";
import { NotionUser } from "../utils/controllers/userTypes";

const taskPage: TaskPage = {
    task: notionTask,
    pageId: "",
};

const EXAMPLE_ASSIGNED_BY: NotionUser[] = [
    {
        userId: "136dsg2b-594c-817b-adaa-000l3lf9e69",
        name: "Maverick Din",
        email: "mav.din@solutional.com",
    },
];

describe("Test createBlockNewTask with a valid task object", () => {
    it("returns blocks containing the task data", async () => {
        expect(notionTask).toBeDefined();

        notionTask.assignees.forEach((assignee) => {
            exampleUserSearchResponse.push({
                person: {
                    name: assignee.name
                },
                foundUsers: [{
                    userId: assignee.userId,
                    name: assignee.name,
                    email: assignee.email || ""
                }]
            })
        })
        notionTask.assignees.push();
        const blocks = await createNewTaskBlock(EXAMPLE_ASSIGNED_BY, taskPage.task, exampleUserSearchResponse);
        console.log(JSON.stringify(blocks));

        expect(JSON.stringify(blocks.blocks)).toMatch(
            /Task Title.{1,4}Schedule meeting with customer/gm,
        );
        expect(JSON.stringify(blocks.blocks)).toMatch(/Assignees:.{1,4}Jacob \(jacomsmail@example.com\)/gm);
        expect(JSON.stringify(blocks.blocks)).toMatch(
            /Due Date:.{1,4}Sun May 11 2025/gm,
        );
        expect(JSON.stringify(blocks.blocks)).toMatch(
            /Start Date:.{1,4}Sat Jan 11 2025/gm,
        );
        /**
         * Deprecated field
         * expect(JSON.stringify(blocks.blocks)).toMatch(
          /Phone Number:.{1,8}55-555-5555/gm,
        );
         */
        expect(JSON.stringify(blocks.blocks)).toMatch(
            /Description:\*.{1,8}Schedule a meeting with the customer\. Check the sender's Calendly for available times\."/gm,
        );
    });
});
