import { deletePage } from "./db-deletepage";
import { describe, it } from "@jest/globals";

const testpageUrl = "https://www.notion.so/Test-section-34-fuselage-for-fatigue-and-stresses-293eef29a6538121b265cc85667429cb";
describe("Test deleting a notion page", () => {
  it("should not error", async ()=> {
  const response = await deletePage(testpageUrl);
  console.log(response);
  });
})
