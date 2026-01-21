import { formatSlackDate } from "../utils/timeHandling/dateHandler";
import { NotionUser } from "../utils/controllers/userTypes";
import {
  FoundUsers,
  NotionTask,
  ProjectWithName,
} from "../utils/taskFormatting/task";

// Type for options created for the selections menu
type MenuType = {
  text: {
    type: string;
    text: string;
    emoji: boolean;
  };
  value: string;
};

// TaskInfo types the information section that displays task info in a block
type TaskInfo = (
  | {
      type: string;
      fields: {
        type: string;
        text: string;
      }[];
      text?: undefined;
    }
  | {
      type: string;
      text: {
        type: string;
        text: string;
      };
      fields?: undefined;
    }
)[];

/**
 * Function to combine assignee names separated by new line characters
 * @param assigneesArray: array of assignees to be displayed
 *
 * @returns: The string of assignee names to be displayed
 */
function createAssigneesDisplayMessageFromArray(
  assigneesArray: NotionUser[],
): string {
  let assigneeNames = "";

  assigneesArray.forEach((assignee) => {
    if (assignee) {
      assigneeNames += `${assignee.name} (${assignee.email})\n`;
    }
  });

  // Remove trailing comma and new line character placed at the end of each
  // assignee.name added into assigneeNames variable
  assigneeNames = assigneeNames.slice(0, -1);

  return assigneeNames;
}
/**
 * Function to create the markdown message for the identified project to be displayed by name
 * @param notionTaskProjectsArray: array of projects
 * @param allProjectsArray:
 *
 * @returns: string of project names
 */
