import { validateDueDate } from "./dateHandler";

describe("Test validateDueDate with a date in the future", () => {
  it("Returns true", () => {
    const testDate = new Date();
    testDate.setDate(testDate.getDate() + 1);
    const isValid = validateDueDate(testDate);

    expect(isValid).toBeTruthy();
  });
  it("returns true", () => {
    const testDate = new Date("2025-10-15");
    console.log(testDate);

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
