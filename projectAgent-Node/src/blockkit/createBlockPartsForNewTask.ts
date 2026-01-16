import { formatSlackDate } from "../utils/timeHandling/dateHandler";
import { NotionUser } from "../utils/controllers/userTypes";
import {
  FoundUsers,
  NotionTask,
  ProjectWithName
} from "../utils/taskFormatting/task";



/**
 * Function to create the markdown message for the identified assignees names
 *    to be displayed
 * @param assigneesArray: array of assignees to be displayed
 * 
 * @returns: The string of assignee names to be displayed
 */
function createAssigneesDisplayMessageFromArray(assigneesArray: NotionUser[]) {
  let assigneeNames = "";

  assigneesArray.forEach((assignee) => {
    if (assignee) {
      assigneeNames += `${assignee.name} (${assignee.email})\n`;
    }
  });
  // Remove trailing comma and space
  assigneeNames = assigneeNames.slice(0, -1);

  return assigneeNames;
}
/**
 * Function to create the markdown message for the identified project
 *    to be displayed by name
 * @param notionTaskProjectsArray: array of projects
 * @param allProjectsArray: 
 * 
 * @returns: string of project names
 */
function createProjectsDisplayMessageFromArray(notionTaskProjectsArray: {id: string}[], allProjectsArray: ProjectWithName[]) {
  let projectNames = "";

  allProjectsArray.forEach((project) => {
    if (project) {

        // Only include projects within the Project field of notionTask not all projects
        // need to be displayed, only those relevant to the task.
        if (allProjectsArray.find((projectElem) => projectElem.id === project.id)) {
          projectNames += `${project.projectName}\n`;
        }
      }
    });
    
  // Remove trailing comma and space
  projectNames = projectNames.slice(0, -1);

  return projectNames;
}

/**
 * Creates the info section of Slack blocks for previewing the details of a new task.
 * @param notionTaskObj: The new task.
 * @param projects:      Projects with names used in creating the task info to be displayed
 * @param assignees:     A list of people the task is assigned to.
 * 
 * @returns:             The Slack blocks for previewing the details of a new task.
 */
