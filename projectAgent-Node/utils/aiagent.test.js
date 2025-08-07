const request = require("supertest");
import { parseTaskSlashCmd } from "./aiagent";

import payload_good from "../test-data/payloads/payload-good.json" with { type: "json" };
import payload_bad_not_task from "../test-data/payloads/payload-bad-not-task.json" with { type: "json" };
import payload_bad_from_app from "../test-data/payloads/payload-bad-from-app.json" with { type: "json" };
import payload_bad_channel_join from "../test-data/payloads/payload-bad-channel-join.json" with { type: "json" };
import payload_good_feed_cats from "../test-data/payloads/payload-good-feed-cats.json" with { type: "json" };
import payload_good_infer_dates from "../test-data/payloads/payload-good-infer-dates.json" with { type: "json" };
import payload_slash_cmd_infer_dates from "../test-data/payloads/payload-slash-cmd-infer-dates.json" with { type: "json" };

// TODO test slash command functions
describe("Tests parseTaskNewMsg inferring dates", () => {
  it("Infers start date and due date correctly", async () => {
    expect(payload_good_infer_dates).toBeDefined;
    expect(typeof payload_good_infer_dates).toBe("object");

    const parsedTask = await parseTaskNewMsg(payload_good_infer_dates);
    console.log(JSON.stringify(parsedTask));
  });
});

// TODO fix test
describe("Tests parseTaskSlashCmd inferring dates", () => {
  it("Infers start date and due date correctly", async () => {
    expect(payload_slash_cmd_infer_dates).toBeDefined;
    expect(typeof payload_slash_cmd_infer_dates).toBe("object");

    const parsedTask = await parseTaskSlashCmd(payload_slash_cmd_infer_dates);
    console.log(JSON.stringify(parsedTask));
  });
});
