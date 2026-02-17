import { findMatchingNotionUserByEmail } from "../../utils/controllers/findMatchingNotionUsers";
import * as getNotionWorkspaceUsers from "../../utils/controllers/getUsersNotion";
import { getNotionUsers } from "../../utils/controllers/getUsersNotion";
import { EXAMPLE_ALL_NOTION_USERS } from "../../test-data/example-all-notion-users";
import {
        BILL_IN_SLACK,
        DRAKE_IN_SLACK,
        EXAMPLE_JAMES_IN_SLACK,
        HARVEY_IN_SLACK,
        RAMONA_CECI_IN_SLACK
} from "../../test-data/example-slack-userdata";

jest.mock("../../utils/controllers/getUsersNotion");



describe("Test getting assigned by from Notion using slack Id", () => {
        beforeEach(() => {
                jest.resetModules();
                jest.clearAllMocks();

        });
        jest.spyOn(getNotionWorkspaceUsers, "getNotionUsers").mockResolvedValue(EXAMPLE_ALL_NOTION_USERS);
        it("Should find Harvey in Notion", async () => {
                const harveyIdentityInNotion = await findMatchingNotionUserByEmail(HARVEY_IN_SLACK.email);
                console.log("User's Identity in Notion", harveyIdentityInNotion);

                expect(harveyIdentityInNotion[0]).toBeDefined();
                expect(harveyIdentityInNotion[0].email).toMatch(HARVEY_IN_SLACK.email);
        });
        it("Should find James in Notion", async () => {
                const jamesIdentityInNotion = await findMatchingNotionUserByEmail(EXAMPLE_JAMES_IN_SLACK.email);
                console.log("User's Identity in Notion", jamesIdentityInNotion);

                expect(jamesIdentityInNotion[0]).toBeDefined();
                expect(jamesIdentityInNotion[0].email).toMatch(EXAMPLE_JAMES_IN_SLACK.email);
        });
        it("Should find Ramona in Notion", async () => {
                const ceciIdentityInNotion = await findMatchingNotionUserByEmail(RAMONA_CECI_IN_SLACK.email);
                console.log("User's Identity in Notion", ceciIdentityInNotion);

                expect(ceciIdentityInNotion[0]).not.toBeDefined();
        });
        it("Should find Bill Wilthers in Notion", async () => {
                const spectreIdentityInNotion = await findMatchingNotionUserByEmail(BILL_IN_SLACK.email);
                console.log("User's Identity in Notion", spectreIdentityInNotion);

                expect(spectreIdentityInNotion[0]).toBeDefined();
                expect(spectreIdentityInNotion[0].email).toMatch(BILL_IN_SLACK.email);
        });
        it("Should find Drake in Notion", async () => {
                const danielsIdentityInNotion = await findMatchingNotionUserByEmail(DRAKE_IN_SLACK.email);
                console.log("User's Identity in Notion", danielsIdentityInNotion);

                expect(danielsIdentityInNotion[0]).not.toBeDefined();
                // expect(danielsIdentityInNotion[0].email).not.toMatch(DRAKE_IN_SLACK.email);
		
        });
})
