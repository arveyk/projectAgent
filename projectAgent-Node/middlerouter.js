import express from "express";

import slashCmdHandler from "./routes/slashcmd.js";
import newTaskHandler from "./routes/tasks/newtask.js";
import patchTaskHandler from "./routes/tasks/update.js";
import testUpdateReply from "./routes/paresponse/updateResponse.js";
import { threadMsg } from "./routes/threadReply.js";

const router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.post("/slashcmd", slashCmdHandler);

//router.post('/slack/interact', interactionsHandler);
router.post("/slack/interact", threadMsg);
router.get("/tasks", (request, response) => {
  response.send(
    JSON.stringify([
      {
        TasksTitle: "Broad Spectrum",
        Assignee: "Allen Mithika",
        Due_Date: "2025-09-05",
        Start_Date: `${Date.now()}`,
        preferredChannel: "Slack",
      },
      {
        TasksTitle: "Broad Spectrum",
        Assignee: "Bill",
        Due_Date: "2025-09-05",
        Start_Date: `${Date.now()}`,
        preferredChannel: "Slack",
      },
      {
        TasksTitle: "Broad Spectrum",
        Assignee: "Peterson Mukwana",
        Due_Date: "2025-09-05",
        Start_Date: `${Date.now()}`,
        preferredChannel: "WhatsApp",
      },
    ]),
  );
});
router.get("/", (request, response) => {
  response
    .status(200)
    .send("<h1>Welcome to Timely, save and retrieve tasks conveniently</h1>");
});
router.post("/tasks/newtask", newTaskHandler);
router.patch("/tasks/update", patchTaskHandler);
router.post("/test/resp", testUpdateReply, (request, response) => {
  response.status(200).send("Received Payload from Slack");
});

export default router;
