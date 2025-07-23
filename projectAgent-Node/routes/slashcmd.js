import axios from 'axios';
import { confirmationBlock, RequestApprovalBlock } from '../blockkit/sampleBlocks.js';
// webhook for taskmanagement channel only
const webhookURL = "https://hooks.slack.com/services/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";




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
          url: webhookURL,
          data: confirmationBlock
        }).then((resp) => {
          console.log('OK from slack', resp['status']);
	});
        response.status(200).send(`Correct format ${request.body['command']}`);
      }
    } catch (err){
        console.log(err);
	return response.status(404).send(err);
    }
  next();
}

export default slashCmdHandler;
