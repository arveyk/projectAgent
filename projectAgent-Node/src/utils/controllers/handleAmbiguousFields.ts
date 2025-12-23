import { NotionUser } from "./userTypes";
import {
  UserSearchResult
} from "../../utils/controllers/userTypes";
import { createNewTaskBlockWithSelections } from "../../blockkit/createNewTaskBlock";
import { createNewTaskBlockWithoutSelections } from "../../blockkit/columnLayoutBlock";
import { NotionTask } from "../task";
import { Task, TaskPage } from "../../utils/task"


export function createNewTaskBlock(task: Task, userSearchResult: UserSearchResult[]) {
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

  // console.log(`Ambiguity cleared${JSON.stringify(identifiedUsers, null, 4)} vs ${JSON.stringify(ambiguousUsers, null, 4)}?`)

  /**
   * Now create selection block
   * if there are ambiguous users, create a selections block
   * else create a normal block
   */
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
    return createNewTaskBlockWithSelections(notionTask, "Assignee",
      {
        identifiedUsers,
        ambiguousUsers
      }
    );
  } else {
    return createNewTaskBlockWithoutSelections({
      task: notionTask,
      pageId: "",
      url: ""
    })
  };
}
