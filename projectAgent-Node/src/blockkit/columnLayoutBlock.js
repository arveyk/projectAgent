"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createColumnLayoutBlockNewTask = exports.createColumnLayoutTaskInfoBlock = void 0;
var dateHandler_1 = require("../utils/dateHandler");
var luxon_1 = require("luxon");
var createColumnLayoutTaskInfoBlock = function (taskPageObj) {
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
    /**
     * Replacing with column layout having sections
     *
     */
    var columnLayoutBlock = [
        {
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": "*Task Title:*\n".concat(task.taskTitle)
                },
                {
                    "type": "mrkdwn",
                    "text": "*Assignees:*\n".concat(assigneeNames)
                }
            ]
        },
        {
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": "*Due Date:*\n".concat((0, dateHandler_1.formatSlackDate)(new Date(task.dueDate)))
                },
                {
                    "type": "mrkdwn",
                    "text": "*Start Date:*\n".concat(task.startDate !== new Date(NaN) && task.startDate !== undefined ? (0, dateHandler_1.formatSlackDate)(new Date(task.startDate)) : task.startDate)
                },
                {
                    "type": "mrkdwn",
                    "text": "*Project:*\n".concat(task.project || " ")
                }
            ]
        },
        {
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": "*Description:*\n".concat(task.description)
                }
            ]
        }
    ];
    return columnLayoutBlock;
};
exports.createColumnLayoutTaskInfoBlock = createColumnLayoutTaskInfoBlock;
var createColumnLayoutBlockNewTask = function (taskPageObj) {
    var task = taskPageObj.task;
    // console.log("Another console.log, Task", JSON.stringify(task));
    var ColumnLayoutTasksInfo = (0, exports.createColumnLayoutTaskInfoBlock)(taskPageObj);
    return {
        text: "Creating a new Task?",
        replace_original: true,
        blocks: __spreadArray(__spreadArray([], ColumnLayoutTasksInfo, true), [
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
        ], false),
    };
};
exports.createColumnLayoutBlockNewTask = createColumnLayoutBlockNewTask;
