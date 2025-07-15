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

// app.post('/events', (request, response) => {
//   console.log(`Any tasks for me?
// 	  Request Body: ${JSON.stringify(request.body)}`);
//   try {
//     response.status(200).send(`${request.body['challenge']}`);
//   } catch (err){
//     console.log(err);
//   }
// });

// app.post('/slashcmd', (request, response) => {
//   console.log(`Any tasks for me?
// 	  Request Body: ${JSON.stringify(request.body)}`);
//   try {
//     response.status(200).send(`${request.body['challenge']}`);
//   } catch (err){
//     console.log(err);
//   }
// });

// app.post('/tasks/newtask', (request, response) => {
//   console.log('creating new task...');
//   response.status(201).send(JSON.stringify({
//     taskTitle: `${req.params["taskTitle"]}`,
//     assignee: `${req.params["assignee"]}`
//   }));
// });

// app.put('/tasks/update', (request, response) => {
//   console.log('updating task');
// });

app.listen(PORT, () => {
  console.log(`Server's ears on port: ${PORT}`);
});


export { app };
