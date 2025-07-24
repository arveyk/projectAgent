import { json } from 'express';
import express from 'express';
import router from './middlerouter.js'
import dotenv from 'dotenv';
import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from './env.js';

const APP_PORT = parseInt(PORT) || 8080;

const expressApp = express();

//expressApp.use(bodyParser.json());
expressApp.use(express.urlencoded({extended: false}));
expressApp.use(express.json());
expressApp.use(router);

expressApp.use((request, response, next) => {
  console.log(`${Date.now()}`);
  next();
});


expressApp.get('/', (request, response) => {
  if (request.body) {
    console.log(`Welcome Home: Here\' an  object, JavaScript object
      ${JSON.stringify(request.body)}`);
    response.status(200).send(`${JSON.stringify(request.body)}`);
  }
  else {
    console.log('your request has no body');
    response.status(500).send(`Request Body contents: ${JSON.stringify(request.body)}`);
  }
});

expressApp.listen(APP_PORT, () => {
  console.log(`Server's ears on port: ${APP_PORT}`);
});

export { expressApp as app };
