import express from "express";

import slashCmdHandler from "./routes/slashcmd";
import newTaskHandler from "./routes/tasks/newtask";
import patchTaskHandler from "./routes/tasks/update";
import interactionHandler from "./routes/paresponse/updateResponse";
import { threadMsg } from "./routes/threadReply";
import { configDotenv } from "dotenv";

const router = express.Router();
console.log("We have a router!");

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

console.log("About to define POST route for slashcmd:");
router.post("/slashcmd", slashCmdHandler);
console.log("POST route defined!");

//router.post('/slack/interact', interactionsHandler);
router.post("/slack/interact", threadMsg);
router.get("/tasks", (request, response) => {
  try {
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
          TasksTitle: "Spectrum Analysis",
          Assignee: "Peterson Mukwana",
          Due_Date: "2025-09-05",
          Start_Date: `${Date.now()}`,
          preferredChannel: "WhatsApp",
        },
      ]),
    );
  } catch (error) {
    console.error(`(middlerouter) Error in tasks route ${error}:`);
  }
});
router.get("/", (request, response) => {
  try {
    response
      .status(200)
      .send("<h1>Welcome to Timely, save and retrieve tasks conveniently</h1>");
  } catch (error) {
    console.error(`(middlerouter) Error in home route ${error}`);
  }
});
router.post("/tasks/newtask", newTaskHandler);
router.patch("/tasks/update", patchTaskHandler);

router.post("/test/resp", interactionHandler, (request, response) => {
  try {
    response.status(200).send("Received Payload from Slack");
  } catch (error) {
    console.error(`(middlerouter) Error in test/resp route ${error}`);
  }
});
router.post("/events", (request, response) => {
  try {
    console.log(`Request Body${JSON.stringify(request.body)}`);
    response.status(200).send(request.body["challenge"]);
  } catch (error) {
    console.error(`(middlerouter) Error in events route ${error}`);
  }
});
export default router;
