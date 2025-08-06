import { json } from "express";
import express from "express";

import eventsHandler from "./routes/events.js";
import slashCmdHandler from "./routes/slashcmd.js";
import newTaskHandler from "./routes/tasks/newtask.js";
import updateTaskHandler from "./routes/tasks/update.js";

const router = express.Router();
const PORT = parseInt(process.env.PORT) || 8080;

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.post("/home2", eventsHandler);
router.post("/slashcmd", slashCmdHandler);
router.use("/tasks", (request, response, next) => {
  response.status(204).send({
    RequestBody: JSON.stringify(request.body),
  });
});
router.use("/tasks/newtask", newTaskHandler);
router.use("/tasks/update", updateTaskHandler);
//router.use('/auth/slack', authRouter);

router.all("/", (request, response) => {
  console.log(`Welcome Home: Here\' an  object, JavaScript object
    ${JSON.stringify(request.body)}`);
  console.log(`event_type: ${request.body["event"]["type"]}
	  text: ${request.body["event"]["text"]}`);
  response.status(200).send(`${JSON.stringify(request.body)}`);
});

export default router;
