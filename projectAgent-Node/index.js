import { json } from 'express';
import express from 'express';
import router from './middlerouter.js'
import dotenv from 'dotenv';
import bodyParser from 'body-parser'

import App from '@slack/bolt';
import bolt from './bolt/index.js';

dotenv.config();

const PORT = parseInt(process.env.PORT) || 8080;

// Initialize an Express expressApp
const expressApp = express();
// Configure the Express expressApp to work with Bolt
bolt.config(expressApp);

expressApp.use(express.urlencoded({extended: false}));
expressApp.use(express.json());
expressApp.use(router);

// TODO any Bolt methods need to be called within the Bolt part of the code, 
// because Express will not recognize them if they are called here.
expressApp.use((request, response, next) => {
  console.log(`${Date.now()}`);
  next();
});


expressApp.get('/', (request, response) => {
  if (request.body) {
    console.log(`Welcome Home: Here\' an  object, JavaScript object
      ${JSON.stringify(request.body)}`);
  }
  response.status(200).send(`${JSON.stringify(request.body)}`);
});

expressApp.listen(PORT, () => {
  console.log(`Server's ears on port: ${PORT}`);
});

export { expressApp };
