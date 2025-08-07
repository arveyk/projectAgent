const request = require("supertest");
import { parseTaskSlashCmd } from "./aiagent";

import payload_slash_cmd_infer_dates from "../test-data/payloads/payload-slash-cmd-infer-dates.json" with { type: "json" };

// TODO test slash command functions

describe("Tests parseTaskSlashCmd inferring dates", () => {
  it("Infers start date and due date correctly", async () => {
    expect(payload_slash_cmd_infer_dates).toBeDefined;
    expect(typeof payload_slash_cmd_infer_dates).toBe("object");

    const parsedTask = await parseTaskSlashCmd(payload_slash_cmd_infer_dates);
    console.log(JSON.stringify(parsedTask));
  });
});
