//import { http } from '@google-cloud/functions-framework';
import { json } from 'express';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8080;

/*http('helloHttp', (req, res) => {
  const request_params = req.body.request_params;
  console.log(request_params);
  res.send(JSON.stringify({
    greeting: `Hello ${req.query.name || req.body.name || 'World'}!`,
    user_id: `${req.body['user_id']}`,
    channel_id: `${req.body['channel_id']}`,
    api_app_id: `${req.body['api_app_id']}`,
    channel_idL: `${req.body['channel_idL']}`,
    challenge: `${req.body['challenge']}`,
    text: `${req.body['text']}`
  }));
});

http('tasks', (req, res) => {
  res.status(204).send(JSON.stringify({
    "create-task": "Would you like to create a new task?"
  }));
});
*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all('/', (request, response) => {
  console.log(`Welcome Home: Here\' an  object, JavaScript object
    ${JSON.stringify(request.body)}`);
  response.status(200).send(`${JSON.stringify(request.body)}`);
});

app.post('/events', (request, response) => {
  console.log(`Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
  try {
    response.status(200).send(`${request.body['challenge']}}`);
  } catch (err){
    console.log(err);
  }
});


app.post('/tasks/newtask', (request, response) => {
  console.log('creating new task...');
  response.status(201).send(JSON.stringify({
    taskTitle: `${req.params["taskTitle"]}`,
    assignee: `${req.params["assignee"]}`
  }));
});

app.put('/tasks/update', (request, response) => {
  console.log('updating task');
});

app.listen(PORT, () => {
  console.log(`Server's ears on port: ${PORT}`);
});


export { app };
