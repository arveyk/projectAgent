import axios from 'axios';
import { createConfirmationBlock } from '../../blockkit/createBlocks.js';
import addTaskNotionPage from '../../utils/notiondb.js';
import { 
  SLACK_BOT_TOKEN 
} from '../../env.js';

export default function testUpdateReply(request, response) {
  const payload = JSON.parse(request.body.payload);
  //const payload = request.body.payload;
  console.log(`Body: ${JSON.stringify(request.body)}`);
  console.log(`Body.payload${JSON.stringify(request.body.payload)}`);
  console.log('TRIGGER_ID', payload['trigger_id']);
  console.log(`RESPONSE URL ${(payload['response_url'])}`);
  console.log(`ACTIONS: ${JSON.stringify(payload['actions'])}`);

  const action_id = payload['actions'][0]['action_id'];
  let action_text = "";
  if (payload['actions'][0]['selected_option']){
    action_text = payload['actions'][0]['selected_option']['text']['text'];
  
    if (action_text === "Approve") {
    // Task details
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
      return "Edit Block Yet to be handled";
    } else {
      action_text = payload['actions'][0]['text']['text'];
    }
  }
  
  
  const trigger_id = payload['trigger_id'];
  const response_url = payload['response_url'];
  const message = payload['message'];
  console.log(`TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`);
	
  if (action_text === "Approve") {
    // Task details
    const taskDetailsObj =  JSON.parse(payload['actions'][0].value);


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
        'Content-Type': 'application/json; charset=UTF-8',
      }
    }).then((Response) => {
      console.log('Update msg',Response);
    }).catch((err) => {
        console.log(err);
    });

    response.status(200).send('Nice test');
  } else if (action_text === "Edit") {
    const taskDetailsObj =  JSON.parse(payload['actions'][0].value);
    const block = createConfirmationBlock(taskDetailsObj);


    const editResp =  axios({
      method: "post",
      url: response_url,
      data: block,
      headers: {
        "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json; charset=UTF-8',
      }
    }).then((Response) => {
      console.log('Update msg',Response);
    }).catch((err) => {
        console.log(err);
    });
    response.status(200).send('Nice test'); 
  } else {
    const replaceBlockRes =  axios({
      method: "post",
      url: response_url,
      data: { 
	      "replace_original": "true",
        "text": 'Changes Not Approved: \n Please Note that these actions are only visible to you'
      },
      headers: {
        "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json; charset=UTF-8',
      }
    }).then((Response) => {
      console.log('Update msg',Response);
    }).catch((err) => {
        console.log(err);
    });
    response.status(200).send('Nice test'); 
  }
};
