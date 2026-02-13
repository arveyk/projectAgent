import { getUserTimezoneData, getEventTimeData } from "./getTime";
import { getSlackUserDataById } from "../controllers/getUsersSlack";
import {
  payloadGood as payloadChimera,
  payloadHarvey,
} from "../../test-data/payloads/slashcmd/payloads";
import dotenv from "dotenv";
import { DateTime } from "luxon";
dotenv.config();
const userID = process.env.TEST_USER_ID ? process.env.TEST_USER_ID : "";

describe("Tests getUserTimezone with a user from the workspace", () => {
  it("Returns the user's timezone", async () => {
    const userData = await getSlackUserDataById(userID);

    console.log(JSON.stringify(userData.timezoneData));
    expect(userData.timezoneData).toMatchObject({
      tz: "America/Los_Angeles",
      tz_label: "Pacific Standard Time",
      tz_offset: -8,
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
  it("Throws error", async () => {
    const userIDBad = "ABC1DEF2GHI";
    await expect(async () => {
      await getSlackUserDataById(userIDBad);
    }).rejects.toThrow("Invalid user ID");
  })
});

describe("Tests getEventTimeData with a valid payload from Harvey", () => {
  it("Returns the time of the event in Harvey's timezone", async () => {
    const timestamp = 1755039682 * 1000;
    const timeData = await getEventTimeData(payloadHarvey, timestamp);
    console.log(`time data: ${JSON.stringify(timeData)}`);

    expect(timeData).toEqual(
      DateTime.fromMillis(timestamp).setZone("Africa/Nairobi"),
    );
  });
});

describe("Tests getSlackUserDataById with a valid payload from Chimera", () => {
  it("Returns the time of the event in Chimera's timezone", async () => {
    const timestamp = 1755039682 * 1000;
    const timeZoneData = await getSlackUserDataById(payloadChimera.user_id);
    console.log(`time data: ${JSON.stringify(timeZoneData)}`);
  
    const time = DateTime.fromMillis(timestamp).setZone(timeZoneData.timezoneData.tz);

    expect(time).toEqual(
      DateTime.fromMillis(timestamp).setZone("America/Los_Angeles"),
    );
  });
});
