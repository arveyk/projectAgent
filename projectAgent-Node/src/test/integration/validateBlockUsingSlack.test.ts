import { createNewTaskBlock } from "../../blockkit/createNewTaskBlock";
import { exampleUserSearchResponse3, exampleUserSearchResponse } from "../../test-data/example-usersearch-response";
import { createExistingTaskBlock } from "../../blockkit/createExistingTaskBlock";
import { jacobsTask, notionTask, taskNoAssignee } from "../../test-data/tasks/example-tasks"
import { testPostToSlack } from "../../bin/postMessageSlack";

/**
 * Test currently fail because the bot id being used id of a bot that not longer exists
 * since we deleted all test bots to have only two remaining
 */

const blockWithoutAssigneeTask = createNewTaskBlock(notionTask.assignedBy, notionTask, exampleUserSearchResponse3);
const badBlocks = createNewTaskBlock(notionTask.assignees, jacobsTask, exampleUserSearchResponse);
const blockWithNoAssignee = createNewTaskBlock([], taskNoAssignee, exampleUserSearchResponse);

const channelToPostMessage = "https://slack.com/api/chat.postMessage"


describe("Check if blocks creates are valid, by sending to slack for validation", () => {
    it("Sends blocks created to Slack for validation", async () => {
        expect(async () => {
            await testPostToSlack(channelToPostMessage, blockWithoutAssigneeTask);
        }).not.toThrow();

    });
    it("Sends blocks created to Slack for validation", async () => {
        expect(async () => {
          await testPostToSlack(channelToPostMessage, badBlocks);
        }).not.toThrow();

    });
    it("Sends blocks created to Slack for validation, check if bot is in channel", async () => {
        let response: any;
        expect(async () => {
            await testPostToSlack(channelToPostMessage, blockWithNoAssignee);
        }).not.toThrow();
        response = await testPostToSlack(channelToPostMessage, blockWithNoAssignee);
        expect(response).toBeDefined();
        expect(response.ok).toBe(false);
        expect(response.error).not.toBe("not_in_channel");
    });
})