import { EXAMPLE_SLACK_USER_IDS } from "../../test-data/example-slack-userids"
import { getSlackUserDataById } from "../../utils/controllers/getUsersSlack";



describe("Test getting assigned by from Notion using slack Id", () => {
        let userIndex = 0;
        // user row response mock out api call
        it.each(EXAMPLE_SLACK_USER_IDS)(`Should find ${EXAMPLE_SLACK_USER_IDS[userIndex].username} in Notion`, async (sampleUserInSlack) => {
                const usersIdentityInSlack = await getSlackUserDataById(sampleUserInSlack.id);
                expect(usersIdentityInSlack.name).toMatch(sampleUserInSlack.username);
                console.log("Searching for", usersIdentityInSlack);
                userIndex += 1;
        });
})
