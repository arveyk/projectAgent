import { deletePage } from "./deleteDatabasePage";
import { describe, it } from "@jest/globals";

const testpageUrl =
  "https://www.notion.so/2387b3ca534480859025c97f0548887a?v=2387b3ca534480e4aed7000cf8ac8aa0&p=24d7b3ca534481bfad5ff27afc2fbd84&pm=s";
describe("Test deleting a notion page", () => {
  it("should not error", async () => {
    const response = await deletePage(testpageUrl);
    console.log(response);
  });
});
