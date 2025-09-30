import { displayUserTimezone } from "./displayUserTimezone";
import { DateTime } from "luxon";

describe("tests displayUserTimezone", () => {
    it("", () => {
        const offset = -6;
        const dateUTC = new Date(Date.now());
        console.log(`UTC: ${dateUTC.toString()}`);
        const localDateString = displayUserTimezone(dateUTC, offset);
        console.log(`user's timezone: ${localDateString}`);
    })
})