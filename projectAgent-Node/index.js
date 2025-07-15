//import { http } from '@google-cloud/functions-framework';
import { json } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import axios from 'axios'

import eventsRouter from "./routes/events.js";
import slashCmdRouter from "./routes/slashcmd.js";
import newTaskRouter from "./routes/tasks/newtask.js";
import updateTaskRouter from "./routes/tasks/update.js";
//import authRouter from './routes/auth/slack/auth.js';

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
    if (request.body.jsonPayload) {
      let textChat = request.body['jsonPayload']['event']['text'];
      if (textChat) {
        console.log('Chat without bot user id' ,textChat.split('>')[1]);
      }
      console.log(`event_type: 
        ${request.body['jsonPayload']['event']['type']}
        raw_text:  ${request.body['jsonPayload']['event']['text']}
      `);
    }
  response.status(200).send(`${JSON.stringify(request.body)}`);
});

export { app };
