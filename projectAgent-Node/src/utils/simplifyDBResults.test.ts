import { dbPage, simplifyDBResults } from "./simplifyDBResults";
import {
  exampleDbResult_1,
  exampleDbResult_2,
  exampleNewDb,
} from "../test-data/db-results/exampleDbResults";

describe("Tests simplifyDBResults with a list of 1 result", () => {
  it("Returns the task correctly", () => {
    const tasks: dbPage[] = [
      {
        pageId: "2437b3ca-5344-81c2-a7b1-fbc160d657a0",
        taskTitle: "Feed the cats daily",
        assignee: [{ name: "Josh", email: "jo@sh.com" }],
      },
    ];
    const dbResults = exampleDbResult_1;

    const simplifiedResults = simplifyDBResults(dbResults);
    console.log(JSON.stringify(simplifiedResults));
    expect(simplifiedResults).toMatchObject(tasks);
  });
});

describe("Tests simplifyDBResults with a list of multiple results", () => {
  it("Returns the task correctly", () => {
    const tasks: dbPage[] = [
      {
        pageId: "2487b3ca-5344-8039-813e-e3910160fe1b",
        taskTitle: "Pick up trash",
        assignee: [{ name: "Greg", email: "gr@eg.com" }],
      },
      {
        pageId: "2467b3ca-5344-81e1-b7e9-e2b46357d3c4",
        taskTitle: "Paint the fence",
        assignee: [{ name: "Greg", email: "gr@eg.com" }],
      },
      {
        pageId: "2467b3ca-5344-8129-b3af-d5354d1a1da7",
        taskTitle: "Print T-shirts for Anniversary",
        assignee: [{ name: "Greg", email: "gr@eg.com" }],
      },
    ];
    const dbResults = exampleDbResult_2;

    const simplifiedResults = simplifyDBResults(dbResults);
    console.log(JSON.stringify(simplifiedResults));
    expect(simplifiedResults).toMatchObject(tasks);
  });
});

describe("Tests simplifyDBResults with the new database", () => {
  it("Returns the tasks correctly", () => {
    const simplifiedResults = simplifyDBResults(exampleNewDb);
    console.log(JSON.stringify(simplifiedResults));
  });
});
