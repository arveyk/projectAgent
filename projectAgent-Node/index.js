import { json } from 'express';
import express from 'express';
import router from './middlerouter.js'
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import App from '@slack/bolt';
import bolt from './bolt/index.js';

dotenv.config();

const PORT = parseInt(process.env.PORT) || 8080;

// Initialize an Express app
const app = express();
// Configure the Express app to work with Bolt
bolt.config(app);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

// TODO any Bolt methods need to be called within the Bolt part of the code, 
// because Express will not recognize them if they are called here.
app.use((request, response, next) => {
  app.logger.info(`${Date.now()}`);
  app.logger.info(`${JSON.stringify(request.body)}`);
  next();
});

app.post('/events', (request, response) => {
  response.send(`${JSON.stringify(request.body)}`);
});

app.get('/', (request, response) => {
    try {
      console.log(`${JSON.stringify(request.body)}`);
      response.send(`Home handler: Request body ${JSON.stringify(request.body)}`);
    } catch (error) {
      console.error(error);
      response.status(500).send('Server Error');
    }
});

app.all('/', (request, response) => {
  if (request.body) {
    console.log(`Welcome Home: Here\' an  object, JavaScript object
      ${JSON.stringify(request.body)}`);
  }
  response.status(200).send(`${JSON.stringify(request.body)}`);
});

app.listen(PORT, () => {
  console.log(`Server's ears on port: ${PORT}`);
});
// export { app };


// (async () => {
//   await app.start(PORT);
//   app.logger.info(`⚡️ Bolt app is running! port:${PORT}`);
// })();

// export  { app };
