import { NotionUser } from "../utils/controllers/userTypes";
import { UserSearchResult } from "../utils/controllers/userTypes";
import {
  createNewTaskBlockWithUserAndOrProjectsSelections,
  createNewTaskBlockWithSelectionsForAmbiguousProjects,
  createTaskBlockWithoutSelections,
} from "./createBlockPartsForNewTask";
import {
  NotionTask,
  ProjectWithName,
  Task
} from "../domain";

/**
 * Creates a set of Slack blocks to be used in previewing and confirming a new task.
 * @param assignedBy:       The user who is creating and assigning the task
 * @param allNotionUsers    All users exisiting in Database
 * @param userSearchResult: A list of 0 or more Notion users who match the assignee of the task.
 * @param parsedTask:       The task to be previewed.
 *
 * @returns                 A set of Slack blocks to be used in previewing and confirming a new task.
 */
export function createNewTaskBlock(
  assignedBy: NotionUser[],
  allNotionUsers: NotionUser[],
  userSearchResult: UserSearchResult[],
  parsedTask: Task,
) {
  console.log("(createNewTaskBlock)");
  const identifiedUsers: NotionUser[] = [];
  const ambiguousUsers: NotionUser[] = [];
  const taskProjects = parsedTask.project || [];
  const allExistingProjects: ProjectWithName[] = parsedTask.existingProjects || [];
  const similarProjects = parsedTask.similarProjects || [];

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
    taskTitle: parsedTask.taskTitle,
    assignees: identifiedUsers,
    assignedBy: assignedBy,
    dueDate: parsedTask.dueDate,
    startDate: parsedTask.startDate,
    description: parsedTask.description,
    project: parsedTask.project,
  };

  if (similarProjects.length > 0) {
    console.log("Calling createNewTaskBlockWithSelectionsForAmbiguousProjects");
    return createNewTaskBlockWithSelectionsForAmbiguousProjects(
      notionTask,
      {
        allProjects: allExistingProjects,
        similarProjects
      },
      {
        allUsers: allNotionUsers,
        foundUsers: {
          identifiedUsers,
          ambiguousUsers,
        }
      },
    );
  }
  
  if ((notionTask.assignees.length === 0 || ambiguousUsers.length > 0) || taskProjects.length === 0) {
    console.log("Calling createNewTaskBlockWithUsersAndOrProjectsSelections");
    return createNewTaskBlockWithUserAndOrProjectsSelections(
      notionTask,
      allExistingProjects,
      allNotionUsers,
      {
        identifiedUsers,
        ambiguousUsers,
      },
    );
  }

  console.log("Calling createTaskBlockWithoutSelections");
  let projectsArray: ProjectWithName[] = [];

  for (const projectInTaskProjectsArray of taskProjects) {
    const found = allExistingProjects.filter((queriedProject) => {
      if (projectInTaskProjectsArray.id === queriedProject.id)
        return queriedProject;
    });
    projectsArray.push(...found);
  }
  return createTaskBlockWithoutSelections(notionTask, projectsArray);

}
