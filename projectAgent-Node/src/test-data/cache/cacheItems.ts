import { CacheData } from "../../utils/database/getFromCache";
import { EXAMPLE_RAW_PROJECTS_RESPONSE } from "./rawProjects";
import { EXAMPLE_RAW_TASKS_RESPONSE } from "./rawTasks";
import { EXAMPLE_RAW_USERS_RESPONSE } from "./rawUsers";

export const CACHE_DATA_EXAMPLE_ALL: CacheData = {
  projects: EXAMPLE_RAW_PROJECTS_RESPONSE,
  tasks: EXAMPLE_RAW_TASKS_RESPONSE,
  users: EXAMPLE_RAW_USERS_RESPONSE,
};

export const CACHE_DATA_EXAMPLE_NO_USERS: CacheData = {
  projects: EXAMPLE_RAW_PROJECTS_RESPONSE,
  tasks: EXAMPLE_RAW_TASKS_RESPONSE,
  users: null,
};
export const CACHE_DATA_EXAMPLE_NO_TASKS: CacheData = {
  projects: EXAMPLE_RAW_PROJECTS_RESPONSE,
  tasks: null,
  users: EXAMPLE_RAW_USERS_RESPONSE,
};

export const CACHE_DATA_EXAMPLE_NO_PROJECTS: CacheData = {
  projects: null,
  tasks: EXAMPLE_RAW_TASKS_RESPONSE,
  users: EXAMPLE_RAW_USERS_RESPONSE,
};
