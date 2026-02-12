import { getNotionUsers } from "./getUsersNotion";
import { getSlackUsers } from "./getUsersSlack";

describe("Get notion users", () => {
  it("Should get all notion Users", async () => {
    const notionUser = await getNotionUsers();
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
