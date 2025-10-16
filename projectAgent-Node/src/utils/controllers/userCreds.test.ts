import { compareNames, compareEmails, isPartialNameMatch, findMatchingAssignees, findMatchingAssigner } from "./userCreds";

describe("Tests compareNames", () => {
    it("returns true with exact match", () => {
        expect(compareNames("Ceci Kurdelak", "Ceci Kurdelak")).toBeTruthy();
    })
    it("returns false", () => {
        expect(compareNames("Ceci Kurdelak", "Meow")).toBeFalsy();
    })
})

describe("tests isPartialNameMatch", () => {
    it("returns true", () => {
        expect(isPartialNameMatch("Ceci", "Ceci Kurdelak")).toBeTruthy();
    })
    it("returns true", () => {
        expect(isPartialNameMatch("Ceci Kurdelak", "Ceci")).toBeTruthy();
    })
    it("returns false", () => {
        expect(isPartialNameMatch("Ceci Kurdelak", "Meow")).toBeFalsy();
    })
})

describe("Tests findMatchingAssigner", () => {
    it("Returns at least one result when given an exact name", async () => {
        const matches = await findMatchingAssigner("Daniel Dirksen");
        console.log(`Matches: ${JSON.stringify(matches)}`);

        expect(matches.length).toBeGreaterThan(0);
    })

    it("Returns at least one result when given a partial name", async () => {
        const matches = await findMatchingAssigner("Dirksen");
        console.log(`Matches: ${JSON.stringify(matches)}`);

        expect(matches.length).toBeGreaterThan(0);
    })

    it("Returns no results", async () => {
        const matches = await findMatchingAssigner("meow");
        console.log(`Matches: ${JSON.stringify(matches)}`);

        expect(matches.length).toBe(0);
    })
})