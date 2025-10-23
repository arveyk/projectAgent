type SelectElementType = {
  text: {
    type: string;
    text: string;
    emoji: boolean;
  };
  value: string;
};

type SingleSelectionBlockType = {
  blocks: (
    | {
        type: string;
        element: {
          type: string;
          placeholder: {
            type: string;
            text: string;
            emoji: boolean;
          };
          options: SelectElementType[];
          action_id: string;
        };
        label: {
          type: string;
          text: string;
          emoji: boolean;
        };
        elements?: undefined;
      }
    | {
        type: string;
        elements: {
          type: string;
          text: {
            type: string;
            text: string;
            emoji: boolean;
          };
          value: string;
          action_id: string;
        }[];
        element?: undefined;
        label?: undefined;
      }
  )[];
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

export function createSelectionBlock(
  projectsArray: string[],
  usersArray: string[],
) {
  console.log("Creating selection Blocks");
  let projectsOptions;
  let usersOptions;

  if (projectsArray.length > 1) {
    console.log("Creating projects select block");
    // projectsBlock = createProjectsSelectBlock(projectandUserSelectionBlock, projectsArray);
    projectsOptions = createOptions(projectsArray);
  }
  if (usersArray.length > 1) {
    console.log("Creating users selection block");
    // usersBlock = createAssignedToSelectBlock(projectandUserSelectionBlock, usersArray);
    usersOptions = createOptions(usersArray);
  }
  if (projectsOptions && usersOptions) {
    // create a block with both selection blocks
    projectandUserSelectionBlock.blocks[0].element
      ? (projectandUserSelectionBlock.blocks[0].element.options =
          projectsOptions)
      : // ? projectsOptions : []
        projectandUserSelectionBlock.blocks[0];
    // unshift to add to the beginning of the array

    return {
      blocks: [
        {
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

    // create block with only Projects options
  } else if (usersOptions) {
    // create block with only Users options
    projectandUserSelectionBlock.blocks[0].label
      ? (projectandUserSelectionBlock.blocks[0].label.text = "Assignees")
      : projectandUserSelectionBlock.blocks[0];
    return projectandUserSelectionBlock.blocks[0].element
      ? (projectandUserSelectionBlock.blocks[0].element.options = usersOptions)
      : projectandUserSelectionBlock.blocks[0];
  } else if (projectsOptions) {
    // create block with only Projects options
    projectandUserSelectionBlock.blocks[0].label
      ? (projectandUserSelectionBlock.blocks[0].label.text = "Projects")
      : projectandUserSelectionBlock.blocks[0];
    return projectandUserSelectionBlock.blocks[0].element
      ? (projectandUserSelectionBlock.blocks[0].element.options =
          projectsOptions)
      : projectandUserSelectionBlock.blocks[0];
  }
}
