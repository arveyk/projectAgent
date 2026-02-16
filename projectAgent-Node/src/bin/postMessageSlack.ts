import { SLACK_BOT_TOKEN } from "../env";
import axios from "axios";
import { createNewTaskBlockWithUserAndOrProjectsSelections } from "../blockkit/createBlockPartsForNewTask";
import { taskNoAssignee } from "../test-data/tasks/example-tasks";
import { NotionUser } from "../utils/controllers/userTypes";
/**
 * (async () => {
  const personsArray = await readFile("./users.json");
  console.log(personsArray);
})();
*/

const eventPayload = {
  token: "JWNJnukcVaHbRoRl6CwWYan6",
  team_id: "T08VADHH17S",
  context_team_id: "T08VADHH17S",
  context_enterprise_id: null,
  api_app_id: "A0935EDQRHB",
  event: {
    user: "U08UDKY38QK",
    type: "message",
    ts: "1754385362.755899",
    client_msg_id: "110b83be-967e-4510-b829-1d40516e7681",
    text: "Josh, please feed the cats every day starting August 1 and ending August\n 7. Make sure to give them their pills and that they have enough clean\nwater. Your email is <mailto:josh@example.com|josh@example.com>, your phone number is <tel:1234567890|123-456-7890>, and your preferred channel is Slack.",
    team: "T08VADHH17S",
    blocks: [
      {
        type: "rich_text",
        block_id: "osXnE",
        elements: [
          {
            type: "rich_text_section",
            elements: [
              {
                type: "text",
                text: "Josh, please feed the cats every day starting August 1 and ending August\n 7. Make sure to give them their pills and that they have enough clean\nwater. Your email is ",
              },
              {
                type: "link",
                url: "mailto:josh@example.com",
                text: "josh@example.com",
              },
              { type: "text", text: ", your phone number is " },
              { type: "link", url: "tel:1234567890", text: "123-456-7890" },
              {
                type: "text",
                text: ", and your preferred channel is Slack.",
              },
            ],
          },
        ],
      },
    ],
    channel: "C08VADJ7SEL",
    event_ts: "1754385362.755899",
    channel_type: "channel",
  },
  type: "event_callback",
  event_id: "Ev098KEHU28P",
  event_time: 1754385362,
  authorizations: [
    {
      enterprise_id: null,
      team_id: "T08VADHH17S",
      user_id: "U0935EFG3GD",
      is_bot: true,
      is_enterprise_install: false,
    },
  ],
  is_ext_shared_channel: false,
  event_context:
    "",
};
const test00 = [
  [
    { projectName: "test00", id: "JIUsbds" },
    { projectName: "test00_proj02", id: "Iodshs" },
  ],
  [],
];
const test2 = [
  ["Damaris", "Hunter"],
  ["Project0", "Project1", "Project clear", "Anime", "Writter"],
];
const test3 = [["JIUsbds", "Iodshs"], ["OIHOIH"]];
const test4AmbiguouseUsers: NotionUser[] = [
  { userId: "Iodshs", name: "testUser000" },
  { userId: "OIHOIH", name: "testUser001" },
  { userId: "Credentials", name: "testUser002" },
];
const eventResponseURL = "https://slack.com/api/chat.postMessage";
const channel_id = eventPayload.event.channel;
console.log(channel_id);

const exampleBlocks = createNewTaskBlockWithUserAndOrProjectsSelections(
  taskNoAssignee,
  test00[0],
  {
    identifiedUsers: [],
    ambiguousUsers: test4AmbiguouseUsers,
  },
);

export async function testPostToSlack(eventResUrl: string, slackBlocks?: any) {
  try {
    await axios
      .post(
        eventResUrl,
        {
          channel: channel_id,
          text: "Some Text",
          // blocks: RequestApprovalBlock.blocks,
          blocks: slackBlocks.blocks,
        },
        {
          headers: {
            Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
          family: 4,
        },
      )
      .then((responseFromSlack) => {
        console.log("OK from slack", responseFromSlack.data);
        console.log("Data sent to Slack", responseFromSlack.config.data);
      })
      .catch((err) => {
        console.log("Error in Axios", err);
      });
  } catch (err) {
    console.log(err);
  }
}

(async () => {
  await testPostToSlack(eventResponseURL, exampleBlocks);
})();
