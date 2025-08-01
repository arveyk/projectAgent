import axios from 'axios';
import dotenv from 'dotenv';
import { confirmationBlock } from '../../blockkit/createBlocks.js';
import addTaskNotionPage from '../../utils/notiondb.js';

dotenv.config();


const botToken = process.env.SLACK_BOT_TOKEN;

export default function testUpdateReply(request, response) {
  const payload = JSON.parse(request.body.payload);
  //const payload = request.body.payload;
  console.log(`Body: ${JSON.stringify(request.body)}`);
  console.log(`Body.payload${JSON.stringify(request.body.payload)}`);
  console.log('TRIGGER_ID', payload['trigger_id']);
  console.log(`RESPONSE URL ${(payload['response_url'])}`);
  console.log(`ACTIONS: ${JSON.stringify(payload['actions'])}`);

  const action_id = payload['actions'][0]['action_id'];
  const action_text = payload['actions'][0]['text']['text'];
  
  
  const trigger_id = payload['trigger_id'];
  const response_url = payload['response_url'];
  const message = payload['message'];
  console.log(`TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`);
  console.log(`payload Approve button value ${JSON.parse(payload.actions[0].value)}`);
  if (action_text === "Approve") {
//============PART CONTAININT TASK DETAILS ============
    const taskDetailsObj =  JSON.parse(payload['actions'][0].value);


    addTaskNotionPage(taskDetailsObj)
    const replaceBlockRes =  axios({
      method: "post",
      url: response_url,
      data: { 
	"replace_original": "true",
        "text": 'Block Replaced\nNotification: Task Created Successfully'
      },
      headers: {
        "Authorization": `Bearer ${botToken}`,
        'Content-Type': 'application/json; charset=UTF-8',
      }
    }).then((Response) => {
      console.log('Update msg',Response);
    }).catch((err) => {
        console.log(err);
    });

    response.status(200).send('Nice test');
  } else if (action_text === "Edit") {
    const editResp =  axios({
      method: "post",
      url: response_url,
      data: confirmationBlock,
      headers: {
        "Authorization": `Bearer ${botToken}`,
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
        "Authorization": `Bearer ${botToken}`,
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
