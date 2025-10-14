import { convertTaskPageFromDbResponse } from "./task";
import { exampleDbResultExistingTask } from "../test-data/db-results/exampleDbResults";
import { pageObjectResponse } from "../test-data/db-results/pageResponse";

describe("tests convertTaskPageFromDbResponse", () => {
  it("", () => {
    const taskPage = convertTaskPageFromDbResponse(pageObjectResponse);
    console.log(JSON.stringify(taskPage));
  });
});
