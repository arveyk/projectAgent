import { json } from 'express';
import express from 'express';
import router from './middlerouter.js'
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import App from '@slack/bolt';


dotenv.config();

const PORT = parseInt(process.env.PORT) || 8080;
const { ExpressReceiver } = App;

const receiver = ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});


    try {
      console.log(`${JSON.stringify(request.body)}`);
      response.status(200);
      response.end(`Home handler: Request body ${JSON.stringify(request.body)}`);
    } catch (error) {
      console.error(error);
      response.writeHead(500);
      response.end('Server Error');
    }

const slackApp = new App.App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver
});

slackApp.event('message', async ({event, client}) => {
  await client.chat.postMessage(...);
});

const timeLogger = (request, response) => {
  slackApp.logger.info(`${Date.now()}`;
};
receiver.router.post('events', timeLogger, (request, response) => {
  response.send(`${JSON.stringify(request.body)}`);
);


/*
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

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
export { app };
*/

(async () => {
  await slackApp.start(PORT);
  slackApp.logger.info(`⚡️ Bolt app is running! port:${PORT}`);
})();
