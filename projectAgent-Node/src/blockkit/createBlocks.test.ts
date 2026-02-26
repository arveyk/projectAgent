import { createNewTaskBlock } from "./createNewTaskBlock";
import { exampleUserSearchResponse } from "../test-data/example-usersearch-response";

import {
    notionTask
} from "../test-data/tasks/example-tasks";
import { NotionTask } from "../utils/taskFormatting/task";
import { NotionUser } from "../utils/controllers/userTypes";


const EXAMPLE_ASSIGNED_BY: NotionUser[] = [
    {
        userId: "136dsg2b-594c-817b-adaa-000l3lf9e69",
        name: "Maverick Bond",
        email: "mav.bond@shared-domain.com",
    },
];

const ExampleNotionTask: NotionTask = {
  assignees: notionTask.assignees,
  assignedBy: notionTask.assignedBy,
  description: notionTask.description,
  dueDate: notionTask.dueDate,
  startDate: notionTask.startDate,
  taskTitle: notionTask.taskTitle,
  project: notionTask.project
};
const testUserSearchResponse = [...exampleUserSearchResponse];

ExampleNotionTask.assignees.forEach((assignee) => {
    testUserSearchResponse.push({
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

describe("Test createBlockNewTask with a valid task object", () => {
    it("returns blocks containing the task data", () => {     
        expect(ExampleNotionTask).toBeDefined();

        const dueDate = new Date(ExampleNotionTask.dueDate || "").toDateString();
        const startDate = new Date(ExampleNotionTask.startDate || "").toDateString();

        const startDateRegex = RegExp(`Start Date:.{1,4}${startDate}`, "gm");
        const dueDateRegex = RegExp(`Due Date:.{1,4}${dueDate}`, "gm");
        const slackBlocksObject = createNewTaskBlock(EXAMPLE_ASSIGNED_BY, ExampleNotionTask, testUserSearchResponse);
        console.log(JSON.stringify(slackBlocksObject));

        expect(JSON.stringify(slackBlocksObject.blocks)).toMatch(
            /Task Title.{1,4}Schedule meeting with customer/gm,
        );
        expect(JSON.stringify(slackBlocksObject.blocks)).toMatch(/Assignees:.{1,4}Jacob \(jacomsmail@example.com\)/gm);
        expect(JSON.stringify(slackBlocksObject.blocks)).toMatch(
            dueDateRegex
        );
        expect(JSON.stringify(slackBlocksObject.blocks)).toMatch(
            startDateRegex
        );
        expect(JSON.stringify(slackBlocksObject.blocks)).toMatch(
            /Description:\*.{1,8}Schedule a meeting with the customer\. Check the sender's Calendly for available times\."/gm,
        );

        // Test that buttons value does not have more than 2001 characters

        expect(JSON.stringify(ExampleNotionTask).length).toBeLessThan(2001);
        // Work around for checking if block structure is consistent
        expect(() => {
            JSON.stringify(slackBlocksObject);
        }).not.toThrow();
    });
});
