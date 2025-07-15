import { json } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import axios from 'axios'

import eventsRouter from "./routes/events.js";
import slashCmdRouter from "./routes/slashcmd.js";
import newTaskRouter from "./routes/tasks/newtask.js";
import updateTaskRouter from "./routes/tasks/update.js";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/events', eventsRouter);
app.use('/slashcmd', slashCmdRouter);
app.use('/tasks/newtask', newTaskRouter);
app.use('/tasks/update', updateTaskRouter);
//app.use('/auth/slack', authRouter);

app.all('/', (request, response) => {
  console.log(`Welcome Home: Here\' an  object, JavaScript object
    ${JSON.stringify(request.body)}`);
  console.log(`event_type: ${request.body['event']['type']}
	  text: ${request.body['event']['text']}`)
  response.status(200).send(`${JSON.stringify(request.body)}`);
});

app.listen(PORT, () => {
  console.log(`Server's ears on port: ${PORT}`);
});

//export { app };
