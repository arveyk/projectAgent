import { json } from 'express';
import express from 'express';
import router from './middlerouter.js'
import dotenv from 'dotenv';
import bodyParser from 'body-parser'

dotenv.config();
const PORT = parseInt(process.env.PORT) || 8080;

const expressApp = express();

expressApp.use(bodyParser.json());
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
  }
  else {
    console.log('your request has no body');
  }
  response.status(200).send(`${JSON.stringify(request.body)}`);
});

expressApp.listen(PORT, () => {
  console.log(`Server's ears on port: ${PORT}`);
});

export { expressApp as app };
