import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const eventPayload = {
  token: "JWNJnukcVaHbRoRl6CwWYan6",
  team_id: "T08VADHH17S",
  context_team_id: "T08VADHH17S",
  context_enterprise_id: null,
  api_app_id: "A0935EDQRHB",
  event: {
    user: "U0935EFG3GD",
    type: "message",
    ts: "1755179367.163089",
    bot_id: "B0935EFD5HB",
    app_id: "A0935EDQRHB",
    text: "Some Text",
    team: "T08VADHH17S",
    bot_profile: {
      id: "B0935EFD5HB",
      deleted: false,
      name: "My Messenger",
      updated: 1751016347,
      app_id: "A0935EDQRHB",
      user_id: "U0935EFG3GD",
      icons: {
        image_36: "https://a.slack-edge.com/80588/img/plugins/app/bot_36.png",
        image_48: "https://a.slack-edge.com/80588/img/plugins/app/bot_48.png",
        image_72:
          "https://a.slack-edge.com/80588/img/plugins/app/service_72.png",
      },
      team_id: "T08VADHH17S",
    },
    blocks: [
      {
        type: "section",
        block_id: "C4rw7",
        text: {
          type: "mrkdwn",
          text: ":arrows_counterclockwise: Loading,…",
          verbatim: false,
        },
      },
    ],
    channel: "C08VADJ7SEL",
    event_ts: "1755179367.163089",
    channel_type: "channel",
  },
  type: "event_callback",
  event_id: "Ev09B6EUKDNU",
  event_time: 1755179367,
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
    "4-eyJldCI6Im1lc3NhZ2UiLCJ0aWQiOiJUMDhWQURISDE3UyIsImFpZCI6IkEwOTM1RURRUkhCIiwiY2lkIjoiQzA4VkFESjdTRUwifQ",
};

const eventTs = eventPayload.event.ts;
const eventText = eventPayload.event.text;
const targetDir = "../../storage";

const fileName = "events.json";
//const eventArray = [];


const fullPath = path.join(__dirname, targetDir, fileName);
let eventData;
fs.readFile(fullPath, "utf8", (err, data) => {
  if (err) {
    console.log(`Error reading file`);
    return;
  }
  eventData = data;
  console.log("Success Reading file", fullPath);

  const dataArr = JSON.parse(eventData);
  console.log(typeof dataArr);
  dataArr.push(eventPayload);

  fs.writeFile(fullPath, JSON.stringify(dataArr), (error) => {
    if (error) {
      console.log("Error writing to file", error);
    }
    console.log(`Successfully writtent to ${fullPath}`);
  });
});
