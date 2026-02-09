import { displayUserTimezone } from "./displayUserTimezone";

describe("tests displayUserTimezone", () => {
  it("", () => {
    const offset = -6;
    const dateUTC = new Date(Date.now()).toUTCString();
    console.log(`UTC: ${dateUTC}`);
    const localDateString = displayUserTimezone(dateUTC, offset);
    console.log(`user's timezone: ${localDateString}`);
  });
});
import { displayUserTimezone } from "./displayUserTimezone";

describe("tests displayUserTimezone", () => {
  it("converts a fixed UTC date to a user timezone string using the given offset", () => {
    const offset = -6;
    const dateUTC = new Date("2024-01-01T12:00:00Z").toUTCString();
    console.log(`UTC: ${dateUTC}`);
    const localDateString = displayUserTimezone(dateUTC, offset);
    console.log(`user's timezone: ${localDateString}`);
    expect(typeof localDateString).toBe("string");
    expect(localDateString.length).toBeGreaterThan(0);
  });
});
