import { SlashCommand } from "@slack/bolt";
import { parseTask } from "../utils/aiagent";

const message1 = "add Chimara, please fix the date formatting error";
const message2 =
  "add Harvey, please set up uptime monitoring for Notionfications";
const message3 =
  "add Chimara, could you finish the database migration by the end of the week?";

const payload1: SlashCommand = {
  token: " ",
  team_id: "T08VADHH17S",
  team_domain: "solutionalprofessional-1c61413",
  channel_id: "C08VADJ7SEL",
  channel_name: "all-solutional-project-agent",
  user_id: "U08VADHNG0G",
  user_name: "crtabitha",
  command: "/timely_01",
  text: message1,
  api_app_id: "sample_id",
  is_enterprise_install: "false",
  response_url:
    "https://hooks.slack.com/commands/EXAMPLE-CHANNEL/exampleResponse/URL123",
  trigger_id: "sampleTrigger-933598beb1284a7e6289",
};

const payload2: SlashCommand = {
  token: " ",
  team_id: "T08VADHH17S",
  team_domain: "solutionalprofessional-1c61413",
  channel_id: "C08VADJ7SEL",
  channel_name: "all-solutional-project-agent",
  user_id: "U08VADHNG0G",
  user_name: "crtabitha",
  command: "/timely_01",
  text: message2,
  api_app_id: "sample_id",
  is_enterprise_install: "false",
  response_url:
    "https://hooks.slack.com/commands/EXAMPLE-CHANNEL/exampleResponse/URL123",
  trigger_id: "sampleTrigger-933598beb1284a7e6289",
};

const payload3: SlashCommand = {
  token: " ",
  team_id: "T08VADHH17S",
  team_domain: "solutionalprofessional-1c61413",
  channel_id: "C08VADJ7SEL",
  channel_name: "all-solutional-project-agent",
  user_id: "U08VADHNG0G",
  user_name: "crtabitha",
  command: "/timely_01",
  text: message3,
  api_app_id: "sample_id",
  is_enterprise_install: "false",
  response_url:
    "https://hooks.slack.com/commands/EXAMPLE-CHANNEL/exampleResponse/URL123",
  trigger_id: "sampleTrigger-933598beb1284a7e6289",
};




/**
 * Function call to run benchmarking tests
 * 
 * returns: no return value
 */
async function benchMark(payload: SlashCommand) {
  const parseTaskResult = await parseTask(payload1, Date.now());
  console.log(`Responses:  ${parseTaskResult}`);
}

(async () => {
  const firstResponse = await benchMark(payload1);
  const secondResponse = await benchMark(payload2);
  const thirdResponse = await benchMark(payload3);
  console.log(`All responses 1st:  ${firstResponse},2nd :${secondResponse}, 3rd: ${thirdResponse}`);
})();