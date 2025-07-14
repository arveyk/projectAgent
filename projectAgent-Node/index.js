//import { http } from '@google-cloud/functions-framework';
import { json } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import eventsRouter from "./routes/events.js";
import slashCmdRouter from "./routes/slashcmd.js";
import newTaskRouter from "./routes/tasks/newtask.js";
import updateTaskRouter from "./routes/tasks/update.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/events', eventsRouter);
app.use('/slashcmd', slashCmdRouter);
app.use('/tasks/newtask', newTaskRouter);
app.use('/tasks/update', updateTaskRouter);

app.all('/', (request, response) => {
  console.log(`Welcome Home: Here\' an  object, JavaScript object
    ${JSON.stringify(request.body)}`);
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
