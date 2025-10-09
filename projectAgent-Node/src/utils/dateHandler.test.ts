import { DateTime } from "luxon";
import { formatSlackDate, validateDate, validateDueDate } from "./dateHandler";
import { Task } from "./task";

const taskObj: Task = {
  "taskTitle":"Pick flowers for centerpiece",
  "assignee":"Josh",
  dueDate: new Date("2025-10-15T07:00:00.000Z"),
  "startDate": new Date("2025-10-09T16:37:50.048Z"),
  "description":"Pick flowers for the centerpiece"
}

describe("Tests formatSlackDate with a timestamp in ISO format with timezone offset", () => {
  it("Returns a properly formatted Slack date string", () => {
    const date: Date = DateTime.fromISO("2025-08-18T14:00:00-07:00").toJSDate();
    const slackDateString = formatSlackDate(date);

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
      expect(date.toISOString()).toMatch("2025-08-18T21:00:00.000Z");
    }
  });
  it("Returns a valid date when given a valid EAT date string", () => {
    const timestamp = "2025-09-20T03:00:00+03:00";
    const date = validateDate(timestamp);

    console.log(date);
    expect(typeof date === "string").toBeFalsy();
    if (typeof date !== "string") {
      expect(date.toISOString()).toMatch("2025-09-20T00:00:00.000Z");
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

describe("Test validateDueDate with a date in the future", () => {
  it("Returns true", () => {
    const testDate = new Date();
    testDate.setDate(testDate.getDate() + 1);
    const isValid = validateDueDate(testDate);

    expect(isValid).toBeTruthy();
  });
});

describe("Test validateDueDate with a date in the past", () =>
  it("Returns false", () => {
    const testDate = new Date();
    testDate.setDate(testDate.getDate() - 1);
    const isValid = validateDueDate(testDate);

    expect(isValid).toBeFalsy();
  }));

describe("Test validateDueDate with the current date", () =>
  it("Returns true", () => {
    const testDate = new Date();
    const isValid = validateDueDate(testDate);

    expect(isValid).toBeTruthy();
  }));

  describe("tests validateDueDate with actual data from production", () => {
    it("returns true", () => {
      console.log("this is the production data");
    const testDate = taskObj.dueDate;
    console.log(testDate);

    const isValid = validateDueDate(testDate);

    expect(isValid).toBeTruthy();
  });
  })
