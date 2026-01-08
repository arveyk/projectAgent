import { getProjects } from "./searchDatabase";

describe("Search for a project task", () => {
  it("should infer the project for a task", async () => {
    const projectsArr = await getProjects();
    console.log(projectsArr);
  })
});

