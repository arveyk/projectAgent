import router from "./index.js";
import dotenv from "dotenv";
import App from "@slack/bolt";

const { ExpressReceiver } = App;

dotenv.config();

const PORT = parseInt(process.env.PORT) || 8080;

const homeHandler = {
  path: "/",
  method: ["GET"],
  handler: (request, response) => {
    response.writeHead(200);
    response.end(`Request Body content${JSON.stringify(request.body)}`);
  },
};

const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const slackApp = new App.App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver,
  customRoutes: [homeHandler],
});

slackApp.event("message", async ({ event, client }) => {
  await client.chat.postMessage("...");
});

receiver.router.use(router);

receiver.router.use((request, response, next) => {
  slackApp.logger.info(`Great timing! What is your request ${Date.now()}`);
  next();
});

(async () => {
  await slackApp.start(PORT);
  slackApp.logger.info(`⚡️ Bolt app is running on port ${PORT}!`);
})();

export { slackApp };
