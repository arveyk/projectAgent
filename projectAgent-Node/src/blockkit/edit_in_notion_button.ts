type ProjectElementType = {
  text: {
    type: string;
    text: string;
    emoji: boolean;
  };
  value: string;
};
export function redirectToNotionBlock(url: string) {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `:white_check_mark: *<${url}|Edit in Notion>*`,
        },
      },
      {
        type: "actions",
        elements: [
          /*{
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Edit in Notion"
            },
            style: "primary",
            url: `${url}`,
            value: "edit_123",
            action_id: "actionId-0"
          },*/
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Done",
            },
            value: "done_123",
            style: "primary",
            action_id: "actionId-001",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Delete",
            },
            style: "danger",
            value: `${url}`,
            action_id: "actionId-002",
          },
        ],
      },
    ],
  };
}

export const createSelectionBlock = {
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
          */{
            "text": {
              "type": "plain_text",
              "text": "*plain_text option 99*",
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
        ] as ProjectElementType[],
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
export function createProjectsSelectBlock(projectsList: string[]) {
  projectsList.forEach((project) => {
    projectElement.text.text = project;
    const element = {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select an item",
        emoji: true,
      },
      options: [projectElement],
      action_id: "static_select-action",
    };
    createSelectionBlock.blocks[0].element
      ? createSelectionBlock.blocks[0].element.options.push(projectElement)
      : (createSelectionBlock.blocks[0] = {
        type: "input",
        element: element,
        label: {
          type: "plain_text",
          text: "Projects",
          emoji: true,
        },
      });
  });
}

export function createAssignedToSelectBlock(projectsList: string[]) {
  projectsList.forEach((person) => {
    personElement.text.text = person;
    const element = {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select an item",
        emoji: true,
      },
      options: [personElement],
      action_id: "static_select-action",
    };
    createSelectionBlock.blocks[0].element
      ? createSelectionBlock.blocks[0].element.options.push(personElement)
      : (createSelectionBlock.blocks[0] = {
        type: "input",
        element: element,
        label: {
          type: "plain_text",
          text: "Users In Notion",
          emoji: true,
        },
      });
  });
}