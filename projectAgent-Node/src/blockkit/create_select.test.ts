import { createSelectionBlock } from "./create_select";
// import { describe, it } from "@jest/global";

describe("RUn without issue", () => {
  it("Should run", () => {
    console.log(
      JSON.stringify(createSelectionBlock(["iss"], ["Project1", "Project2"])),
    );
  });
});
