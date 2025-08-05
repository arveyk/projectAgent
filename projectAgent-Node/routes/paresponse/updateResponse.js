import axios from 'axios';
import { createEditBlock } from '../../blockkit/createBlocks.js';
import addTaskNotionPage from '../../utils/notiondb.js';
import { 
  SLACK_BOT_TOKEN 
} from '../../env.js';

export default function testUpdateReply(request, response) {
  const payload = JSON.parse(request.body.payload);
  console.log(`Body: ${JSON.stringify(request.body)}`);
  console.log(`Body.payload${JSON.stringify(request.body.payload)}`);
  console.log('TRIGGER_ID', payload['trigger_id']);
  console.log(`RESPONSE URL ${(payload['response_url'])}`);
  console.log(`ACTIONS: ${JSON.stringify(payload['actions'])}`);

  const trigger_id = payload['trigger_id'];
  const response_url = payload['response_url'];
  const message = payload['message'];
  console.log(`TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`);
	
  const action_id = payload['actions'][0]['action_id'];
  let action_text = "";
  
  if (typeof payload['actions'][0]['selected_option'] !== 'undefined' ) {
    action_text = payload['actions'][0]['selected_option']['text']['text'];
    
    if (action_text === "Approve") {
      const taskDetailsObj =  JSON.parse(payload['actions'][0].value);
      const createRowResult = addTaskNotionPage(taskDetailsObj); console.log(createRowResult);
      const replaceBlockRes =  axios({
        method: "post",
        url: response_url,
        data: { 
	        "replace_original": "true",
          "text": 'Block Replaced\nNotification: Task Created Successfully'
        },
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        }
      }).then((Response) => {
        console.log('Update msg',Response);
      }).catch((err) => {
        console.log(err);
      }); 
    } else {
      console.log('Changed Discarded'); 
    }
  } else {
    action_text = payload['actions'][0]['text']['text'];
    console.log("action_text in else block", action_text);
  
    if (action_text === "Approve") {
    // Task details
      const taskDetailsObj =  JSON.parse(payload['actions'][0]['value']);

      const createRowResult = addTaskNotionPage(taskDetailsObj);
      console.log(createRowResult);

      const replaceBlockRes =  axios({
        method: "post",
        url: response_url,
        data: { 
          "replace_original": "true",
          "text": 'Block Replaced\nNotification: Task Created Successfully'
        },
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        }
      }).then((Response) => {
        console.log('Update msg',Response);
      }).catch((err) => {
        console.log(err);
      });

    } else if (action_text === "Edit") {
      const taskDetailsObj =  JSON.parse(payload['actions'][0].value);
      const block = createEditBlock(taskDetailsObj);

      const editResp =  axios({
        method: "post",
        url: response_url,
        data: block,
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        }
      }).then((Response) => {
        console.log('Update msg',Response);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      console.log(`Text in button ${payload.actions[0]['value']}, Action_Text${action_text}`);
      const replaceBlockRes =  axios({
        method: "post",
        url: response_url,
        data: { 
          "replace_original": "true",
          "text": 'Changes Not Approved: \n Please Note that these actions are only visible to you'
        },
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        }
      }).then((Response) => {
        console.log('Update msg',Response);
      }).catch((err) => {
        console.log(err);
      });
    }  
  }
}
