import axios from 'axios';
import dotenv from 'dotenv';
import { ChatAnthropic } from '@langchain/anthropic';
import { z } from 'zod';


dotenv.config();
const APP_ID = process.env.PROJ_AGENT_APP_ID;

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
  api_key: process.env["ANTHROPIC_API_KEY"]
});

const task = z.object({
  tasktitle: z.string().describe("Short descriptive title of the task"),
  assignee: z.string().describe("Name of person assigned with the task"),
  duedate: z.string().describe("Task Due-date"),
  startdate: z.string().optional().describe("Task Start-date"),
  phonenumber: z.string().optional().describe("Assingnee phone number"),
  email: z.string().optional().describe("Assignee's email address"),
  preferredChannel: z.string().describe("Assignee\'s preferred channel of communication"),
  taskdetail: z.string().describe("details of the task"),
});


const structuredLlm = model.withStructuredOutput(task);

/**
 * Screens an incoming Slack message to see if it is a task assignment.
 * @param {*} reqBody 
 * @returns 
 */


const screenMessage = function(reqBody) {
  if (typeof reqBody !== 'undefined'){
    console.log('Request body is defined', reqBody["event"]);
    
    // TODO check if message is a task assignment
    let isTask = true
    
    if (!request.body["events"]) {
      return false;
    } else {
      const eventType = reqBody["event"]['type'] || 'No Event';
      switch (eventType) {
        case 'message':
          console.log("Message event detected [By screenMessage]");
	  break;
        case 'app_mention':
          console.log("App Mention Event detected [By screenMessange]");
          break;
        default:
          console.log("Unknown Event detected [By screenMessage]");
      }
    }

    // check if message is from Project Agent
    //console.log(`api app id: ${reqBody['api_app_id']}, app_id ${reqBody['event']['app_id']}`);
    const isFromProjAgent = (typeof (reqBody['event']['bot_id']) !== 'undefined');


    return (! isFromProjAgent && isTask);
  }
  else {
    throw new Error('Request body is undefined');
  }
}

const postHandler = async function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	 Request: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';
      if (screenMessage(request.body)) {
            // TODO send it to newTaskHandler
        console.log("it's a task!");
        console.log(`blocks: ${JSON.stringify(request.body['event']['blocks'])}`);
          const extrTasksDetails = await structuredLlm.invoke(`Please extract information from this text: ${request.body['event']['text']}`);
	  console.log(extrTasksDetails);
	  const res = await axios.post(eventResURL, {
          channel: '#task-management',
          //text: request.body['event']['text'],
          text: JSON.stringify(extrTasksDetails),
	
	  }, {
             headers: {
               "Authorization": `Bearer ${process.env['SLACK_BOT_TOKEN']}`,
               "Content-Type": "application/x-www-form-urlencoded",
	     }
	});
        console.log(res.data);
      } else {
        console.log("not a task");
      }
    } catch (err){
      console.log(err);
      return response.status(500).send(`Error and Body${request.body}`);
    }
  next();
}

export default postHandler;
