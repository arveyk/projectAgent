import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const APP_ID = process.env.PROJ_AGENT_APP_ID;

/**
 * Screens an incoming Slack message to see if it is a task assignment.
 * @param {*} reqBody 
 * @returns 
 */
const screenMessage = function(reqBody) {
  if (typeof reqBody !== 'undefined'){
    console.log('Request body is defined');
    // TODO check if message is a command
    const isCommand = false;
    // check if message is from Project Agent
    // TODO find out why this is undefined
    console.log(`app id: ${reqBody['api_app_id']}`)
    const isFromProjAgent = (reqBody['api_app_id'] === APP_ID);
    // TODO check if message is a task assignment
    const isTask = true

    return (!isCommand && !isFromProjAgent && isTask);
  }
  else {
    throw new Error('Request body is undefined');
  }
}

const postHandler = function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	 Request Body: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';
      (async () => {
        try {
          if (screenMessage(request.body)) {
            // TODO send it to newTaskHandler
            console.log("it's a task!");
            console.log(`event: ${request.body['event']}`);
            const res = await axios.post(eventResURL, {
              channel: '#task-management',
              // TODO fix this line
              text: request.body.jsonPayload['event']['text'],
            }, {
             headers: {
               "Authorization": `Bearer ${process.env['SLACK_BOT_TOKEN']}`,
               "Content-Type": "application/x-www-form-urlencoded",
	     }
	    });
            console.log(res.data);
	  }
    else {
      console.log("not a task");
    }
	} catch (err) {
          console.error(err);
        }
      })();

    } catch (err){
        console.log(err);
        response.status(500).send(`Error and Body${request.body}`);
    }
  next();
}

export default postHandler;
