import { formatSlackDate } from "../utils/timeHandling/dateHandler";
import { NotionUser } from "../utils/controllers/userTypes";
import { NotionTask, ExtractedTask } from "../utils/taskFormatting/task";

/**
 * Creates the Slack blocks for previewing the details of a new task.
 * @param notionTaskObj The new task.
 * @param assignees A list of people the task is assigned to.
 * @returns The Slack blocks for previewing the details of a new task.
 */
export function createTaskInfo(
  notionTaskObj: NotionTask,
  projects: {
    projectName: string,
    id: string
  }[],
  // extractedTask: ExtractedTask,
  assignees: NotionUser[],
) {
  const task = notionTaskObj;
  // const task = notionTask;
  const assigneesArr = assignees;
  let assigneeNames = "";
  let projectNames = "";
  console.log(
    `(createTaskInfo), assigneesArray: ${assigneesArr}, task${JSON.stringify(task)}`,
  );
  if (assigneesArr && Array.isArray(assigneesArr)) {
    assigneesArr.forEach((assignee) => {
      if (assignee) {
        assigneeNames += `${assignee.name} (${assignee.email})\n`;
      }
    });
    // Remove trailing comma and space
    assigneeNames = assigneeNames.slice(0, -1);
  }
  if (projects && Array.isArray(projects)) {
    projects.forEach((project) => {
      if (project) {
        const notionTaskProject = notionTaskObj.project || []
        // Only include projects within the Project field of notion task
        
        if (notionTaskProject.find((projElement) => projElement.id === project.id)) {
          projectNames += `${project.projectName}\n`;
        }
      }
    });
    // Remove trailing comma and space
    projectNames = projectNames.slice(0, -1);
  }

  console.log(`(createTaskInfo) task: ${JSON.stringify(task)}`);
  const columnLayoutBlock = [
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Task Title:*\n${task.taskTitle}`,
        },
        {
          type: "mrkdwn",
          text: `*Project:*\n${projectNames}`,
        },
      ],
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Due Date:*\n${task.dueDate ? formatSlackDate(new Date(task.dueDate)) : ""
            }`,
        },
        {
          type: "mrkdwn",
          text: `*Start Date:*\n${task.startDate !== new Date(NaN) && task.startDate !== undefined ? formatSlackDate(new Date(task.startDate)) : task.startDate}`,
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Assignees:*\n${assigneeNames}`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Description:*\n${task.description}`,
      },
    },
  ];

  return columnLayoutBlock;
}

/**
 * Creates the Slack blocks for previewing the details of a new task.
 * @param extractedTask The new task.
 * @param assignees A list of people the task is assigned to.
 * @returns The Slack blocks for previewing the details of a new task.
 */
export function createTaskInfoWithoutSelections(
  notionTask: NotionTask,
  // assignees: NotionUser[],
  projects: { projectName: string, id: string }[]
) {
  const task = notionTask;
  const assigneesArr = notionTask.assignees;
  const projectsArray = projects;

  let assigneeNames = "";
  let projectNames = "";

  console.log(
    `(createTaskInfo), assigneesArray: ${assigneesArr}, task${JSON.stringify(task)}`,
  );
  if (assigneesArr && Array.isArray(assigneesArr)) {
    assigneesArr.forEach((assignee) => {
      if (assignee) {
        assigneeNames += `${assignee.name} (${assignee.email})\n`;
      }
    });
    // Remove trailing comma and space
    assigneeNames = assigneeNames.slice(0, -1);
  }
  if (projectsArray && Array.isArray(projectsArray)) {
    projectsArray.forEach((project) => {
      if (project) {
        // `projectNames += `${project.projectName === "" ? " " : project.projectName}\n`;
        projectNames += `Project id: ${project.id === "" ? " " : project.id}\n`;
      }
    });
    // Remove trailing comma and space
    projectNames = projectNames.slice(0, -1);
  }
  console.log(`(createTaskInfo) task: ${JSON.stringify(task)}`);
  const columnLayoutBlock = [
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Task Title:*\n${task.taskTitle}`,
        },
        {
          type: "mrkdwn",
          text: `*Project:*\n${projectNames || "No Associated Project"}`,
        },
      ],
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Due Date:*\n${task.dueDate ? formatSlackDate(new Date(task.dueDate)) : ""
            }`,
        },
        {
          type: "mrkdwn",
          text: `*Start Date:*\n${task.startDate !== new Date(NaN) && task.startDate !== undefined ? formatSlackDate(new Date(task.startDate)) : task.startDate}`,
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Assignees:*\n${assigneeNames}`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Description:*\n${task.description}`,
      },
    },
  ];

  return columnLayoutBlock;
}

/**
 * Creates the options for a Slack dropdown menu.
 * @param listOfItems The items that will be put into the dropdowm menu.
 * @returns The options for a Slack dropdown menu.
 */
