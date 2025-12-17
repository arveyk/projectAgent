"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleModal = exports.RequestApprovalBlock = exports.createBlockNewTask = exports.createFinalBlock = void 0;
var editblock_1 = require("./editblock");
Object.defineProperty(exports, "createFinalBlock", { enumerable: true, get: function () { return editblock_1.createFinalBlock; } });
var editblock_2 = require("./editblock");
var sampleModal = {
    trigger_id: "trigger_id",
    view: {
        type: "modal",
        callback_id: "modal-identifier",
        title: {
            type: "plain_text",
            text: "Just a modal",
        },
        blocks: [
            {
                type: "section",
                block_id: "section-identifier",
                text: {
                    type: "mrkdwn",
                    text: "*Welcome* to ~my~ Block Kit _modal_!",
                },
                accessory: {
                    type: "button",
                    text: {
                        type: "plain_text",
                        text: "Just a button",
                    },
                    action_id: "button-identifier",
                },
            },
        ],
    },
};
exports.sampleModal = sampleModal;
/**
 * Creates a set of Slack blocks to be used in confirming a new task.
 * @param {*} taskPageObj
 * @returns A set of Slack blocks containing data from the task, to be used in confirming new tasks
 */
var createBlockNewTask = function (taskPageObj) {
    /**
     *  export const createBlockNewTask = function (taskPageObj: TaskPage) {
     * const task = taskPageObj.task;
     */
    var task = taskPageObj.task;
    // console.log("Another console.log, Task", JSON.stringify(task));
    var blockText = (0, editblock_2.createTaskInfoBlock)(taskPageObj);
    return {
        text: "Creating a new Task?",
        replace_original: true,
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*You Are About to Create a New Task*",
                },
            },
            {
                type: "divider",
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: blockText,
                },
            },
            {
                type: "actions",
                elements: [
                    /*{
                      type: "button",
                      text: {
                        type: "plain_text",
                        emoji: true,
                        text: "Add Task",
                      },
                      style: "primary",
                      value: JSON.stringify(taskPageObj), // value: JSON.stringify(taskPageObj),
                      action_id: "actionId-0",
                    }, */
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            text: "Confirm",
                            emoji: true,
                        },
                        value: JSON.stringify(taskPageObj), // value: JSON.stringify(taskPageObj),
                        style: "primary",
                        action_id: "actionId-2",
                    },
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            emoji: true,
                            text: "Cancel",
                        },
                        style: "danger",
                        value: "discard_123",
                        action_id: "actionId-1",
                    },
                ],
            },
            {
                type: "context",
                elements: [
                    {
                        type: "mrkdwn",
                        text: "*You can edit the task in Notion after adding it*",
                    },
                ],
            },
        ],
    };
};
exports.createBlockNewTask = createBlockNewTask;
/**
 * Creates a set of Slack blocks to be used in confirming a new task.
 * @param {*} taskPageObj
 * @returns A set of Slack blocks containing data from the task, to be used in confirming new tasks
 */
var RequestApprovalBlock = {
    blocks: [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: "*You Are About to Create a New Task*",
            },
        },
        {
            type: "divider",
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: "*Task Title:*\t\t\t${_Task Title_} \n*Assignee:* \t\t\t${Assignee}\n*Due Date:*\t\t\t${_Due Date_}\n*Phone Number:*\t$[_545-039-5264_]\n*Description:* \t\t${Task_Description}\n*Project:* \t\t${Project}",
            },
        },
        {
            type: "actions",
            elements: [
                {
                    type: "button",
                    text: {
                        type: "plain_text",
                        emoji: true,
                        text: "Approve",
                    },
                    style: "primary",
                    value: "approve_123",
                    action_id: "actionId-0",
                },
                {
                    type: "button",
                    text: {
                        type: "plain_text",
                        emoji: true,
                        text: "Discard",
                    },
                    style: "danger",
                    value: "discard_123",
                    action_id: "actionId-1",
                },
                {
                    type: "button",
                    text: {
                        type: "plain_text",
                        text: "Edit",
                        emoji: true,
                    },
                    value: "edit_123",
                    action_id: "actionId-2",
                },
            ],
        },
        {
            type: "divider",
        },
    ],
};
exports.RequestApprovalBlock = RequestApprovalBlock;