export function createTaskInfo(
  notionTask: NotionTask,
  projects: ProjectWithName[],
  assignees: NotionUser[],
) {
  const notionTaskProject = notionTask.project || []
  const assigneesArray = assignees;
  const assigneeNames = createAssigneesDisplayMessageFromArray(assigneesArray);

  let projectNames = "";//createProjectsDisplayMessageFromArray(projects);
  console.log(
    `(createTaskInfo), assigneesArray: ${assigneesArray}, task${JSON.stringify(notionTask)}`,
  );

  if (projects && Array.isArray(projects)) {
    projectNames += createProjectsDisplayMessageFromArray(notionTaskProject, projects)
  }

  console.log(`(createTaskInfo) task: ${JSON.stringify(notionTask)}`);
  const columnLayoutBlock = [
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Task Title:*\n${notionTask.taskTitle}`,
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
          text: `*Due Date:*\n${notionTask.dueDate ? formatSlackDate(new Date(notionTask.dueDate)) : ""
            }`,
        },
        {
          type: "mrkdwn",
          text: `*Start Date:*\n${notionTask.startDate !== new Date(NaN) && notionTask.startDate !== undefined ? formatSlackDate(new Date(notionTask.startDate)) : notionTask.startDate}`,
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
        text: `*Description:*\n${notionTask.description}`,
      },
    },
  ];

  return columnLayoutBlock;
}

/**
 * Creates the info section of Slack blocks for previewing the details of a new task.
 * @param notionTask: The new task.
 * @param projects:   A list of projects from notion that we need to compare with and use their names
 *    in displaying on slack.
 * 
 * @returns The Slack blocks for previewing the details of a new task.
 */
export function createTaskInfoWithoutSelections(
  notionTask: NotionTask,
  allProjectsArray: ProjectWithName[]
) {
  const assigneesArray = notionTask.assignees;

  const assigneeNames = createAssigneesDisplayMessageFromArray(assigneesArray);
  let projectNames = "";

  console.log(
    `(createTaskInfoWithoutSelections), assigneesArray: ${assigneesArray}, task${JSON.stringify(notionTask)}`,
  );
  
  if (allProjectsArray && Array.isArray(allProjectsArray)) {
    allProjectsArray.forEach((project) => {
      if (project) {
        // `projectNames += `${project.projectName === "" ? " " : project.projectName}\n`;
        projectNames += `${project.projectName === "" ? " " : project.projectName}\n`;
      }
    });
    // Remove trailing comma and space
    projectNames = projectNames.slice(0, -1);
  }
  const columnLayoutBlock = [
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Task Title:*\n${notionTask.taskTitle}`,
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
          text: `*Due Date:*\n${notionTask.dueDate ? formatSlackDate(new Date(notionTask.dueDate)) : ""
            }`,
        },
        {
          type: "mrkdwn",
          text: `*Start Date:*\n${notionTask.startDate !== new Date(NaN) && notionTask.startDate !== undefined ? formatSlackDate(new Date(notionTask.startDate)) : notionTask.startDate}`,
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
        text: `*Description:*\n${notionTask.description}`,
      },
    },
  ];

  return columnLayoutBlock;
}

/**
 * Creates the options for a Slack dropdown menu.
 * @param whichToCreate:  String to indicate what the user is selecting
 * @param listOfItems:    The items that will be put into the dropdowm menu.
 *    Either users or projects
 * 
 * @returns The options for a Slack dropdown menu.
 */
export function createOptions(
  whichToCreate: string,
  listOfItems: ProjectWithName[] | NotionUser[],
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
    const projectArray = listOfItems as ProjectWithName[];
    const optionsArray = projectArray.map((project) => {
      return {
        text: {
          type: "plain_text",
          text: `*${project.projectName}*`,
          emoji: true,
        },
        value: `${"Project_" + index++}`,
      };
    });
    return optionsArray;
  }
}

/**
 * Creates Slack blocks to be used in previewing and confirming a new task and prompting the user to select assignees.
 * @param notionTask:       The task to be previewed.
 * @param selectBlockTitle: Either "Assignee" or "Assigned by"
 * @param foundUsers:       An object that contains two lists, one (identifiedUsers)contains 0 or more Notion users who match the assignee of the task
 *    the other list (ambiguousUsers) contains users who are yet to be identified as assignees for the task.
 * 
 * @returns A set of Slack blocks to be used in previewing and confirming a new task and prompting the user to select assignees.
 */
export function createNewTaskBlockWithSelections(
  notionTask: NotionTask,
  allProjects: ProjectWithName[],
  foundUsers: FoundUsers
) {
  const taskInfo = createTaskInfo(notionTask, allProjects, foundUsers.identifiedUsers);
  const parsedProjects = notionTask.project || [];
  console.log(`Creating selection block`);

  // Create options for ambiguous users
  const userOptionsToChooseFrom = createOptions(
    "NotionUsers",
    foundUsers.ambiguousUsers,
  );
  const projectOptions = createOptions(
    "Projects",
    allProjects
  );


  if (parsedProjects.length === 0 && userOptionsToChooseFrom.length > 1) {
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
              text: "Select Assignee(s)",
              emoji: true,
            },
            options: userOptionsToChooseFrom,
            action_id: "multi_select-action",
          },
          label: {
            type: "plain_text",
            text: "Assignees",
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
                projectOptions: allProjects
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

  if (parsedProjects.length === 0) {
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
                projectOptions: allProjects
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
            text: `Select Assignee(s)`,
            emoji: true,
          },
          options: userOptionsToChooseFrom,
          action_id: "multi_select-action",
        },
        label: {
          type: "plain_text",
          text: "Assignees",
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
 * @param notionTask: The task to be previewed.
 * @param projects:   All projects present in the notion database
 * 
 * @returns:          A set of Slack blocks to be used in previewing and confirming a new task.
 */
export const createTaskBlockWithoutSelections = function (
  notionTask: NotionTask,
  projects: ProjectWithName[]
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


/**
 * Creates Slack blocks to be used in previewing and confirming a new task and prompting the user to select assignees.
 * @param notionTask The task to be previewed.
 * @param allProjects: All projects that exist in the notion database
 * @param similarProjects: projects that are ambiguous and similar, to be clarified
 *    by the user in the selections block.
 * @param foundUsers An object that contains two lists, one (identifiedUsers)contains 0 or more Notion users who match the assignee of the task
 *    the other list (ambiguousUsers) contains users who are yet to be identified.
 * 
 * @returns A set of Slack blocks to be used in previewing and confirming a new task and prompting the user to select assignees.
 */
export function createNewTaskBlockWithSelectionsForAmbiguousProjects(
  notionTask: NotionTask,
  allProjects: ProjectWithName[],
  similarProjects: { id: string }[],
  foundUsers: {
    identifiedUsers: NotionUser[];
    ambiguousUsers: NotionUser[];
  },
) {
  const taskInfo = createTaskInfo(notionTask, allProjects, foundUsers.identifiedUsers);

  // Create options for ambiguous users
  const userOptionsToChooseFrom = createOptions(
    "NotionUsers",
    foundUsers.ambiguousUsers,
  );

  // This is an array that will contain the projects the AI was not able to
  // figure out amongst all the existing projects, if it should include in the task
  // since from the users message there are several possible matches.
  const arrayOfProjectToSelectFrom: ProjectWithName[] = [];

  similarProjects.forEach((projToSelect) => {
    allProjects.forEach((projectFromNotion) => {
      if (projectFromNotion.id === projToSelect.id) {
        arrayOfProjectToSelectFrom.push(projectFromNotion)
      }
    })
  });

  const projectOptionsToChooseFrom = createOptions(
    "Projects",
    arrayOfProjectToSelectFrom
  )


  if (userOptionsToChooseFrom.length > 1) {
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
              text: "Select Assignee(s)",
              emoji: true,
            },
            options: userOptionsToChooseFrom,
            action_id: "multi_select-action",
          },
          label: {
            type: "plain_text",
            text: "Assignee(s)",
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
            options: projectOptionsToChooseFrom,
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
                projectOptions: arrayOfProjectToSelectFrom
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
            text: `Select ${"Project"}(s)`,
            emoji: true,
          },
          options: projectOptionsToChooseFrom,
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
              projectOptions: arrayOfProjectToSelectFrom
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