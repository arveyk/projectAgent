// const request = require("supertest");
import { searchUser } from "./searchUserAi";
import { EXAMPLE_ALL_NOTION_USERS } from "../../test-data/example-all-notion-users";
import { taskHarvey
 } from "../../test-data/tasks/example-tasks";
describe("Seach with ai", () => {
  it("Should return result with value false if user in not in Users", async () => {
    const res = await searchUser(taskHarvey, EXAMPLE_ALL_NOTION_USERS);
    expect(res.found).toBe(true);
  });
});
