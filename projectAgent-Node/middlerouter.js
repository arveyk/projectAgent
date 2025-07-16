import { json } from 'express';
import express from 'express';

import eventsHandler from "./routes/events.js";
import slashCmdHandler from "./routes/slashcmd.js";
import newTaskHandler from "./routes/tasks/newtask.js";
import updateTaskHandler from "./routes/tasks/update.js";


const router = express.Router();
const PORT = parseInt(process.env.PORT) || 8080;

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.post('/events', eventsHandler, (request, response) => {
  response.send(JSON.stringify(request.body));
});
router.use('/slashcmd', slashCmdHandler);
router.use('/tasks/newtask', newTaskHandler);
router.use('/tasks/update', updateTaskHandler);
//router.use('/auth/slack', authRouter);



export default router;
