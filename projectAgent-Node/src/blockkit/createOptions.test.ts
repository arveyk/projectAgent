import { createMenuOptions } from "./createBlockPartsForNewTask";
import { EXAMPLE_ALL_PROJECTS_IN_NOTIONDB } from "../test-data/example-all-notion-projects";
import { EXAMPLE_ALL_NOTION_USERS } from "../test-data/example-all-notion-users";

describe("Test the value of the Confirm button of Slack block", () => {
  it("Should produce number of items in menu array within prescribed limits", function anomalyTest() {
    const projectMenuOptions = createMenuOptions(
      "Project",
      [...EXAMPLE_ALL_PROJECTS_IN_NOTIONDB, ...EXAMPLE_ALL_PROJECTS_IN_NOTIONDB],
    );
    expect(projectMenuOptions).toBeDefined();
    expect(projectMenuOptions.length).toBeLessThanOrEqual(100);

    console.log(JSON.stringify(projectMenuOptions.slice(0, 5), null, 2));
  }),
    it("Should produce number of items in menu array less than 100 or equal to", () => {
      const assigneeMenuOptions = createMenuOptions(
        "NotionUsers",
        [...EXAMPLE_ALL_NOTION_USERS, ...EXAMPLE_ALL_NOTION_USERS, 
         ...EXAMPLE_ALL_NOTION_USERS, ...EXAMPLE_ALL_NOTION_USERS,
         ...EXAMPLE_ALL_NOTION_USERS,],
      );
      // Making sure items exceed 100 before menu options are created
      expect(assigneeMenuOptions).toBeDefined();
      expect(assigneeMenuOptions.length).toBeLessThanOrEqual(100);

      console.log(JSON.stringify(assigneeMenuOptions.slice(0, 5), null, 2));
    });
});
