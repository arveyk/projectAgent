import { DateTime } from "luxon";
import { formatDateString, validateDueDate } from "./dateHandler";

describe("Tests formatSlackDate", () => {
    it("Should return the date in <Day of week>, <Date> format", () => {
        const dateString = "01-01-2026";
        const formattedDate = formatDateString(dateString);
        console.log(formattedDate);
        expect(formattedDate).toMatch("Thu Jan 01 2026");
    })
});

describe("Tests validateDueDate", () => {
    it("Should return true when given the current date", () => {
        const dueDate = DateTime.now().toISODate();
        const isValidDueDate = validateDueDate(dueDate);
        expect(isValidDueDate).toBeTruthy();
    })
});

describe("Tests validateDueDate", () => {
    it("Should return true when given a date after the current date", () => {
        const dueDate = DateTime.now().plus({ days: 1 }).toISODate();
        const isValidDueDate = validateDueDate(dueDate);
        expect(isValidDueDate).toBeTruthy();
    })
});

describe("Tests validateDueDate", () => {
    it("Should return false when given a date before the current date", () => {
        const dueDate = DateTime.now().plus({ days: -1 }).toISODate();
        const isValidDueDate = validateDueDate(dueDate);
        expect(isValidDueDate).toBeFalsy();
    })
});