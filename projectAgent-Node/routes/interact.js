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
  console.log(`REQUEST BODY ${JSON.stringify(request.body)}`);
  console.log(`REQUEST BODY PAYLOAD${request.body.payload}`);
  
  const trigger_id = request.body.payload['trigger_id'];
  
  console.log('TRIGGER_ID VARIABLE', trigger_id);
  
  sampleModal.trigger_id = trigger_id;

  const modalPost =  axios({
    method: "post",
    url: request.body.payload['response_url'],
    data: RequestApprovalBlock,
  }).then((modalResponse) => {
    console.log(modalResponse['data']);
  }).catch((err) => {
        console.log(err);
  });
  response.status(200).send('Interactions received');
}

export { interactionsHandler, interactHandlerBlocks }; 
