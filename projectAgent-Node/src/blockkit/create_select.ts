type SelectElementType = {
  text: {
    type: string;
    text: string;
    emoji: boolean;
  };
  value: string;
};


const projectandUserSelectionBlock = {
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
         */
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

/**
 *
 * @param projectsList
 * @returns array of select options
 */
export function createOptions(projectsList: string[]) {
  let index = 0;
  const optionsArray = projectsList.map((person) => {
    return {
      text: {
        type: "plain_text",
        text: `*${person}*`,
        emoji: true,
      },
      value: `value-${index++}`,
    };
  });
  return optionsArray;
}

export function createSelectionBlock(projectsOrUsersArray: string[], selectHeading: string) {

  console.log(`Creating ${selectHeading} select block`);
  // projectsBlock = createProjectsSelectBlock(projectandUserSelectionBlock, projectsArray);
  const optionsToChooseFrom = createOptions(projectsOrUsersArray)

  return {
    blocks: [
      {
        type: "input",
        element: {
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: `Select ${selectHeading}(s)`,
            emoji: true,
          },
          options: optionsToChooseFrom, //as SelectElementType[],
          action_id: "multi_select-action",
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
    ]
  };
}

export function createMultiSelectionsBlock(projectsArray: string[], usersArray: string[]) {
  console.log("Creating selection Blocks");
  let projectsOptions;
  let usersOptions;

  let usersSelectBlock;

  if (projectsArray.length > 1) {
    console.log("Creating projects select block");
    // projectsBlock = createProjectsSelectBlock(projectandUserSelectionBlock, projectsArray);
    projectsOptions = createOptions(projectsArray);
  }
  if (usersArray.length > 1) {
    console.log("Creating users selection block");
    // usersBlock = createAssignedToSelectBlock(projectandUserSelectionBlock, usersArray);
    usersOptions = createOptions(usersArray);
    usersSelectBlock = {
      type: "input",
      element: {
        type: "multi_static_select",
        placeholder: {
          type: "plain_text",
          text: "Select a Project",
          emoji: true,
        },
        options: usersOptions,
        action_id: "multi_select-action",
      },
      label: {
        type: "plain_text",
        text: "Notion Users",
        emoji: true,
      },
    };
  }



  return {
    blocks: [
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
      usersSelectBlock ? usersSelectBlock : {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `${usersArray.length > 0 ? usersArray[0] : `No Users Found`}`
        }
      },
      {
        type: "input",
        element: {
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an item",
            emoji: true,
          },
          options: projectsOptions, //as SelectElementType[],
          action_id: "static_select-action",
        },
        label: {
          type: "plain_text",
          text: `${"Assig or Pro"}`,
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