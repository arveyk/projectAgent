import { compareNames, compareEmails, isPartialNameMatch, findMatchingAssignees, findMatchingNotionUser, deduplicateUsers } from "./userCreds";
import { NotionUser } from "./userTypes";

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
        const matches = await findMatchingNotionUser("Daniel Dirksen");
        console.log(`Matches: ${JSON.stringify(matches)}`);

        expect(matches.length).toBeGreaterThan(0);
    })

    it("Returns at least one result when given a partial name", async () => {
        const matches = await findMatchingNotionUser("Dirksen");
        console.log(`Matches: ${JSON.stringify(matches)}`);

        expect(matches.length).toBeGreaterThan(0);
    })

    it("Returns no results", async () => {
        const matches = await findMatchingNotionUser("meow");
        console.log(`Matches: ${JSON.stringify(matches)}`);

        expect(matches.length).toBe(0);
    })
})

describe("Tests deduplicateUsers", () => {
    it("removes all duplicate users", () => {
        const nameMatches: NotionUser[] = [
            {
                userId: "12345",
                name: "Bob"
            },
            {
                userId: "23456",
                name: "Alice"
            }
        ];
        const emailMatches: NotionUser[] = [
            {
                userId: "23456",
                name: "Alice"
            },
            {
                userId: "54321",
                name: "Corry"
            }
        ];

        const matches = deduplicateUsers(nameMatches, emailMatches);
        console.log(JSON.stringify(matches));
        expect(matches.length).toBe(3);
    })
})