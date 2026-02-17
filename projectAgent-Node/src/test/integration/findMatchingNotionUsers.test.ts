import { EXAMPLE_RAW_USERS_RESPONSE } from "../../test-data/cache/rawUsers";
import {
  compareNames,
  isPartialNameMatch,
  findMatchingNotionUser,
  deduplicateUsers,
} from "../../utils/controllers/findMatchingNotionUsers";
import { NotionUser } from "../../utils/controllers/userTypes";

describe("Tests compareNames", () => {
  it("returns true with exact match", () => {
    expect(compareNames("Ramona Madison", "Ramona Madison")).toBeTruthy();
  });
  it("returns false", () => {
    expect(compareNames("Ramona Madison", "Meow")).toBeFalsy();
  });
});

describe("tests isPartialNameMatch", () => {
  it("returns true", () => {
    expect(isPartialNameMatch("Ramona", "Ramona Madison")).toBeTruthy();
  });
  it("returns true", () => {
    expect(isPartialNameMatch("Ramona Madison", "Ramona")).toBeTruthy();
  });
  it("returns false", () => {
    expect(isPartialNameMatch("Ramona Madison", "Meow")).toBeFalsy();
  });
});

describe("Tests findMatchingAssigner", () => {
  it("Returns at least one result when given an exact name", async () => {
    const matches = await findMatchingNotionUser("Belteshazar Bond", EXAMPLE_RAW_USERS_RESPONSE);
    console.log(`Matches: ${JSON.stringify(matches)}`);

    expect(matches.length).toBeGreaterThan(0);
  });

  it("Returns at least one result when given a partial name", async () => {
    const matches = await findMatchingNotionUser("Bond", EXAMPLE_RAW_USERS_RESPONSE);
    console.log(`Matches: ${JSON.stringify(matches)}`);

    expect(matches.length).toBeGreaterThan(0);
  });

  it("Returns no results", async () => {
    const matches = await findMatchingNotionUser("meow", EXAMPLE_RAW_USERS_RESPONSE);
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
