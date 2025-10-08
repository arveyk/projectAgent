import { convertTaskPageFromDbResponse } from "./task";
import { exampleDbResultExistingTask } from "../test-data/db-results/exampleDbResults";

describe("tests convertTaskPageFromDbResponse", () => {
    it("", () => {
        const taskPage = convertTaskPageFromDbResponse(exampleDbResultExistingTask);
        console.log(JSON.stringify(taskPage));
    })
})