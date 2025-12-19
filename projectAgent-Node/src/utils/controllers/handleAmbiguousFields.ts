import { NotionUser } from "./userTypes";
import {
  UserSearchResult
} from "../../utils/controllers/userTypes";
import { createSelectionBlock } from "../../blockkit/create_select_columnlayout";
import { createColumnLayoutBlockNewTask } from "../../blockkit/columnLayoutBlock";
import { NotionTask } from "../task";
import { Task, TaskPage } from "../../utils/task"

const task: Task = {
  "taskTitle": "Give estimate of project agent completion date",
  "assignees": [
    {
      "name": "James Dirksen",
      //"email": "james.dirksen@solutional.com"
    }
  ],
  "dueDate": new Date("2025-12-19T14:00:00.000Z"),
  "startDate": undefined,
  "description": " Give us an estimate of project agent completion date",
  "project": "agent"
};


export function handleAmbiguousFields(userSearchResult: UserSearchResult[]) {
  console.log("(handleAmbiguousFields)");
  const identifiedUsers: NotionUser[] = [];
  const ambiguousUsers: NotionUser[] = [];

  /*
   * we might not need the tasks arg after all
   * naaa we do
   */
  for (const user of userSearchResult) {
    console.log(user.person.name);

    console.log(`Is the assignee unclear? ${user.foundUsers.length !== 1}`);
    /*for (const assignee of task.assignees) {
      console.log(`is this user ${user.person} the same as ${assignee} ${user === user.person}`);
    }*/
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
    return createSelectionBlock(notionTask, "Assignee",
      {
        identifiedUsers,
        ambiguousUsers
      }
    );
  } else {
    return createColumnLayoutBlockNewTask({
      task: notionTask,
      pageId: "",
      url: ""
    })
  };
}
