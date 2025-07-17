import App from '@slack/bolt';
import dotenv from 'dotenv';
import receiver from './receiver.js';
import handlers from './handlers/index.js';

dotenv.config();

const config = (expressApp) => {
  const boltApp = new App.App({
    receiver: receiver(expressApp),
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
  });

  handlers(boltApp);
};

export default { config };
