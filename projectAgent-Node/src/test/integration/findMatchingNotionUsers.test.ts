import {
  compareNames,
  isPartialNameMatch,
  findMatchingNotionUser,
  deduplicateUsers,
} from "../../utils/controllers/findMatchingNotionUsers";
import { NotionUser } from "../../utils/controllers/userTypes";

describe("Tests compareNames", () => {
  it("returns true with exact match", () => {
    expect(compareNames("Chimera Tabitha", "Chimera Tabitha")).toBeTruthy();
  });
  it("returns false", () => {
    expect(compareNames("Chimera Tabitha", "Meow")).toBeFalsy();
  });
});

describe("tests isPartialNameMatch", () => {
  it("returns true", () => {
    expect(isPartialNameMatch("Chimera", "Chimera Tabitha")).toBeTruthy();
  });
  it("returns true", () => {
    expect(isPartialNameMatch("Chimera Tabitha", "Chimera")).toBeTruthy();
  });
  it("returns false", () => {
    expect(isPartialNameMatch("Chimera Tabitha", "Meow")).toBeFalsy();
  });
});

describe("Tests findMatchingAssigner", () => {
  it("Returns at least one result when given an exact name", async () => {
    const matches = await findMatchingNotionUser("Belteshazar Bond");
    console.log(`Matches: ${JSON.stringify(matches)}`);

    expect(matches.length).toBeGreaterThan(0);
  });

  it("Returns at least one result when given a partial name", async () => {
    const matches = await findMatchingNotionUser("Bond");
    console.log(`Matches: ${JSON.stringify(matches)}`);

    expect(matches.length).toBeGreaterThan(0);
  });

  it("Returns no results", async () => {
    const matches = await findMatchingNotionUser("meow");
    console.log(`Matches: ${JSON.stringify(matches)}`);

    expect(matches.length).toBe(0);
  });
});

describe("Tests deduplicateUsers", () => {
  it("removes all duplicate users", () => {
    const nameMatches: NotionUser[] = [
      {
        userId: "12345",
        name: "Bob",
      },
      {
        userId: "23456",
        name: "Alice",
      },
    ];
    const emailMatches: NotionUser[] = [
      {
        userId: "23456",
        name: "Alice",
      },
      {
        userId: "54321",
        name: "Corry",
      },
    ];

    const matches = deduplicateUsers(nameMatches, emailMatches);
    console.log(JSON.stringify(matches));
    expect(matches.length).toBe(3);
  });
});
