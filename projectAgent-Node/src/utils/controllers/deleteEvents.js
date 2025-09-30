import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { deleteLoadingMsg } from "../blockkit/deleteLoadingMsg";

const targetDir = "../storage";
const fileName = "events.json";
//const eventArray = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fullPath = path.join(__dirname, targetDir, fileName);

fs.readFile(fullPath, "utf8", (err, data) => {
  if (err) {
    console.log(`Error reading file`);
    return;
  }
  console.log("Success Reading file", fullPath);

  const dataArr = JSON.parse(data);
  console.log(dataArr[0]);

  // delete message in slack
  const eventPayload = dataArr[0];

  const eventTs = eventPayload.event.ts;
  const eventText = eventPayload.event.text;
  const channelID = eventPayload.event.channel;

  deleteLoadingMsg(eventTs, channelID);
  // pop payload data
});
