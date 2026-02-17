import { CacheData } from "../utils/database/getFromCache";
import { getProjects, getTasks } from "../utils/database/searchDatabase";

// This benchmarks getting tasks and projects when there is nothing in the cache.
// The API call that retrieves the whole cache from DynamoDB happens at the beginning of slashCmdHandler.
const cacheItems: CacheData = {
    users: null,
    tasks: null,
    projects: null
};

const tasks = await getTasks(cacheItems);
console.log(tasks.length);

const projects = await getProjects(cacheItems);
console.log(projects.length);