function createProjectsDisplayMessageFromArray(
  notionTaskProjectsArray: { id: string }[],
  allProjectsArray: ProjectWithName[],
): string {
  let projectNames = "";

  allProjectsArray.forEach((project) => {
    if (project) {
      // Only include projects that match the Project field of notionTask.
      // Not all projects need to be displayed, only those relevant to the task.
      if (
        notionTaskProjectsArray.find(
          (projectElem) => projectElem.id === project.id,
        )
      ) {
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
 * @param notionTask: The new task.
 * @param allProjects:   Projects with names used in creating the task info to be displayed
 * @param assignees:     A list of people the task is assigned to.
 *
 * @returns:             The Slack blocks for previewing the details of a new task.
 */
export function createTaskInfo(
  notionTask: NotionTask,
  allProjects: ProjectWithName[],
  assignees: NotionUser[],
) {
  const notionTaskProject = notionTask.project || [];
  const assigneesArray = assignees;
  const assigneeNames = createAssigneesDisplayMessageFromArray(assigneesArray);

  let projectNames = "";
  console.log(
    `(createTaskInfo), assigneesArray: ${assigneesArray}, task${JSON.stringify(notionTaskProject)}`,
  );

  if (allProjects && Array.isArray(allProjects)) {
    projectNames += createProjectsDisplayMessageFromArray(
      notionTaskProject,
      allProjects,
    );
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
          text: `*Due Date:*\n${
            notionTask.dueDate
              ? formatSlackDate(new Date(notionTask.dueDate))
              : ""
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
 * @param notionTask:       The new task.
 * @param allProjectsArray: A list of projects from notion that we need to compare with and use their names
 *    in displaying on slack.
 *
 * @returns The Slack blocks for previewing the details of a new task.
 */
export function createTaskInfoWithoutSelections(
  notionTask: NotionTask,
  allProjectsArray: ProjectWithName[],
) {
  const assigneesArray = notionTask.assignees;

  const assigneeNames = createAssigneesDisplayMessageFromArray(assigneesArray);
  let projectNames = "";

  console.log(
    `(createTaskInfoWithoutSelections), assigneesArray: ${assigneesArray}, task${JSON.stringify(notionTask)}`,
  );

  // using allProjectsArray get the project names of the projects in task's project
  // field
  if (allProjectsArray && Array.isArray(allProjectsArray)) {
    allProjectsArray.forEach((project) => {
      if (project) {
        projectNames += `${project.projectName === "" ? " " : project.projectName}\n`;
      }
    });
    // Remove trailing new line character at end of projectNames variable
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
          text: `*Due Date:*\n${
            notionTask.dueDate
              ? formatSlackDate(new Date(notionTask.dueDate))
              : ""
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
export function createMenuOptions(
  whichToCreate: string,
  listOfItems: ProjectWithName[] | NotionUser[],
): MenuType[] {
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
 * @param notionTask:  The task to be previewed.
 * @param allProjects: All existing projects in Notion database
 * @param foundUsers:  An object that contains two lists, one (identifiedUsers) contains 0 or more Notion users who match the assignee of the task
 *    the other list (ambiguousUsers) contains users who are yet to be identified as assignees for the task.
 *
 * @returns A set of Slack blocks to be used in previewing and confirming a new task and prompting the user to select assignees.
 */
export function createNewTaskBlockWithUserAndOrProjectsSelections(
  notionTask: NotionTask,
  allProjects: ProjectWithName[],
  foundUsers: FoundUsers,
) {
  const taskInfo = createTaskInfo(
    notionTask,
    allProjects,
    foundUsers.identifiedUsers,
  );
  const parsedProjects = notionTask.project || [];
  console.log(`Creating selection block`);

  // Create options for ambiguous users
  const userOptionsToChooseFrom = createMenuOptions(
    "NotionUsers",
    foundUsers.ambiguousUsers,
  );
  const projectOptions = createMenuOptions("Projects", allProjects);

  // Return these blocks if both number of projects in task is equal to zero (no projects) and number of
  // ambiguous assignees is greater than 1
  if (parsedProjects.length === 0 && userOptionsToChooseFrom.length > 1) {
    const confirmationButtonValue: string = JSON.stringify({
      taskPageObject: {
        task: notionTask,
        pageId: "",
        url: "",
      },
      userOptions: foundUsers.ambiguousUsers,
      projectOptions: allProjects,
    });

    return createBlockWithBothSelectionMenus(
      taskInfo,
      userOptionsToChooseFrom,
      projectOptions,
      confirmationButtonValue,
    );
  }

  const confirmationButtonValueProjectsOnly = JSON.stringify({
    taskPageObject: {
      task: notionTask,
      pageId: "",
      url: "",
    },
    userOptions: foundUsers.ambiguousUsers,
    projectOptions: allProjects,
  });

  //Return these blocks if only number of projects is equal to zero
  if (parsedProjects.length === 0) {
    return createSelectionsBlocksWithOneMenu(
      taskInfo,
      projectOptions,
      confirmationButtonValueProjectsOnly,
    );
  }

  // Return these blocks if number of ambiguous assingees is greater than 1
  const confirmationButtonValueUsersOnly = JSON.stringify({
    taskPageObject: {
      task: notionTask,
      pageId: "",
      url: "",
    },
    userOptions: foundUsers.ambiguousUsers,
    projectOptions: [],
  });

  return createSelectionsBlocksWithOneMenu(
    taskInfo,
    userOptionsToChooseFrom,
    confirmationButtonValueUsersOnly,
  );
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
  projects: ProjectWithName[],
) {
  const ColumnLayoutTaskInfo = createTaskInfoWithoutSelections(
    notionTask,
    projects,
  );
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
 * @param notionTask:       The task to be previewed.
 * @param allProjects:      All projects that exist in the notion database
 * @param similarProjects:  projects that are ambiguous and similar, to be clarified
 *    by the user in the selections block.
 * @param foundUsers:       An object that contains two lists, one (identifiedUsers) contains 0 or more Notion users who match the assignee of the task
 *    the other list (ambiguousUsers) contains users who are yet to be identified.
 *
 * @returns A set of Slack blocks to be used in previewing and confirming a new task and prompting the user to select assignees.
 */
export function createNewTaskBlockWithSelectionsForAmbiguousProjects(
  notionTask: NotionTask,
  allProjects: ProjectWithName[],
  similarProjects: { id: string }[],
  foundUsers: FoundUsers,
) {
  const taskInfo = createTaskInfo(
    notionTask,
    allProjects,
    foundUsers.identifiedUsers,
  );
  // Create options for ambiguous users
  const userOptionsToChooseFrom = createMenuOptions(
    "NotionUsers",
    foundUsers.ambiguousUsers,
  );

  // This is an array that will contain the possible project matches that the user needs to select
  // from either one or multiple
  const arrayOfProjectsToSelectFrom: ProjectWithName[] = [];

  similarProjects.forEach((projInSimilarProjectsArray) => {
    allProjects.forEach((projectFromNotion) => {
      if (projectFromNotion.id === projInSimilarProjectsArray.id) {
        arrayOfProjectsToSelectFrom.push(projectFromNotion);
      }
    });
  });

  const projectOptionsToChooseFrom = createMenuOptions(
    "Projects",
    arrayOfProjectsToSelectFrom,
  );

  const confirmationButtonValue: string = JSON.stringify({
    taskPageObject: {
      task: notionTask,
      pageId: "",
      url: "",
    },
    userOptions: foundUsers.ambiguousUsers,
    projectOptions: arrayOfProjectsToSelectFrom,
  });

  //Return this if there are both user and projects to select
  if (userOptionsToChooseFrom.length > 1) {
    return createBlockWithBothSelectionMenus(
      taskInfo,
      userOptionsToChooseFrom,
      projectOptionsToChooseFrom,
      confirmationButtonValue,
    );
  }
  //Return this if there are projects to be selected

  return createSelectionsBlocksWithOneMenu(
    taskInfo,
    projectOptionsToChooseFrom,
    confirmationButtonValue,
  );
}

/**
 * Function to create Slack block with one selection menu
 * @param taskInfo:                task details/info to be displayed to the user
 * @param menuOptions:             options that will be deplayed in the menu
 * @param confirmationButtonValue: payload containing the task object and the options the user
 * selects from, either projects or assignees/users
 *
 * @returns   Slack blocks with desired selections menu
 */
function createSelectionsBlocksWithOneMenu(
  taskInfo: TaskInfo,
  menuOptions: MenuType[],
  confirmationButtonValue: string,
) {
  const menuTitle = menuOptions[0].value.includes("Project")
    ? "Project"
    : "Assignee";
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
            text: `Select ${menuTitle}(s)}`,
            emoji: true,
          },
          options: menuOptions,
          action_id: "multi_select-action",
        },
        label: {
          type: "plain_text",
          text: `${menuTitle}`,
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
            value: confirmationButtonValue,
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
 * Function to create blocks with both assignee/user and projects selections menu
 * @param taskInfo:                   the task details/information to be displayed
 * @param userOptionsToSelectFrom:    the assignee options the user will see and select from
 * @param projectOptionsToSelectFrom: the project options the user will see and select from
 * @param confirmationButtonValue:    payload containing task details and options the user chooses from,
 * in string form
 *
 * @returns A Slack block with the desired selections menu
 */
function createBlockWithBothSelectionMenus(
  taskInfo: TaskInfo,
  userOptionsToSelectFrom: MenuType[],
  projectOptionsToSelectFrom: MenuType[],
  confirmationButtonValue: string,
) {
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
          options: userOptionsToSelectFrom,
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
          options: projectOptionsToSelectFrom,
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
            value: confirmationButtonValue,
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
