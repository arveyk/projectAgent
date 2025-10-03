import { formatSlackDate, validateDate } from "./dateHandler";

describe("Tests formatSlackDate with a timestamp in ISO format with timezone offset", () => {
  it("Returns a properly formatted Slack date string", () => {
    const timestamp = "2025-08-18T14:00:00-07:00";
    const slackDateString = formatSlackDate(timestamp);

    console.log(slackDateString);
    expect(slackDateString).toMatch(
      "<!date^1755550800^{date_long}|2025-08-18T14:00:00-07:00>",
    );
  });
});

describe("Tests validateDate with a timestamp in ISO format with timezone offset", () => {
  it("Returns a valid date when given a valid PDT date string", () => {
    const timestamp = "2025-08-18T14:00:00-07:00";
    const date = validateDate(timestamp);

    console.log(date);
    expect(typeof date === "string").toBeFalsy();
    if (typeof date !== "string") {
      expect(date.toISOString()).toMatch(
        "2025-08-18T21:00:00.000Z",
      );
    }
  });
  it("Returns a valid date when given a valid EAT date string", () => {
    const timestamp = "2025-09-20T03:00:00+03:00";
    const date = validateDate(timestamp);

    console.log(date);
    expect(typeof date === "string").toBeFalsy();
    if (typeof date !== "string") {
      expect(date.toISOString()).toMatch(
        "2025-09-20T00:00:00.000Z",
      );
    }
  });
});

describe("Tests validateDate with a timestamp in a year different than this year", () => {
  it("Returns Invalid Date Value", () => {
    const timestamp = "2024-08-18T14:00:00-07:00";
    const dateString = validateDate(timestamp).toString();

    console.log(dateString);
    expect(dateString).toMatch("Invalid Date Value");
  });
});
