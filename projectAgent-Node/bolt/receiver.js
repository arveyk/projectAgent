import pkg from '@slack/bolt';
const { ExpressReceiver } = pkg;

const receiver = (expressApp) => {
  return new ExpressReceiver({
    app: expressApp
  });
};

export default receiver;