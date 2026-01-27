import { searchDatabase } from "../utils/database/searchDatabase";

const message1 = "add Ceci, please fix the date formatting error";
const message2 =
  "add Harvey, please set up uptime monitoring for Notionfications";
const message3 =
  "add Ceci, could you finish the database migration by the end of the week?";

describe("Tests with message 1", () => {
  it("Logs timestamps", async () => {
    const response = await searchDatabase(message1);
  });
});

describe("Tests with message 2", () => {
  it("Logs timestamps", async () => {
    const response = await searchDatabase(message2);
  });
});

describe("Tests with message 3", () => {
  it("Logs timestamps", async () => {
    const response = await searchDatabase(message3);
  });
});
