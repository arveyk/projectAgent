import { PersonNoId, NotionUser } from "../controllers/userTypes";

/** A project with a name and a project id. */
export type ProjectWithName = {
  projectName: string;
  id: string;
};

/**
 * Type for all projects, Extracted/inferred, 
 * all projects Existing in database and
 * similar projects
 */
export type ProjectsReference = {
  project?: { id: string };
  existingProjects: ProjectWithName[];
  similarProjects?: { id: string }[];
}


/**
 * Existing task type
 */
export type ExistingTask = {
  taskTitle: string;
  assignees: PersonNoId[];
  assignedBy: PersonNoId[];
  dueDate?: string;
  startDate?: string;
  description: string;
  project?: {
    id: string;
  }[];
}

/**
 * A Task as extracted by the LLM.
 */
export type Task = {
  taskTitle: string;
  assignees: PersonNoId[];
  dueDate?: string;
  startDate?: string;
  description: string;
  project?: { id: string }[];
  existingProjects?: ProjectWithName[]; // # Perhaps should moved to another place
  similarProjects?: { id: string }[];
};

/**
 * A task as represented in Notion.
 */
export type NotionTask = {
  taskTitle: string;
  assignees: NotionUser[];
  assignedBy: NotionUser[];
  dueDate?: string;
  startDate?: string;
  description: string;
  project?: {
    id: string;
  }[];
};

/**
 * Task page For New tasks
 */
export type TaskPageNewTask = {
  task: NotionTask;
  pageId: string;
  url?: string;
}

/**
 * A task page for Existing tasks.
 */
export type TaskPage = {
  task: ExistingTask;
  pageId: string;
  url?: string;
};