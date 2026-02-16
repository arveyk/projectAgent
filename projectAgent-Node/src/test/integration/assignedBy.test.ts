import { EXAMPLE_SLACK_USER_IDS } from "../../test-data/example-slack-userids"
import { getSlackUserDataById } from "../../utils/controllers/getUsersSlack";
import { findAssignedBy } from "../../utils/controllers/findMatchingNotionUsers";


describe("Test getting assigned by from Notion using slack Id", () => {
    it("Should find Harvey in Notion", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[0];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);

            const indexZeroIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", indexZeroIdentityInNotion);

	    expect(indexZeroIdentityInNotion[0]).toBeDefined();
            expect(indexZeroIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
    });
    it("Should find James in Notion", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[1];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);


            const indexOneIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", indexOneIdentityInNotion);

	    expect(indexOneIdentityInNotion[0]).toBeDefined();
            expect(indexOneIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
    });
    it("Should find Chimera in Notion", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[2];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);


            const indexTwoIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", indexTwoIdentityInNotion);

	    expect(indexTwoIdentityInNotion[0]).not.toBeDefined();
            // expect(indexTwoIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
    });
    it("Should find 2nd Harvey in Notion", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[3];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);


            const indexThreeIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", indexThreeIdentityInNotion);

	    expect(indexThreeIdentityInNotion[0]).toBeDefined();
            expect(indexThreeIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
    });
    it("Should find Belteshazar in Notion", async () => {
            const sampleUserInSlack = EXAMPLE_SLACK_USER_IDS[4];
            const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
            expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
            console.log("Searching for", usersIdentityInSlack.name);


            const indexFourIdentityInNotion = await findAssignedBy(usersIdentityInSlack);
            console.log("User's Identity in Notion", indexFourIdentityInNotion);

	    expect(indexFourIdentityInNotion[0]).toBeDefined();
            expect(indexFourIdentityInNotion[0].email).toMatch(usersIdentityInSlack.email);
    })
})
