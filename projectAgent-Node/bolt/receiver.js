import App from '@slack/bolt';
const { ExpressReceiver } = App;

const receiver = (expressApp) => {
  return new ExpressReceiver({
    app: expressApp
  });
};

export default receiver;
