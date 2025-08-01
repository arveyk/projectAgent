import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from './env.js';

import express from 'express';
import router from './middlerouter.js'

const APP_PORT = parseInt(PORT) || 8080;

const expressApp = express();

expressApp.use(express.urlencoded({extended: false}));
expressApp.use(express.json());
expressApp.use(router);

expressApp.use((request, response, next) => {
  console.log(`${Date.now()}`);
  next();
});

expressApp.listen(APP_PORT, () => {
  console.log(`Server's ears on port: ${APP_PORT}`);
});

export { expressApp as app };
