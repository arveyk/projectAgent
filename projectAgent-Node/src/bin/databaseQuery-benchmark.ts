import { getTasks } from "../utils/database/searchDatabase";

const tasks = await getTasks();
console.log(tasks.length);
