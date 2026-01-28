import { createMenuOptions } from "./createBlockPartsForNewTask";
import { EXAMPLE_ALL_PROJECTS_IN_NOTIONDB } from "../test-data/example-all-notion-projects";
import { EXAMPLE_ALL_NOTION_USERS } from "../test-data/example-all-notion-users"

describe("Test the value of the Confirm button of Slack block", () => {
    it("Should be within prescribed limits", function anomalyTest() {
        const projectMenuOptions = createMenuOptions("Project", EXAMPLE_ALL_PROJECTS_IN_NOTIONDB);
        expect(projectMenuOptions).toBeDefined();
        expect(projectMenuOptions.length).toBeLessThan(71);

	console.log(JSON.stringify(projectMenuOptions.slice(0, 5), null, 2))
    }),
    it("Should be within prescribed limits", () => {
        const assigneeMenuOptions = createMenuOptions("NotionUsers", EXAMPLE_ALL_NOTION_USERS);
        expect(assigneeMenuOptions).toBeDefined();
        expect(assigneeMenuOptions.length).toBeLessThan(71);

	console.log(JSON.stringify(assigneeMenuOptions.slice(0, 5), null, 2))
    })
})
