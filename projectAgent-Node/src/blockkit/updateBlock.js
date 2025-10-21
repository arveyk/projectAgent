"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateBlock = createUpdateBlock;
/**
 *
 * @param task: A task object
 * @returns: A set of Slack blocks for updating a task
 */
function createUpdateBlock(taskPage) {
    var task = taskPage.task;
    var taskUrl = taskPage.url;
    var startDate = task.startDate
        ? task.startDate.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];
    var dueDate = task.dueDate.toISOString().split("T")[0];
    // task.startDate = startDate;
    // task.dueDate = dueDate;
    return {
        blocks: [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: "Task already exists, would you like to update it?",
                    emoji: true,
                },
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*Task title*:\t\t\t\t\t\t\t ".concat(task.taskTitle, " \n *Assignee*  \t\t\t\t\t\t\t").concat(JSON.stringify(task.assignees), "\n *Email*  \t\t\t\t\t\t\t").concat("Email Field to be added", "\n* Due Date*  \t\t\t\t\t\t  ").concat(dueDate, "\n*Start Date*  \t\t\t\t\t\t  ").concat(startDate, "\n *Task Details:*\t\t\t\t\t ").concat(task.description, "\n*Project:*\t\t\t\t\t\t\t").concat(task.project),
                },
            },
            {
                type: "actions",
                elements: [
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            text: "Cancel",
                            emoji: true,
                        },
                        value: "click_me_123",
                        action_id: "actionId-0",
                    },
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            text: "Edit in Notion",
                            emoji: true,
                        },
                        value: "".concat(JSON.stringify(taskPage)),
                        url: "".concat(taskUrl),
                        style: "primary",
                        action_id: "actionId-1",
                    },
                ],
            },
        ],
    };
}
