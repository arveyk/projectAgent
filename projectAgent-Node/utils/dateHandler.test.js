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
  it("Returns a properly formatted date string", () => {
    const timestamp = "2025-08-18T14:00:00-07:00";
    const dateString = validateDate(timestamp);

    console.log(dateString);
    expect(dateString).toMatch(
      "Mon Aug 18 2025 14:00:00 GMT-0700 (Pacific Daylight Time",
    );
  });
});

describe("Tests validateDate with a timestamp in ISO format with timezone offset", () => {
  it("Returns a properly formatted date string", () => {
    const timestamp = "20-09-2025";
    const dateString = validateDate(timestamp);

    console.log(dateString);
    expect(dateString).toMatch(
	    "Sat Sep 20 2025 03:00:00 GMT+0300 (East Africa Time)",
    );
  });
});

describe("Tests validateDate with a timestamp in a year different than this year", () => {
  it("Returns Invalid Date Value", () => {
    const timestamp = "2024-08-18T14:00:00-07:00";
    const dateString = validateDate(timestamp);

    console.log(dateString);
    expect(dateString).toMatch("Invalid Date Value");
  });
});
