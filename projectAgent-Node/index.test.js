import { app } from "./index.js";
const request = require("supertest");

import payload_good from "./test-data/payloads/payload-good.json" with { type: "json" };
import payload_bad_token from "./test-data/payloads/payload-bad-token.json" with { type: "json" };
import payload_bad_formatting from "./test-data/payloads/payload-bad-formatting.json" with { type: "json" };
import payload_bad_from_app from "./test-data/payloads/payload-bad-from-app.json" with { type: "json" };

// TODO test all endpoints with a second good payload
describe("POST /events with a valid payload", () => {
  it("sends 200 OK", async () => {
    const res = await request(app)
      .post("/events")
      .send(payload_good)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(200);
  });
});

describe("POST /events with an invalid payload with a bad token", () => {
  it("sends 401 Unauthorized", async () => {
    const res = await request(app)
      .post("/events")
      .send(payload_bad_token)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(401);
  });
});

describe("POST /events with an invalid payload with a formatting error", () => {
  it("sends 400 Bad Request", async () => {
    const res = await request(app)
      .post("/events")
      .send(payload_bad_formatting)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(400);
  });
});

describe("POST /events with a payload that came from Project Agent", () => {
  it("sends 200 OK, but does not create or edit any task", async () => {
    const res = await request(app)
      .post("/events")
      .send(payload_bad_from_app)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(200);
    // TODO expect no task to have been created or edited
  });
});

describe("POST /slashcmd with a valid payload", () => {
  it("sends 200 OK", async () => {
    const res = await request(app)
      .post("/slashcmd")
      .send(payload_good)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(200);
  });
});

describe("POST /slashcmd with an invalid payload with a bad token", () => {
  it("sends 401 Unauthorized", async () => {
    const res = await request(app)
      .post("/slashcmd")
      .send(payload_bad_token)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(401);
  });
});

describe("POST /slashcmd with an invalid payload with a formatting error", () => {
  it("sends 400 Bad Request", async () => {
    const res = await request(app)
      .post("/slashcmd")
      .send(payload_bad_formatting)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(400);
  });
});

describe("POST /tasks/newtask with a valid payload", () => {
  it("sends 200 OK", async () => {
    const res = await request(app)
      .post("/tasks/newtask")
      // TODO replace this payload with one that matches what this endpoint will use
      .send(payload_good)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(200);
    // TODO expect json of the new task
  });
});

describe("POST /tasks/newtask with an invalid payload with a bad token", () => {
  it("sends 401 Unauthorized", async () => {
    const res = await request(app)
      .post("/tasks/newtask")
      // TODO replace this payload with one that matches what this endpoint will use
      .send(payload_bad_token)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(401);
  });
});

describe("POST /tasks/newtask with an invalid payload with a formatting error", () => {
  it("sends 400 Bad Request", async () => {
    const res = await request(app)
      .post("/tasks/newtask")
      // TODO replace this payload with one that matches what this endpoint will use
      .send(payload_bad_formatting)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(400);
  });
});

describe("POST /tasks/update with a valid payload", () => {
  it("sends 200 OK", async () => {
    const res = await request(app)
      .post("/tasks/update")
      // TODO replace this payload with one that matches what this endpoint will use
      .send(payload_good)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(200);
    //TODO expect json of the updated task
  });
});

describe("POST /tasks/update with an invalid payload with a bad token", () => {
  it("sends 401 Unauthorized", async () => {
    const res = await request(app)
      .post("/tasks/update")
      // TODO replace this payload with one that matches what this endpoint will use
      .send(payload_bad_token)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(401);
  });
});

describe("POST /tasks/update with an invalid payload with a formatting error", () => {
  it("sends 400 Bad Request", async () => {
    const res = await request(app)
      .post("/tasks/update")
      // TODO replace this payload with one that matches what this endpoint will use
      .send(payload_bad_formatting)
      .set("Accept", "application/json");

    //console.log(JSON.stringify(res));

    expect(res.statusCode).toBe(400);
  });
});
