import { createNewTaskBlock } from "../../blockkit/createNewTaskBlock";
import { exampleUserSearchResponse3, exampleUserSearchResponse } from "../../test-data/example-usersearch-response";
import { createExistingTaskBlock } from "../../blockkit/createExistingTaskBlock";
import { jacobsTask, notionTask, taskNoAssignee } from "../../test-data/tasks/example-tasks"
import { testPostToSlack } from "../../bin/postMessageSlack";
import { Task } from "../../utils/taskFormatting/task";
import { EXAMPLE_ALL_PROJECTS_IN_NOTIONDB } from "../../test-data/example-all-notion-projects";
/**
 * Test currently fail because the bot id being used id of a bot that not longer exists
 * since we deleted all test bots to have only two remaining
 */


const exampleValidTaskWithoutProject: Task = {
    assignees: notionTask.assignees,
    project: [],
    existingProjects: EXAMPLE_ALL_PROJECTS_IN_NOTIONDB,
    taskTitle: notionTask.taskTitle,
    description: notionTask.description,
    similarProjects: EXAMPLE_ALL_PROJECTS_IN_NOTIONDB.slice(1, 5)
}

const exampleTaskWithoutAssignees: Task = {
  assignees: [],
  description: taskNoAssignee.description,
  dueDate: taskNoAssignee.dueDate,
  startDate: taskNoAssignee.startDate,
  taskTitle: taskNoAssignee.taskTitle,
  project: [EXAMPLE_ALL_PROJECTS_IN_NOTIONDB[0]],
}

const blockWithProjectSelectionMenu = createNewTaskBlock(notionTask.assignedBy,
    exampleValidTaskWithoutProject, exampleUserSearchResponse3);

const badBlocks = createNewTaskBlock(notionTask.assignees, jacobsTask, exampleUserSearchResponse);

const blockWithAssigneeSelectionMenu = createNewTaskBlock([{
    userId: "Test UserId",
    email: "test-example@email.com",
    name: "test name"
}], exampleTaskWithoutAssignees, [...exampleUserSearchResponse, ...exampleUserSearchResponse3]);

const channelToPostMessage = "C08VADJ7SEL" // all-solutional-project agent channel
const eventResponseURL = "https://slack.com/api/chat.postMessage";


describe("Check if blocks creates are valid, by sending to slack for validation", () => {
    it("Sends blocks created to Slack for validation", async () => {
        await expect(
            testPostToSlack(eventResponseURL, channelToPostMessage, blockWithProjectSelectionMenu.blocks)
        ).resolves.not.toThrow();

    });
    it("Sends blocks created to Slack for validation", async () => {
        await expect(
            testPostToSlack(eventResponseURL, channelToPostMessage, badBlocks.blocks)
        ).resolves.toThrow();

    });
    
    it("Sends blocks created to Slack for validation, check if bot is in channel", async () => {
        const response = await testPostToSlack(eventResponseURL, channelToPostMessage, blockWithAssigneeSelectionMenu.blocks);
        expect(response).toBeDefined();
        expect(response.ok).toBeTruthy;
        // expect(response.error).not.toBe("not_in_channel");
    });
})