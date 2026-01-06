import { NotionUser } from "../utils/controllers/userTypes";
import { NotionTask } from "../utils/task";
import { createColumnLayoutTaskInfo } from "./columnLayoutBlock";

/*
const createTaskInfo = function (
  notionTaskObj: NotionTask,
  assignees: NotionUser[]
) {
  const task = notionTaskObj;
  const assigneesArr = assignees;
  let assigneeNames = "";
  console.log(
    `(createColumnLayoutTaskInfoBlock), assigneesArray: ${assigneesArr}, task${JSON.stringify(task)}`,
  );
  if (assigneesArr && Array.isArray(assigneesArr)) {
    assigneesArr.forEach((assignee) => {
      if (assignee) {
        assigneeNames += `${assignee.name} --- ${assignee.email}\n`;
      }
    });
    assigneeNames = assigneeNames.slice(0, -1); // Remove trailing comma and space
  }
  task.startDate =
    task.startDate && task.startDate.toString() !== "Invalid Date"
      ? new Date(task.startDate)
      : DateTime.now().toJSDate();
  console.log(`(createColumnLayoutTaskInfoBlock) task: ${JSON.stringify(task)}`);
  const columnLayoutBlock = [
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": `*Task Title:*\n${task.taskTitle}`
        },
        {
          "type": "mrkdwn",
          "text": `*Project:*\n${task.project || " "}`
        }
      ]
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": `*Due Date:*\n${formatSlackDate(new Date(task.dueDate))}`
        },
        {
          "type": "mrkdwn",
          "text": `*Start Date:*\n${task.startDate !== new Date(NaN) && task.startDate !== undefined ? formatSlackDate(new Date(task.startDate)) : task.startDate}`
        }
      ]
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `*Assignees:*\n${assigneeNames}`
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `*Description:*\n${task.description}`
      }
    }
  ]

  return columnLayoutBlock;
}
*/

/**
 *
 * @param listOfItems
 * @returns array of select options
 */
export function createOptions(
  whichToCreate: string,
  listOfItems: string[] | NotionUser[],
) {
  let index = 0;

  if (whichToCreate === "NotionUsers") {
    const userArray = listOfItems as NotionUser[];
    return userArray.map((person) => {
      return {
        text: {
          type: "plain_text",
          text: `*${person.name} --- ${person.email}*`,
          emoji: true,
        },
        value: `${index++}`,
      };
    });
  } else {
    const optionsArray = listOfItems.map((project) => {
      return {
        text: {
          type: "plain_text",
          text: `*${project}*`,
          emoji: true,
        },
        // value: `value-${index++}`,
        value: `${index++}`,
      };
    });
    return optionsArray;
  }
}

export function createNewTaskBlockWithSelections(
  notionTask: NotionTask,
  selectBlockTitle: string,
  searchedUsers: {
    identifiedUsers: NotionUser[],
    ambiguousUsers: NotionUser[]
  }
) {
  /*
  const taskInfo = createTaskInfo(
    notionTask,
    searchedUsers.identifiedUsers,
  );
  */
  const taskInfo = createColumnLayoutTaskInfo(
    notionTask,
    searchedUsers.identifiedUsers
  );

  console.log(`Creating ${selectBlockTitle} select block`);
  // projectsBlock = createProjectsSelectBlock(projectandUserSelectionBlock, projectsArray);

  // Create options for ambiguous users
  const optionsToChooseFrom = createOptions(
    "NotionUsers",
    searchedUsers.ambiguousUsers,
  );

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
      // Spread Those details real nicely
      ...taskInfo, // selection below
      {
        type: "input",
        element: {
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: `Select ${selectBlockTitle}(s)`,
            emoji: true,
          },
          options: optionsToChooseFrom, //as SelectElementType[],
          action_id: "multi_select-action",
        },
        label: {
          type: "plain_text",
          text: `${selectBlockTitle}`,
          emoji: true,
        },
      },
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Confirm",
              "emoji": true,
            },
            "value": JSON.stringify(
              {
                taskPageObject: {
                  task: notionTask,
                  pageId: "",
                  url: ""
                }, userOptions: searchedUsers.ambiguousUsers
              },
            ), // value: JSON.stringify(taskPageObj),
            "style": "primary",
            "action_id": "SelectionActionId-2",
          },
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "Cancel",
            },
            "style": "danger",
            "value": "discard_123",
            "action_id": "actionId-1",
          }
        ],
      },
      {
        "type": "context",
        "elements": [
          {
            "type": "mrkdwn",
            "text": "*You can edit the task in Notion after adding it*",
          },
        ],
      },
    ]
  };
}

export function createMultiSelectionsBlock(
  newTask: NotionTask,
  projectsArr: string[],
  usersArr: string[],
) {
  // Should we have options for projects or jsut have tasks empty?

  const projectsArray = [newTask.project || "undefined"];
  // TODO: change this to array of notion users that match assigneee search
  const usersArray = newTask.assignees;

  let selectLabel = "Assignee(s)";
  console.log("Creating selection Blocks");
  let projectsOptions;
  let usersOptions;

  let projectsSelectBlock;
  const blockText = createColumnLayoutTaskInfo(newTask, usersArray);

  if (newTask.assignees.length !== 1) {
    console.log("Creating Assignee select block");
    // projectsBlock = createProjectsSelectBlock(projectandUserSelectionBlock, projectsArray);
    usersOptions = createOptions("NotionUsers", projectsArray);
  }

  if (projectsArray.length !== 1) {
    console.log("Creating Projects selection block");
    // usersBlock = createAssignedToSelectBlock(projectandUserSelectionBlock, usersArray);
    projectsOptions = createOptions("Project(s)", projectsArray);
    projectsSelectBlock = {
      type: "input",
      element: {
        type: "multi_static_select",
        placeholder: {
          type: "plain_text",
          text: "Select Project(s)",
          emoji: true,
        },
        options: usersOptions,
        action_id: "multi_select-action",
      },
      label: {
        type: "plain_text",
        text: "Project(s)",
        emoji: true,
      },
    };
    if (usersArray.length === 1 && projectsArray[0] === null) {
      selectLabel = "NotionUsers";
    }
  }

  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*You Are About to Create a New Task*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: blockText,
        },
      },
      projectsSelectBlock
        ? projectsSelectBlock
        : {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `${projectsArray.length > 0 ? projectsArray[0] : `No projects Found`}`,
          },
        },
      {
        type: "input",
        element: {
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: `Select ${selectLabel}`,
            emoji: true,
          },
          // options: projectsOptions,
          options:
            selectLabel === "Project(s)" ? projectsOptions : usersOptions,
        },
        label: {
          type: "plain_text",
          text: `${selectLabel}`,
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
              text: "Click Me",
              emoji: true,
            },
            value: "click_me_123",
            action_id: "actionId-0",
          },
        ],
      },
    ],
  };
}
