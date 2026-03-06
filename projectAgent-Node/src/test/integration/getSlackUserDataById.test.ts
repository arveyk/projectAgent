import { EXAMPLE_SLACK_USER_IDS } from "../../test-data/example-slack-userids";
import { getSlackUserDataById } from "../../utils/controllers/getUsersSlack";

describe("Test getting assigned by from Notion using slack Id", () => {
  let userIndex = 0;
  // user row response mock out api call
  it.each(EXAMPLE_SLACK_USER_IDS)(
    `Should find ${EXAMPLE_SLACK_USER_IDS[userIndex].username} in Notion`,
    async (sampleUserInSlack) => {
      const existingSlackUser = await getSlackUserDataById(
        sampleUserInSlack.id,
      );

      expect(existingSlackUser.name).toBeDefined();
      expect(existingSlackUser.userId).toBe(sampleUserInSlack.id);
      expect(existingSlackUser.timezoneData).toBeDefined();
      console.log("Searching for", existingSlackUser);
      userIndex += 1;
    },
  );
  it("Tests invalid id", async () => {
    expect(async () => {
      await getSlackUserDataById("ISOUWHSH");
    }).rejects.toThrow("Invalid user ID");
  });
});
