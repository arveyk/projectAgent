
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