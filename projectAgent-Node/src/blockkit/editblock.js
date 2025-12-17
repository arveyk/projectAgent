"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskInfoBlock = void 0;
exports.createFinalBlock = createFinalBlock;
exports.createDoneBlock = createDoneBlock;
var dateHandler_1 = require("../utils/dateHandler");
var luxon_1 = require("luxon");
var createTaskInfoBlock = function (taskPageObj) {
    /**
     * Temporarry fix for Date format issue
     */
    // task.dueDate = new Date(task.dueDate);
    var task = taskPageObj.task;
    var assigneesArr = task.assignees;
    var assigneeNames = "";
    console.log("(createTaskInfoBlock), assigneesArray: ".concat(assigneesArr, ", task").concat(JSON.stringify(task)));
    if (assigneesArr && Array.isArray(assigneesArr)) {
        assigneesArr.forEach(function (assignee) {
            if (assignee) {
                assigneeNames += "".concat(assignee.name, " --- ").concat(assignee.email, "\n");
            }
        });
        assigneeNames = assigneeNames.slice(0, -1); // Remove trailing comma and space
    }
    task.startDate =
        task.startDate && task.startDate.toString() !== "Invalid Date"
            ? new Date(task.startDate)
            : luxon_1.DateTime.now().toJSDate();
    console.log("(createtaskInfoBlock) task: ".concat(JSON.stringify(taskPageObj)));
    console.log("CreateTaskInfoBlock log message => task: ".concat(JSON.stringify(task)));
    return "*Task Title:*\t\t\t".concat(task.taskTitle, " \n*Assignees:* \t\t\t").concat(assigneeNames, "\n*Due Date:*\t\t\t").concat((0, dateHandler_1.formatSlackDate)(new Date(task.dueDate)), "\n*Start Date:*\t\t\t").concat(task.startDate !== new Date(NaN) && task.startDate !== undefined ? (0, dateHandler_1.formatSlackDate)(task.startDate) : task.startDate, "\n*Description:* \t\t").concat(task.description, "\n*Project:* \t\t").concat(task.project || " ");
};
exports.createTaskInfoBlock = createTaskInfoBlock;
// export function createFinalBlock(task: Task) {
function createFinalBlock(taskPageObj) {
    var task = taskPageObj.task;
    task.project ? "Ok FinalBlock" : (task.project = " ");
    task.description ? "Ok FinalBlock" : (task.description = " ");
    return {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*Please approve to apply Changes or Decline by discard*",
                },
            },
            {
                type: "divider",
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: (0, exports.createTaskInfoBlock)(taskPageObj),
                },
            },
            {
                type: "divider",
            },
            {
                type: "actions",
                elements: [
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            emoji: true,
                            text: "Ok",
                        },
                        style: "primary",
                        value: "".concat(JSON.stringify(taskPageObj)), // value: `${JSON.stringify(taskPageObj)}`,
                        action_id: "actionId-0",
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
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            text: "Edit in Notion",
                            emoji: true,
                        },
                        value: JSON.stringify(taskPageObj), //  value: JSON.stringify(taskPageObj),
                        action_id: "actionId-2",
                    },
                ],
            },
        ],
    };
}
function createDoneBlock(taskPageObj) {
    var task = taskPageObj.task;
    task.project ? "Ok FinalBlock" : (task.project = " ");
    task.description ? "Ok FinalBlock" : (task.description = " ");
    return {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*Task Created/Update in Notion*",
                },
            },
            {
                type: "divider",
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: (0, exports.createTaskInfoBlock)(taskPageObj),
                },
            },
            {
                type: "divider",
            },
            {
                type: "actions",
                elements: [
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            emoji: true,
                            // text: "Approve",
                            text: "Ok",
                        },
                        style: "primary",
                        value: "".concat(JSON.stringify(taskPageObj)), // value: `${JSON.stringify(taskPageObj)}`,
                        action_id: "actionId-0",
                    },
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            emoji: true,
                            text: "Delete Task",
                        },
                        style: "danger",
                        value: JSON.stringify(taskPageObj), //  value: JSON.stringify(taskPageObj),
                        action_id: "actionId-1",
                    },
                    {
                        type: "button",
                        text: {
                            type: "plain_text",
                            text: "Done",
                            emoji: true,
                        },
                        value: "Done_123",
                        action_id: "actionId-2",
                    },
                ],
            },
        ],
    };
}
