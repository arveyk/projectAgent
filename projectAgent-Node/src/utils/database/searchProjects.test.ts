import { todo } from "node:test";
import { getProjects, getProjectsRaw, simplifyProject } from "./searchDatabase";
import { exampleProjectRaw } from "../../test-data/projects/example-projectRaw";
import { exampleProject } from "../../test-data/projects/example-project";
import { isFullPage } from "@notionhq/client";

describe("searchProjectsRaw", () => {
  it(
    "should return an array of projects excluding DONE projects",
    async () => {
      const rawProjects = await getProjectsRaw();
      expect(rawProjects.length).toBeGreaterThan(0);

      const finishedStatus = rawProjects.find(p => (
        isFullPage(p) &&
        p.properties["Status"].type === "select" &&
        !["Done", "Canceled"].includes(p.properties["Status"].select?.name ?? "")
      ))
      // Shouldn't contain any of projects with Status "Done" or "Canceled"
      expect(finishedStatus).toBeUndefined();
      
      todo("Move this to integration tests when integration tests are set up");
    },
    10000
  );
});

describe("searchProjects", () => {
  it(
    "should infer the project for a task",
    async () => {
      const projectsArr = await getProjects();
      expect(projectsArr.length).toBeGreaterThan(0);
      todo("Move this to integration tests when integration tests are set up");
    },
    10000
  );
});

describe("simplifyProject", () => {
  it("should simplify a raw project to a Project object", () => {
    if (!isFullPage(exampleProjectRaw)) throw new Error("exampleRawProject is not a full page");
    expect(
      simplifyProject(exampleProjectRaw)
    ).toMatchObject(exampleProject);
  });
});

describe("Tests getTasksRaw with the new property filters", () => {
  it("Should return a non-empty list of tasks", async () => {
    const rawProjects = await getProjects();
    expect(rawProjects.length).toBeGreaterThan(0);
    console.log(rawProjects.length);
    console.log(JSON.stringify(rawProjects[0]));
  })
})