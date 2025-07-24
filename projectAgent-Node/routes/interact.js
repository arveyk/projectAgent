import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


const bearerToken = process.env.SLACK_BOT_TOKEN;


function interactionsHandler (request, response, next) {
  console.log(request.body['actions']);
  console.log('TRIGGER_ID',request.body['trigger_id']);
  console.log(`REQUEST BODY ${request.body}`);
  console.log(`REQUEST BODY PAYLOAD${request.body.payload}`);

  const trigger_id = request.body['trigger_id'];
  console.log('TRIGGER_ID VARIABLE', trigger_id);

  const modalPost =  axios({
    method: "post",
    url: "https://slack.com/api/views.open",
    data: {
      "trigger_id": `${trigger_id}`,
      "view": {
        "type": "modal",
	"callback_id": "modal-identifier",
    	"title": {
          "type": "plain_text",
          "text": "Just a modal"
	},
        "blocks": [
          {
            "type": "section",
            "block_id": "section-identifier",
            "text": {
              "type": "mrkdwn",
              "text": "*Welcome* to ~my~ Block Kit _modal_!"
	    },
            "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Just a button"
            },
            "action_id": "button-identifier"
	    }
	  }
	]
      }
    },
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

export default interactionsHandler;
