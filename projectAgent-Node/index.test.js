import { app } from "./index.js";
const request = require("supertest");

import { payloadGood, payloadBadToken, payloadFormattingError } from "./test-data/payloads/slashcmd/payloads.js";

// TODO replace the payloads
describe("POST /slashcmd with a valid payload", () => {
  it("sends 200 OK", async () => {
    const res = await request(app)
      .post("/slashcmd")
      .send(payloadGood)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(200);
  });
});

describe("POST /slashcmd with an invalid payload with a bad token", () => {
  it("sends 401 Unauthorized", async () => {
    const res = await request(app)
      .post("/slashcmd")
      .send(payloadBadToken)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(401);
  });
});

describe("POST /slashcmd with an invalid payload with a formatting error", () => {
  it("sends 400 Bad Request", async () => {
    const res = await request(app)
      .post("/slashcmd")
      .send(payloadFormattingError)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(400);
  });
});