import { CACHE_DATA_EXAMPLE_ALL, CACHE_DATA_EXAMPLE_NO_USERS } from "../../test-data/cache/cacheItems";
import { getNotionUsers } from "./getUsersNotion";
import { getSlackUsers } from "./getUsersSlack";

describe("Get notion users", () => {
  it("Should get all Notion users when users are in the cache", async () => {
    const notionUser = await getNotionUsers(CACHE_DATA_EXAMPLE_ALL);
    expect(notionUser.length).toBeGreaterThan(0);
  });

  it("Should get all Notion users when users are not in the cache", async () => {
    const notionUser = await getNotionUsers(CACHE_DATA_EXAMPLE_NO_USERS);
    expect(notionUser.length).toBeGreaterThan(0);
  });
});

describe("Get Slack users", () => {
  it("Should get all Slack Users", async () => {
    const slackUsers = await getSlackUsers();
    expect(slackUsers.length).toBeGreaterThan(0);
    console.log("Slack users", slackUsers);
  });
});
