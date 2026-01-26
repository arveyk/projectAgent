import { EXAMPLE_SLACK_USER_IDS } from "../../test-data/example-slack-userids"
import { getSlackUserDataById } from "./getUsersSlack";
import { findAssignedBy } from "./findMatchingNotionUsers";

describe("Test getting assigned by from Notion using slack Id", () => {
    it.each(EXAMPLE_SLACK_USER_IDS)
    ("Should match user if name in Slack and Notion are the same", async (sampleUserInSlack) => {
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);

            const usersIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", usersIdentityInNotion);

            expect(usersIdentityInNotion.length).toBe(1)
            expect(usersIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
    })
})
