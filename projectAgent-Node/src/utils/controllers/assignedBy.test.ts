import { EXAMPLE_SLACK_USER_IDS } from "../../test-data/example-slack-userids"
import { getSlackUserDataById } from "./getUsersSlack";
import { findAssignedBy } from "./findMatchingNotionUsers";


describe("Test getting assigned by from Notion using slack Id", () => {
    it("Should match user if name in Slack and Notion are the same", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[0];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);

            const user0sIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", user0sIdentityInNotion);

	    if (user0sIdentityInNotion[0]) {
              expect(user0sIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
	    }
    }),
    it("Should match user if name in Slack and Notion are the same", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[1];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);


            const user0sIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", user0sIdentityInNotion);

	    if (user0sIdentityInNotion[0]) {
              expect(user0sIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
	    }
    }),
    it("Should match user if name in Slack and Notion are the same", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[2];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);


            const user0sIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", user0sIdentityInNotion);

	    if (user0sIdentityInNotion[0]) {
              expect(user0sIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
	    }
    }),
    it("Should match user if name in Slack and Notion are the same", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[3];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);


            const user0sIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", user0sIdentityInNotion);
	    if (user0sIdentityInNotion[0]) {
              expect(user0sIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
	    }
    }),
    it("Should match user if name in Slack and Notion are the same", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[4];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);


            const user0sIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", user0sIdentityInNotion);

            expect(user0sIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
    })
})
