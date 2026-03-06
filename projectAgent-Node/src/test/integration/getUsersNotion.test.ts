import { EXAMPLE_RAW_USERS_RESPONSE } from "../../test-data/cache/rawUsers";
import { getNotionUsers } from "../../utils/controllers/getUsersNotion";
import { getSlackUsers } from "../../utils/controllers/getUsersSlack";

describe("Get notion users", () => {
  it("Should get all Notion users when users are in the cache", async () => {
    const notionUser = await getNotionUsers(EXAMPLE_RAW_USERS_RESPONSE);
    expect(notionUser).toBeDefined();
    expect(notionUser.length).toBeGreaterThan(0);
  });

  it("Should get all Notion users when users are not in the cache", async () => {
    const notionUser = await getNotionUsers(null);
    expect(notionUser).toBeDefined();
    expect(notionUser.length).toBeGreaterThan(0);
  });
});

describe("Get Slack users", () => {
  it("Should get all Slack Users", async () => {
    const slackUsers = await getSlackUsers();

    expect(slackUsers).toBeDefined();
    expect(slackUsers.length).toBeGreaterThan(0);
    console.log("Slack users", slackUsers);
  });
});
