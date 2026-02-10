// const request = require("supertest");
import { searchUser } from "../../utils/controllers/searchUserAi";
import { EXAMPLE_ALL_NOTION_USERS } from "../../test-data/example-all-notion-users";
import { taskHarvey
 } from "../../test-data/tasks/example-tasks";
describe("Seach with ai", () => {
  it("Should return result with value true if user is in Notion", async () => {
    const res = await searchUser(taskHarvey, EXAMPLE_ALL_NOTION_USERS);
    expect(res.found).toBe(true);
  });
});
