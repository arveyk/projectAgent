import { convertTaskPageFromDbResponse } from "./task";
import { pageObjectResponse } from "../../test-data/db-results/pageResponse";

describe("tests convertTaskPageFromDbResponse", () => {
  it("", () => {
    const taskPage = convertTaskPageFromDbResponse(pageObjectResponse);

    expect(taskPage).toBeDefined();
    expect(taskPage?.url).toEqual(pageObjectResponse.url);
    expect(taskPage.task.description).toEqual("Feed the cats every day. Give them their pills and ensure they have enough clean water."),
    expect(taskPage.task.project).toMatchObject([{"id":"262eef29-a653-80e7-82d5-ef29c4cba142"}])
    });
});
