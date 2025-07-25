import axios from 'axios';
import dotenv from 'dotenv';
import { sampleModal, RequestApprovalBlock } from '../blockkit/sampleBlocks.js'
dotenv.config();


const bearerToken = process.env.SLACK_BOT_TOKEN;


function interactionsHandler (request, response, next) {
  console.log(request.body.payload['actions']);
  console.log('TRIGGER_ID',request.body.payload['trigger_id']);
  console.log(`REQUEST BODY PAYLOAD${JSON.stringify(request.body.payload)}`);

  const trigger_id = request.body.payload['trigger_id'];
  
  console.log('TRIGGER_ID VARIABLE', trigger_id, typeof(trigger_id));
  
  sampleModal.trigger_id = trigger_id;

  const modalPost =  axios({
    method: "post",
    url: "https://slack.com/api/views.open",
    data: sampleModal,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": `Bearer ${bearerToken}`,
    },
  }).then((modalResponse) => {
    console.log(modalResponse['data']);
  }).catch((err) => {
        console.log(err);
  });
  response.status(200).send('Interactions received');
}

function interactHandlerBlocks (request, response, next) {
  console.log(request.body.payload['actions']);
  console.log('TRIGGER_ID',request.body.payload['trigger_id']);
  console.log(`RESPONSE URL ${(request.body.payload.response_url)}`);
  console.log(`REQUEST BODY PAYLOAD${request.body.payload}\nPAYLOAD TYPE: ${typeof(request.body.payload)}`);
  
  const trigger_id = request.body.payload['trigger_id'];
  const response_url = request.body.payload['response_url'];
  const message = request.body.payload['message'];
  console.log(`TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`);
  
  sampleModal.trigger_id = trigger_id;
  
  if (message.edited){
    console.log('Response was Edited')
  } else {
    const modalPost =  axios({
      method: "post",
      url: request.body.payload['response_url'],
      data: RequestApprovalBlock,
    }).then((modalResponse) => {
      console.log(modalResponse['data']);
    }).catch((err) => {
        console.log(err);
    });
  }
  response.status(200).send('Interactions received');
}

export { interactionsHandler, interactHandlerBlocks }; 
