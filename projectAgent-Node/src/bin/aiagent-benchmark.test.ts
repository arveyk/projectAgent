import { SlashCommand } from "@slack/bolt";
import { parseTask } from "../utils/aiAgent";

const message1 = "add Ceci, please fix the date formatting error";
const message2 =
  "add Harvey, please set up uptime monitoring for Notionfications";
const message3 =
  "add Ceci, could you finish the database migration by the end of the week?";

const payload1: SlashCommand = {
  token: "JWNJnukcVaHbRoRl6CwWYan6",
  team_id: "T08VADHH17S",
  team_domain: "solutionalpro-1c61413",
  channel_id: "C08VADJ7SEL",
  channel_name: "all-solutional-project-agent",
  user_id: "U08VADHNG0G",
  user_name: "crkurdelak",
  command: "/timely_01",
  text: message1,
  api_app_id: "A0935EDQRHB",
  is_enterprise_install: "false",
  response_url:
    "https://hooks.slack.com/commands/T08VADHH17S/9335989657841/DI7K17HpCUQIBdIvMgv23oRU",
  trigger_id: "9335989658337.8996459579264.9b1bec951ddb2c9268beb1284a7e6289",
};

const payload2: SlashCommand = {
  token: "JWNJnukcVaHbRoRl6CwWYan6",
  team_id: "T08VADHH17S",
  team_domain: "solutionalpro-1c61413",
  channel_id: "C08VADJ7SEL",
  channel_name: "all-solutional-project-agent",
  user_id: "U08VADHNG0G",
  user_name: "crkurdelak",
  command: "/timely_01",
  text: message2,
  api_app_id: "A0935EDQRHB",
  is_enterprise_install: "false",
  response_url:
    "https://hooks.slack.com/commands/T08VADHH17S/9335989657841/DI7K17HpCUQIBdIvMgv23oRU",
  trigger_id: "9335989658337.8996459579264.9b1bec951ddb2c9268beb1284a7e6289",
};

const payload3: SlashCommand = {
  token: "JWNJnukcVaHbRoRl6CwWYan6",
  team_id: "T08VADHH17S",
  team_domain: "solutionalpro-1c61413",
  channel_id: "C08VADJ7SEL",
  channel_name: "all-solutional-project-agent",
  user_id: "U08VADHNG0G",
  user_name: "crkurdelak",
  command: "/timely_01",
  text: message3,
  api_app_id: "A0935EDQRHB",
  is_enterprise_install: "false",
  response_url:
    "https://hooks.slack.com/commands/T08VADHH17S/9335989657841/DI7K17HpCUQIBdIvMgv23oRU",
  trigger_id: "9335989658337.8996459579264.9b1bec951ddb2c9268beb1284a7e6289",
};

describe("Tests with payload 1", () => {
  it("Logs timestamps", async () => {
    const response = await parseTask(payload1, Date.now());
  });
});

describe("Tests with payload 2", () => {
  it("Logs timestamps", async () => {
    const response = await parseTask(payload2, Date.now());
  });
});

describe("Tests with payload 3", () => {
  it("Logs timestamps", async () => {
    const response = await parseTask(payload3, Date.now());
  });
});
