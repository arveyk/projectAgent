/**
 *  MOCKING ENV VARIABLES TO ALLOW TEST TO RUN
 */
jest.mock("../../env", () => {
  return {
    SLACK_BOT_TOKEN: "fake_bot_token",
    SLACK_SIGNING_SECRET: "fake_signing_secret",
    NOTION_API_KEY: "fake_notion_key"
  }
});
import { EXAMPLE_RAW_USERS_RESPONSE } from "../../test-data/cache/rawUsers";


import { EXAMPLE_ALL_NOTION_USERS } from "../../test-data/example-all-notion-users";
import {
  compareNames,
  isPartialNameMatch,
  findMatchingNotionUser,
  deduplicateUsers,
} from "./findMatchingNotionUsers";
import * as getNotionWorkspaceUsers from "./getUsersNotion";

import { NotionUser } from "./userTypes";


jest.mock("../../utils/controllers/getUsersNotion");

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

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });
  it("Returns at least one result when given an exact name", async () => {

    jest.spyOn(getNotionWorkspaceUsers, "getNotionUsers").mockResolvedValue(EXAMPLE_ALL_NOTION_USERS);
    const matches = await findMatchingNotionUser("Maverick Bond", null);
    console.log(`Matches: ${JSON.stringify(matches)}`);

    expect(matches.length).toBeGreaterThan(0);
    expect(getNotionWorkspaceUsers.getNotionUsers).toHaveBeenCalledTimes(1);
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
    expect(getNotionWorkspaceUsers.getNotionUsers).toHaveBeenCalledTimes(1);

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
