import { getUserTimezoneData, getEventTimeData } from "./getTime";
import {
  payloadGood as payloadCeci,
  payloadHarvey,
} from "../test-data/payloads/slashcmd/payloads";
import dotenv from "dotenv";
import { DateTime } from "luxon";
dotenv.config();
const userID = process.env.TEST_USER_ID ? process.env.TEST_USER_ID : "";
const userID2 = process.env.TEST_USER_ID_2;

describe("Tests getUserTimezone with a user from the workspace", () => {
  it("Returns the user's timezone", async () => {
    const timezone = await getUserTimezoneData(userID);
    console.log(JSON.stringify(timezone));

    expect(timezone).toMatchObject({
      tz: "America/Los_Angeles",
      tz_label: "Pacific Daylight Time",
      tz_offset: -7,
    });
  });
});

describe("Tests getUserTimezone with an invalid user id", () => {
  it("Throws error", async () => {
    const userIDBad = "ABC1DEF2GHI";
    await expect(async () => {
      await getUserTimezoneData(userIDBad);
    }).rejects.toThrow("Invalid user ID");
  });
});

describe("Tests getTime with a valid payload from Harvey", () => {
  it("Returns the time of the event in Harvey's timezone", async () => {
    const timestamp = 1755039682 *  1000;
    const timeData = await getEventTimeData(payloadHarvey, timestamp);
    console.log(`time data: ${JSON.stringify(timeData)}`);

    expect(timeData).toEqual(DateTime.fromMillis(timestamp).setZone("Africa/Nairobi"));
  });
});

describe("Tests getTime with a valid payload from Ceci", () => {
  it("Returns the time of the event in Ceci's timezone", async () => {
    const timestamp = 1755039682 * 1000;
    const timeData = await getEventTimeData(payloadCeci, timestamp);
    console.log(`time data: ${JSON.stringify(timeData)}`);

    expect(timeData).toEqual(DateTime.fromMillis(timestamp).setZone("America/Los_Angeles"));
  });
});
