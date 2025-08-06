import { validateDueDate } from "./validation";

describe("Test validateDueDate with a date in the future", () =>
  it("Returns true", () => {
    const testDate = new Date();
    testDate.setDate(testDate.getDate() + 1);
    const isValid = validateDueDate(testDate);

    expect(isValid).toBeTruthy();
  }));

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
