/**
 *  MOCKING ENV VARIABLES TO ALLOW TEST TO RUN
 */
jest.mock("../../env", () => {
  return {
    SLACK_BOT_TOKEN: "fake_bot_token",
    SLACK_SIGNING_SECRET: "fake_signing_secret", // pragma: allowlist secret
    NOTION_API_KEY: "fake_notion_key", // pragma: allowlist secret
  };
});
import { findMatchingNotionUserByEmail } from "./findMatchingNotionUsers";
import * as getNotionWorkspaceUsers from "./getUsersNotion";
import { EXAMPLE_ALL_NOTION_USERS } from "../../test-data/example-all-notion-users";
import {
        BILL_IN_SLACK,
        DRAKE_IN_SLACK,
        EXAMPLE_JAMES_IN_SLACK,
        HARVEY_IN_SLACK,
        RAMONA_IN_SLACK
} from "../../test-data/example-slack-userdata";
import { EXAMPLE_RAW_USERS_RESPONSE } from "../../test-data/cache/rawUsers";

jest.mock("../../utils/controllers/getUsersNotion");

describe("Test getting assigned by from Notion using slack Id", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });
  jest
    .spyOn(getNotionWorkspaceUsers, "getNotionUsers")
    .mockResolvedValue(EXAMPLE_ALL_NOTION_USERS);
  it("Should find Harvey in Notion", async () => {
    const harveyIdentityInNotion = await findMatchingNotionUserByEmail(
      HARVEY_IN_SLACK.email,
      null,
    );
    console.log("User's Identity in Notion", harveyIdentityInNotion);

    expect(harveyIdentityInNotion[0]).toBeDefined();
    expect(harveyIdentityInNotion[0].email).toMatch(HARVEY_IN_SLACK.email);
  });
  it("Should find James in Notion", async () => {
    const jamesIdentityInNotion = await findMatchingNotionUserByEmail(
      EXAMPLE_JAMES_IN_SLACK.email,
      EXAMPLE_RAW_USERS_RESPONSE,
    );
    console.log("User's Identity in Notion", jamesIdentityInNotion);

                expect(jamesIdentityInNotion[0]).toBeDefined();
                expect(jamesIdentityInNotion[0].email).toMatch(EXAMPLE_JAMES_IN_SLACK.email);
        });
        it("Should find Ramona in Notion", async () => {
                const ramonaIdentityInNotion = await findMatchingNotionUserByEmail(RAMONA_IN_SLACK.email, EXAMPLE_RAW_USERS_RESPONSE);
                console.log("User's Identity in Notion", ramonaIdentityInNotion);

                expect(ramonaIdentityInNotion[0]).not.toBeDefined();
        });
        it("Should find Bill Wilthers in Notion", async () => {
                const spectreIdentityInNotion = await findMatchingNotionUserByEmail(BILL_IN_SLACK.email, null);
                console.log("User's Identity in Notion", spectreIdentityInNotion);

    expect(spectreIdentityInNotion[0]).toBeDefined();
    expect(spectreIdentityInNotion[0].email).toMatch(BILL_IN_SLACK.email);
  });
  it("Should find Drake in Notion", async () => {
    const mavericksIdentityInNotion = await findMatchingNotionUserByEmail(
      DRAKE_IN_SLACK.email,
      EXAMPLE_RAW_USERS_RESPONSE,
    );
    console.log("User's Identity in Notion", mavericksIdentityInNotion);

    expect(mavericksIdentityInNotion[0]).not.toBeDefined();
    // expect(mavericksIdentityInNotion[0].email).not.toMatch(DRAKE_IN_SLACK.email);
  });
});
