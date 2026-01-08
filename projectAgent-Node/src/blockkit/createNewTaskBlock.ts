import { NotionUser } from "../utils/controllers/userTypes";
import { UserSearchResult } from "../utils/controllers/userTypes";
import { 
  createNewTaskBlockWithSelections,
  createTaskBlockWithoutSelections
 } from "./createBlockPartsForNewTask";
import { 
  NotionTask, 
  Task, 
  // ExtractedTask
} from "../utils/taskFormatting/task";

/**
 * Creates a set of Slack blocks to be used in previewing and confirming a new task.
 * @param task The task to be previewed.
 * @param userSearchResult A list of 0 or more Notion users who match the assignee of the task.
 * @returns A set of Slack blocks to be used in previewing and confirming a new task.
 */
export function createNewTaskBlock(
  task: Task,
  projects: { projectName: string, id: string }[],
  userSearchResult: UserSearchResult[],
) {
  console.log("(createNewTaskBlock)");
  const identifiedUsers: NotionUser[] = [];
  const ambiguousUsers: NotionUser[] = [];

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
    assignedBy: identifiedUsers,
    dueDate: task.dueDate,
    startDate: task.startDate,
    description: task.description,
    project: task.project,
  };
  if (ambiguousUsers.length > 0) {
    return createNewTaskBlockWithSelections(notionTask, projects,"Assignee", {
      identifiedUsers,
      ambiguousUsers,
    });
  } else {
    let projectsArray: {projectName: string, id: string}[] = [];
    if (notionTask.project) {
      projectsArray = projects.filter((queriedProject) => {
        if (notionTask.project) {
          for (const proj of notionTask.project) {
          if (proj.id === queriedProject.id) return queriedProject
        }
      }
      });
    }
    return createTaskBlockWithoutSelections(notionTask, projectsArray);
  }
}
