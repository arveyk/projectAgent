import { getProjects } from "../utils/database/searchDatabase";
import { ProjectWithName, TaskPage } from "../utils/taskFormatting/task";
import { createTaskInfoWithoutSelections } from "./createBlockPartsForNewTask";

/**
 * Creates a set of Slack blocks to be used in previewing and updating an existing task.
 * @param taskPage: The task to be previewed.
 *
 * @returns:        A set of Slack blocks to be used in previewing and updating an existing task.
 */
export async function createExistingTaskBlock(taskPage: TaskPage) {
  const taskUrl = taskPage.url;
  const associatedProjects = taskPage.task.project || [];
  const existingProjects = await getProjects();

  const taskProjects: ProjectWithName[] = [];

  for (const taskProject of associatedProjects) {
    const foundProject = existingProjects.find((project) => {
      if (project.id === taskProject.id) {
        return project;
      }
    });
    if (foundProject) {
      taskProjects.push(foundProject);
    }
  }

  const sectionInfo = createTaskInfoWithoutSelections(
    taskPage.task,
    taskProjects,
  );
  return {
    text: "Updating a Task?",
    replace_original: true,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Task already exists, would you like to update it?",
          emoji: true,
        },
      },
      ...sectionInfo,
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Edit in Notion",
              emoji: true,
            },
            value: `${JSON.stringify(taskPage)}`,
            url: `${taskUrl}`,
            action_id: "updateId-01",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Cancel",
              emoji: true,
            },
            value: "click_me_123",
            style: "danger",
            action_id: "cancelUpdateId-02",
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: "*You can edit the task in Notion after confirming*",
          },
        ],
      },
    ],
  };
}
