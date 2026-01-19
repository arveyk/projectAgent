import { NotionUser } from "../utils/controllers/userTypes";
import { UserSearchResult } from "../utils/controllers/userTypes";
import {
  createNewTaskBlockWithSelections,
  createNewTaskBlockWithSelectionsForAmbiguousProjects,
  createTaskBlockWithoutSelections,
} from "./createBlockPartsForNewTask";
import {
  NewNotionTask,
  NotionTask,
  ProjectWithName,
  Task,
} from "../utils/taskFormatting/task";

/**
 * Creates a set of Slack blocks to be used in previewing and confirming a new task.
 * @param assignedBy:       user who is creating and assigning the task
 * @param task:             The task to be previewed.
 * @param userSearchResult: A list of 0 or more Notion users who match the assignee of the task.
 *
 * @returns                 A set of Slack blocks to be used in previewing and confirming a new task.
 */
export async function createNewTaskBlock(
  assignedBy: NotionUser[],
  task: Task,
  userSearchResult: UserSearchResult[],
) {
  console.log("(createNewTaskBlock)");
  const identifiedUsers: NotionUser[] = [];
  const ambiguousUsers: NotionUser[] = [];
  const taskProjects = task.project || [];
  const projects: ProjectWithName[] = task.existingProjects || [];
  const similarProjects = task.similarProjects || [];

  for (const user of userSearchResult) {
    console.log(user.person.name);

    console.log(`Is the assignee unclear? ${user.foundUsers.length !== 1}`);
    if (user.foundUsers.length <= 1) {
      identifiedUsers.push(...user.foundUsers);
    } else {
      ambiguousUsers.push(...user.foundUsers);
    }
  }

  //  Now create selection block
  //  if there are ambiguous users, create a selections block
  //  else create a normal block

  
  const notionTask: NotionTask = {
    taskTitle: task.taskTitle,
    assignees: identifiedUsers,
    assignedBy: assignedBy,
    dueDate: task.dueDate,
    startDate: task.startDate,
    description: task.description,
    project: task.project,
  };

  const notionTaskWithProjectNames: NewNotionTask = {
    taskTitle: task.taskTitle,
    assignees: identifiedUsers,
    assignedBy: assignedBy,
    dueDate: task.dueDate,
    startDate: task.startDate,
    description: task.description,
    project: [],
  }

  for (const project of projects) {
    if (taskProjects.includes({id: project.id})){
      notionTaskWithProjectNames.project ? 
      notionTaskWithProjectNames.project.push(project): notionTaskWithProjectNames.project = [project];
    }
  }


  if (similarProjects.length > 0) {
    return createNewTaskBlockWithSelectionsForAmbiguousProjects(
      notionTaskWithProjectNames,
      projects,
      similarProjects,
      {
        identifiedUsers,
        ambiguousUsers,
      },
    );
  }
  if (ambiguousUsers.length > 0 || taskProjects.length === 0) {
    return createNewTaskBlockWithSelections(
      notionTaskWithProjectNames,
      projects,
      // similarProjects,
      {
        identifiedUsers,
        ambiguousUsers,
      },
    );
  } else {
    /**
     * 
    
    let projectsArray: ProjectWithName[] = [];

    for (const projectInTaskProjectsArray of taskProjects) {
      const found = projects.filter((queriedProject) => {
        if (projectInTaskProjectsArray.id === queriedProject.id)
          return queriedProject;
      });
      projectsArray.push(...found);
    }
      */
    return createTaskBlockWithoutSelections(notionTaskWithProjectNames);
  }
}
