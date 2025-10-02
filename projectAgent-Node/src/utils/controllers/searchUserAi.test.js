const request = require("supertest");
import { searchUser } from "./searchUserAi";
import { users, task } from "./sample";

describe("Seach with ai", () => {
  it("Should return result with value false if user in not in Users", async () => {
    const res = await searchUser(task, users);
    expect(res.found).toBe(true);
  });
});
