import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();


const botToken = process.env.SLACK_BOT_TOKEN;

export default function testUpdateReply(request, response) {
  const payload = JSON.parse(request.body.payload);
  //const payload = request.body.payload;
  console.log(`Body: ${JSON.stringify(request.body)}`);
  console.log(`Body.payload${JSON.stringify(request.body.payload)}`);
  console.log('TRIGGER_ID', payload['trigger_id']);
  console.log(`RESPONSE URL ${(payload['response_url'])}`);
  console.log(payload['actions']);


  const action_id = payload.actions['action_id'];

  const trigger_id = payload['trigger_id'];
  const response_url = payload['response_url'];
  const message = payload['message'];
  console.log(`TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`);
  
  
  console.log(`TRIGGER_ID VARIABLE :${trigger_id}, Trigg Type: ${typeof(trigger_id)}`);
  if (action_id === "uSoeH") {
    const replaceBlockRes =  axios({
      method: "post",
      url: response_url,
      data: { 
	"replace_original": "true",
        "text": 'Bloack Relaced'
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
  } else{
    response.status(200).send('Nice test'); 
  }

};
