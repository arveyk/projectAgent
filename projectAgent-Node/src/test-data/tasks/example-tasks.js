"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSubstr2 = exports.taskSubstr = exports.taskHarvey = exports.taskInferDates = exports.taskGood = exports.task_unknown_fields = exports.task_feed_cats = exports.task_not_in_db = exports.task_in_db_reworded = exports.task_in_db = exports.task = void 0;
exports.task = {
    taskTitle: "Schedule meeting with customer",
    assignee: "Jacob",
    dueDate: new Date("2025-05-11"),
    startDate: new Date("2025-01-11"),
    phoneNumber: "555-555-5555",
    email: "jacob@email.com",
    preferredChannel: "Slack",
    description: "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
};
exports.task_in_db = {
    taskTitle: "Build prototype",
    assignee: "Callie",
    dueDate: new Date("2025-08-06"),
    startDate: new Date("2025-07-30"),
    phoneNumber: "555-555-5555",
    email: "callie@email.com",
    preferredChannel: "Slack",
    description: "Build the prototype",
};
exports.task_in_db_reworded = {
    taskTitle: "Create event supply list",
    assignee: "Ellanie",
    dueDate: new Date("2025-08-04"),
    startDate: new Date("2025-07-31"),
    phoneNumber: "555-555-5555",
    email: "ellanie@ellaniemail.com",
    preferredChannel: "Slack",
    description: "Create a list of all the supplies needed for the event and give it to Joe",
};
exports.task_not_in_db = {
    taskTitle: "Take over the Tri-State Area",
    assignee: "Heinz",
    dueDate: new Date("2025-05-11"),
    startDate: new Date("2026-01-11"),
    phoneNumber: "555-555-5555",
    email: "heinz@doofenshmirtz.com",
    preferredChannel: "Slack",
    description: "Take over the Tri-State Area",
};
exports.task_feed_cats = {
    taskTitle: "Feed the cats",
    assignee: "Josh",
    dueDate: new Date("2023-08-07"),
    startDate: new Date("2023-08-01"),
    phoneNumber: "123-456-7890",
    email: "josh@example.com",
    preferredChannel: "Slack",
    description: "Feed the cats every day from August 1 to August 7. Give them their pills and ensure they have enough clean water.",
};
exports.task_unknown_fields = {
    tasktitle: "Schedule meeting with customer",
    assignee: "Jacob",
    duedate: "2025-05-11",
    startdate: "<UNKNOWN>",
    phonenumber: "<UNKNOWN>",
    email: "jacob@email.com",
    preferredChannel: "Slack",
    taskdetail: "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
};
exports.taskGood = {
    taskTitle: "Finish the mural",
    assignee: "Jeff",
    dueDate: new Date("2025-09-01"),
    startDate: new Date("2025-08-06"),
    preferredChannel: "Slack",
    description: "Finish the mural, preferably by September 1",
};
exports.taskInferDates = {
    taskTitle: "Gather information and write report on similar products",
    assignee: "Ellen",
    dueDate: new Date("2025-08-06"),
    startDate: new Date("2025-08-05"),
    preferredChannel: "Slack",
    description: "Gather information about similar preexisting products and write up a report",
};
exports.taskHarvey = {
    taskTitle: "Send photos for LinkedIn shout out",
    assignee: "Harvey",
    dueDate: new Date("2025-08-06"),
    startDate: new Date("2025-08-05"),
    preferredChannel: "Slack",
    description: "Send some photos for a LinkedIn shout out",
};
exports.taskSubstr = {
    taskTitle: "Crown the winner",
    assignee: "Dan",
    dueDate: new Date("2025-10-7"),
    startDate: new Date("2025-10-02"),
    preferredChannel: "Slack",
    description: "Crown the winner of the marathon with the golden diadem, and a sash of silver"
};
exports.taskSubstr2 = {
    taskTitle: "Organize the files",
    assignee: "Lyn",
    dueDate: new Date("2025-10-7"),
    startDate: new Date("2025-10-13"),
    preferredChannel: "Slack",
    description: "Contact out list of attendees for teh DCD conference next week Monday"
};
