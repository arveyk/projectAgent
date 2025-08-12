import { ExpressReceiver } from "@slack/bolt";
import { getUserTimezone } from "./getTime";
import dotenv from 'dotenv'
dotenv.config()
const userID = process.env.TEST_USER_ID;

describe("Tests getUserTimezone with a user from the workspace", () => {
    it("Returns the user's timezone", async () => {
        const timezone = await getUserTimezone(userID);
        console.log(JSON.stringify(timezone));

        expect(timezone).toMatchObject({
            tz: "America/Los_Angeles",
            tz_label: "Pacific Daylight Time",
            tz_offset: -7
        })
    })
})

describe("Tests getUserTimezone with an invalid user id", () => {
    it("Throws error", async () => {
        const userIDBad = "ABC1DEF2GHI"
        await expect(async () => {
            await getUserTimezone(userIDBad);
        }).rejects.toThrow("Invalid user ID");
    })
})