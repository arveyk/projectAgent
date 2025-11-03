import { formatSlackDate } from "../utils/dateHandler";
import { Task, TaskPage } from "../utils/task";
import { DateTime } from "luxon";
import { NotionUser } from "../utils/controllers/userTypes";
import { NotionTask } from "../utils/task";

type SelectElementType = {
  text: {
    type: string;
    text: string;
    emoji: boolean;
  };
  value: string;
};

const createTaskInfoWithSelections = function (notionTaskObj: NotionTask, notionUsers: NotionUser[]) {
  /**
   * Temporarry fix for Date format issue
   */
  // task.dueDate = new Date(task.dueDate);
  const task = notionTaskObj;
  const assigneesArr = notionUsers;
  let assigneeNames = "";

  console.log(
    `(createTaskInfoBlock), assigneesArray: ${assigneesArr}, task${JSON.stringify(task)}`,
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
  console.log(`(createtaskInfoBlock) task: ${JSON.stringify(notionTaskObj)}`);
  console.log(
    `CreateTaskInfoBlock log message => task: ${JSON.stringify(task)}`,
  );
  return `*Task Title:*\t\t\t${task.taskTitle} \n*Due Date:*\t\t\t${formatSlackDate(new Date(task.dueDate))}\n*Start Date:*\t\t\t${task.startDate !== new Date(NaN) && task.startDate !== undefined ? formatSlackDate(task.startDate) : task.startDate}\n*Description:* \t\t${task.description}}`;
};

/*const projectandUserSelectionBlock = {
  blocks: [
    {
      type: "input",
      element: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select an item",
          emoji: true,
        },
        options: [
          /**
           * add options that have this structure dynamically
          {
            "text": {
              "type": "plain_text",
              "text": "*plain_text option 1*",
              "emoji": true
            },
            "value": "value-1"
          },
          
          {
            "text": {
              "type": "plain_text",
              "text": "*plain_text option 1*",
              "emoji": true
            },
            "value": "value-101"
          }
        ] as SelectElementType[], 8
         
        ] as SelectElementType[],
        action_id: "static_select-action",
      },
      label: {
        type: "plain_text",
        text: "Projects",
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

const projectElement = {
  text: {
    type: "plain_text",
    text: "*plain_text option 0*",
    emoji: true,
  },
  value: "value-0",
};

const personElement = {
  text: {
    type: "plain_text",
    text: "*user option 01*",
    emoji: true,
  },
  value: "value-01",
};
*/


/**
 *
 * @param listOfItems
 * @returns array of select options
 */
export function createOptions(whichToCreate: string, listOfItems: string[] | NotionUser[]) {
  let index = 0;

  if (whichToCreate === "NotionUsers") {
    const userArray = listOfItems as NotionUser[];;
    userArray.map((person) => {
      return {
        text: {
          type: "plain_text",
          text: `*${person.name} --- ${person.email}*`,
          emoji: true,
        },
        value: `${index++}`,
      };
    });
    return userArray;

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

export function createSelectionBlock(notionTask: NotionTask, selectBlockTitle: string, projectsOrUsersArray: NotionUser[]) {

  const taskInfo = createTaskInfoWithSelections(notionTask, projectsOrUsersArray);
  const usersArray = notionTask.assignees;

  console.log(`Creating ${selectBlockTitle} select block`);
  // projectsBlock = createProjectsSelectBlock(projectandUserSelectionBlock, projectsArray);
  const optionsToChooseFrom = createOptions(selectBlockTitle, projectsOrUsersArray)

  return {
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": taskInfo
        }
      },
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
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Click to Select Me",
              emoji: true,
            },
            value: "task: {\
                      assignee: [],\
                      due: null, description: ''}",
            action_id: "actionId-0",
          },
        ],
      },
    ]
  };
}

export function createMultiSelectionsBlock(newTask: NotionTask, projectsArr: string[], usersArr: string[]) {

  const projectsArray = [newTask.project || "undefined"];
  // TODO: change this to array of notion users that match assigneee search
  const usersArray = newTask.assignees;

  let selectLabel = "Assignee(s)";
  console.log("Creating selection Blocks");
  let projectsOptions;
  let usersOptions;

  let projectsSelectBlock;
  const blockText = createTaskInfoWithSelections(newTask, usersArray)

  if (newTask.assignees.length !== 1) {
    console.log("Creating Assignee select block");
    // projectsBlock = createProjectsSelectBlock(projectandUserSelectionBlock, projectsArray);
    usersOptions = createOptions("NotionUsers", projectsArray);
  }

  if (projectsArray.length !== 1) {
    console.log("Creating Projects selection block");
    // usersBlock = createAssignedToSelectBlock(projectandUserSelectionBlock, usersArray);
    projectsOptions = createOptions("Projects", projectsArray);
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
        text: "Projects",
        emoji: true,
      },
    };
    if (usersArray.length === 1 && projectsArray[0] === null) {
      selectLabel = "Notion Users";
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
      /*{
        type: "input",
        element: {
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: "Select a Project",
            emoji: true,
          },
          options: projectsOptions, //as SelectElementType[],
          action_id: "multi_select-action",
        },
        label: {
          type: "plain_text",
          text: "Projects",
          emoji: true,
        },
      },*/
      projectsSelectBlock ? projectsSelectBlock : {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `${projectsArray.length > 0 ? projectsArray[0] : `No projects Found`}`
        }
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
          options: selectLabel === "Projects" ? projectsOptions : usersOptions,
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
    ]
  };
}