export function createOptions(
  whichToCreate: string,
  listOfItems: { projectName: string, id: string }[] | NotionUser[],
) {
  let index = 0;

  if (whichToCreate === "NotionUsers") {
    const userArray = listOfItems as NotionUser[];
    return userArray.map((person) => {
      return {
        text: {
          type: "plain_text",
          text: `${person.name} (${person.email})`,
          emoji: true,
        },
        value: `${index++}`,
      };
    });
  } else {
    const projectArray = listOfItems as { projectName: string, id: string}[];
    const optionsArray = projectArray.map((project) => {
      return {
        text: {
          type: "plain_text",
          text: `*${project.projectName}*`,
          emoji: true,
        },
        value: `${ "Project_" + index++}`,
      };
    });
    return optionsArray;
  }
}

/**
 * Creates Slack blocks to be used in previewing and confirming a new task and prompting the user to select assignees.
 * @param notionTask The task to be previewed.
 * @param selectBlockTitle Either "Assignee" or "Assigned by"
 * @param foundUsers A list of 0 or more Notion users who match the assignee of the task.
 * @returns A set of Slack blocks to be used in previewing and confirming a new task and prompting the user to select assignees.
 */
export function createNewTaskBlockWithSelections(
  notionTask: NotionTask,
  // extractedTask: ExtractedTask,
  projects: {
    projectName: string,
    id: string
  }[],
  selectBlockTitle: string,
  foundUsers: {
    identifiedUsers: NotionUser[];
    ambiguousUsers: NotionUser[];
  },
) {
  const taskInfo = createTaskInfo(notionTask, projects, foundUsers.identifiedUsers);

  console.log(`Creating ${selectBlockTitle} select block`);

  // Create options for ambiguous users
  const optionsToChooseFrom = createOptions(
    "NotionUsers",
    foundUsers.ambiguousUsers,
  );
  const projectOptions = createOptions(
    "Projects",
    projects
  );

  if (projects.length > 1) {
    return {
      text: "Creating a new Task?",
      replace_original: true,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*You Are About to Create a New Task*",
          },
        },
        ...taskInfo,
        {
          type: "input",
          element: {
            type: "multi_static_select",
            placeholder: {
              type: "plain_text",
              text: `Select ${selectBlockTitle}(s)`,
              emoji: true,
            },
            options: optionsToChooseFrom,
            action_id: "multi_select-action",
          },
          label: {
            type: "plain_text",
            text: `${selectBlockTitle}`,
            emoji: true,
          },
        },
        {
          type: "input",
          element: {
            type: "multi_static_select",
            placeholder: {
              type: "plain_text",
              text: `Select ${"Project"}(s)`,
              emoji: true,
            },
            options: projectOptions,
            action_id: "multi_select-action",
          },
          label: {
            type: "plain_text",
            text: `${"Projects"}`,
            emoji: true,
          },
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Confirm",
                emoji: true,
              },
              value: JSON.stringify({
                taskPageObject: {
                  task: notionTask,
                  pageId: "",
                  url: "",
                },
                userOptions: foundUsers.ambiguousUsers,
                projectOptions: projects
              }),
              style: "primary",
              action_id: "SelectionActionId-2",
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                emoji: true,
                text: "Cancel",
              },
              style: "danger",
              value: "discard_123",
              action_id: "actionId-1",
            },
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "*You can edit the task in Notion after adding it*",
            },
          ],
        },
      ],
    };
  }
  return {
    text: "Creating a new Task?",
    replace_original: true,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*You Are About to Create a New Task*",
        },
      },
      ...taskInfo,
      {
        type: "input",
        element: {
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: `Select ${selectBlockTitle}(s)`,
            emoji: true,
          },
          options: optionsToChooseFrom,
          action_id: "multi_select-action",
        },
        label: {
          type: "plain_text",
          text: `${selectBlockTitle}`,
          emoji: true,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Confirm",
              emoji: true,
            },
            value: JSON.stringify({
              taskPageObject: {
                task: notionTask,
                pageId: "",
                url: "",
              },
              userOptions: foundUsers.ambiguousUsers,
	      projectOptions: []
            }),
            style: "primary",
            action_id: "SelectionActionId-2",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Cancel",
            },
            style: "danger",
            value: "discard_123",
            action_id: "actionId-1",
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: "*You can edit the task in Notion after adding it*",
          },
        ],
      },
    ],
  };
}

/**
 * Creates Slack blocks to be used in previewing and confirming a new task.
 * @param notionTask The task to be previewed.
 * @returns A set of Slack blocks to be used in previewing and confirming a new task.
 */
export const createTaskBlockWithoutSelections = function (
  notionTask: NotionTask,
  projects: { projectName: string, id: string}[]
  // extractedTask: ExtractedTask
) {
  const ColumnLayoutTaskInfo = createTaskInfoWithoutSelections(notionTask, projects);
  const blockNewTask = {
    text: "Creating a new Task?",
    replace_original: true,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*You Are About to Create a New Task*",
        },
      },
      ...ColumnLayoutTaskInfo,
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Confirm",
              emoji: true,
            },
            value: JSON.stringify({
              taskPageObject: {
                task: notionTask,
                pageId: "",
                url: "",
              },
              userOptions: [],
            }),
            style: "primary",
            action_id: "actionId-2",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Cancel",
            },
            style: "danger",
            value: "discard_123",
            action_id: "actionId-1",
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: "*You can edit the task in Notion after adding it*",
          },
        ],
      },
    ],
  };
  return blockNewTask;
};
