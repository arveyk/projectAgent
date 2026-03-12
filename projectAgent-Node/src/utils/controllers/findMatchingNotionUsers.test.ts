/**
 *  MOCKING ENV VARIABLES TO ALLOW TEST TO RUN
 */
jest.mock("../../env", () => {
  return {
    SLACK_BOT_TOKEN: "fake_bot_token", // pragma: allowlist secret
    SLACK_SIGNING_SECRET: "fake_signing_secret", // pragma: allowlist secret
    NOTION_API_KEY: "fake_notion_key", // pragma: allowlist secret
  };
});
import { EXAMPLE_NOTION_USERS_DOMAIN } from "../../test-data/domain/notionUsers";
import {
  compareNames,
  isPartialNameMatch,
  findMatchingNotionUser,
  deduplicateUsers,
} from "./findMatchingNotionUsers";

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
    const matches = await findMatchingNotionUser("Maverick Bond",
      EXAMPLE_NOTION_USERS_DOMAIN
    );
    console.log(`Matches: ${JSON.stringify(matches)}`);

    expect(matches.length).toBeGreaterThan(0);
  });

  it("Returns at least one result when given a partial name", async () => {
    const matches = await findMatchingNotionUser(
      "Bond",
      EXAMPLE_NOTION_USERS_DOMAIN,
    );
    console.log(`Matches: ${JSON.stringify(matches)}`);

    expect(matches.length).toBeGreaterThan(0);
  });

  it("Returns no results", async () => {
    const matches = await findMatchingNotionUser(
      "meow",
      EXAMPLE_NOTION_USERS_DOMAIN,
    );
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
