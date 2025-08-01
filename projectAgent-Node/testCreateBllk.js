import { createBlockNewTask } from "./blockkit/createBlocks.js";


const taskArr = {
           "Task Title": "Compose a violin piece",
           "Assignee": "Boccherini",
           "Due Date": "7-08-2025",
           "Start Date": "09-2-2024",
           "Email": "example@replaceme.com",
           "Phone Number": "244-328-38717",
           "Preferred Channel": "Phone Call",
           "Task Details": "Boccherini compose a beautiful violin piece for the national parade",
};

console.log(await(createBlockNewTask(taskArr)));
