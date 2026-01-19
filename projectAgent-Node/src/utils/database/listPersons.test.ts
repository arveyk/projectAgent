import { listPeopleNotion } from "./searchDatabase";


describe("Test getting emails from people datasource", () => {
  it("Should get all users in the People database", () => {
    listPeopleNotion();
  });
});
