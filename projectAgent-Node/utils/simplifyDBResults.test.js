import { simplifyDBResults } from "./simplifyDBResults";
import example_db_result from "../test-data/db-results/example_db_result.json" with { type: "json" };
import example_db_result_2 from "../test-data/db-results/example_db_result_2.json" with { type: "json" };

describe("Tests simplifyDBResults with a list of 1 result", () => {
  it("Returns the task correctly", () => {
    const tasks = [
      {
        pageId: "2437b3ca-5344-81c2-a7b1-fbc160d657a0",
        tasktitle: "Feed the cats daily",
        assignee: "Josh",
      },
    ];
    const dbResults = example_db_result;

    const simplifiedResults = simplifyDBResults(dbResults);
    console.log(JSON.stringify(simplifiedResults));
    expect(simplifiedResults).toMatchObject(tasks);
  });
});

describe("Tests simplifyDBResults with a list of multiple results", () => {
  it("Returns the task correctly", () => {
    const tasks = [
      {
        pageId: "2487b3ca-5344-8039-813e-e3910160fe1b",
        tasktitle: "Pick up trash",
        assignee: "Greg",
      },
      {
        pageId: "2467b3ca-5344-81e1-b7e9-e2b46357d3c4",
        tasktitle: "Paint the fence",
        assignee: "Greg",
      },
      {
        pageId: "2467b3ca-5344-8129-b3af-d5354d1a1da7",
        tasktitle: "Print T-shirts for Anniversary",
        assignee: "Greg",
      },
    ];
    const dbResults = example_db_result_2;

    const simplifiedResults = simplifyDBResults(dbResults);
    console.log(JSON.stringify(simplifiedResults));
    expect(simplifiedResults).toMatchObject(tasks);
  });
});
