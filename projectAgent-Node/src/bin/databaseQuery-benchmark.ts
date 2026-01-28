import { getProjects, getTasks } from "../utils/database/searchDatabase";

const tasks = await getTasks();
console.log(tasks.length);

const projects = await getProjects();
console.log(projects.length);
