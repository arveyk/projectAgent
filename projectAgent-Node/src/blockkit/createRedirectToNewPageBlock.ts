/**
 * Creates a Slack block that redirects the user to the new Notion page.
 * @param url The url of the new Notion page.
 * @returns A Slack block that redirects the user to the new Notion page.
 */
export function createRedirectToNewPageBlock(url: string) {
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
