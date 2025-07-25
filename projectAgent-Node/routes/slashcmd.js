import { confirmationBlock, RequestApprovalBlock } from '../blockkit/sampleBlocks.js';
import axios from 'axios';
import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from '../env.js';

// webhook for taskmanagement channel only
const webhookURL0 = process.env.TASK_MANAGEMENT_WEBHOOK_URL 
console.log(webhookURL0);

const slashCmdHandler = function(request, response, next) {
    try {
      console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
      const command = request.body['command'];

      const commandParams = request.body['text'].trim().split(' ');
      let firstArg = commandParams[0] 
      let otherArgs = commandParams.slice(1, -1).join(' ');

      if (firstArg !== 'add'){
        response.status(200).send(`Format: add ${request.body['text']}`);
      } else {
	axios({
          method: 'post',
          url: webhookURL0, 
          data: confirmationBlock
        }).then((resp) => {
          console.log('OK from slack', resp['status']);
	});
        response.status(200).send(`Correct format ${request.body['command']}`);
      }
    } catch (err){
        console.log(err.status);
	return response.status(404).send('Server Error');
    }
  next();
}

export default slashCmdHandler;
