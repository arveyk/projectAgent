import { getNotionUsers } from "./getUsersNotion";

describe("Get notion users", () => {
  it("Should get all notion Users", async () => {
    const notionUser = await getNotionUsers();
  });
});
