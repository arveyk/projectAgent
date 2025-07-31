import { 
  SLACK_BOT_TOKEN,
} from '../env.js';

import axios from 'axios';

//When we want to use AI agent
//import aiAgent from "../utils/aiagent.js";

const postHandler = async function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	      Request: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';

      //const aiResult = aiAgent(request.body);

      if (!request.body['event']['bot_id']) {
        const channel_id = request.body['event']['channel'];
        console.log("it's a task!");

      const result = await axios.post(eventResURL, {
          channel: channel_id,
	        response_type: "ephemeral",
          text: `Well Hello there! got a new task for me?`,
          //text: JSON.stringify(task),
	
	     }, {
            headers: {
              "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
              "Content-Type": "application/x-www-form-urlencoded",
	          }
	        });

    // TODO send 400 bad request when the payload has a formatting error
    // TODO send 401 unauthorized if the payload has a bad token
  }} catch (err){
    console.log(err);
    return response.status(500).send(`Error and Body${JSON.stringify(err)}`);
  }
  next();
}

export default postHandler;
