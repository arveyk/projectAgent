/* Post a message to a channel your app is in using ID and message tex
 Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
 */

const Slack = require('@slack/bolt');
const { WebClient, LogLevel } = require("@slack/web-api");
const token = process.env.SLACK_BOT_TOKEN
const signingSecret = process.env.SLACK_SIGNING_SECRET,
const nReadlines = require('n-readlines');

const sampleChats = new nReadlines('../samplechats.txt')
const channelID = process.env.CHANNEL_ID;

const app = new Slack.App({
  signingSecret: signingSecret,
  token: token
});
require('dotenv').config()
// WebClient instantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.


const client = new WebClient(token, {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});
async function publishMessage(id, text) {
  try {
    // Call the chat.postMessage method using the built-in WebClient
    
    const result = await app.client.chat.postMessage({
      // The token you used to initialize your app
      token: token,
      channel: id,
      text: text
      // You could also use a blocks[] array to send richer content
    });


    // Print result, which includes information about the message (like TS)
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
}

let line;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  while (line = sampleChats.next()) {
    await publishMessage(channelID, line.toString('ascii'));
    await sleep(120000);
  }
})();

