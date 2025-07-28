import axios from 'axios';

export default function testUpdateReply(request, response) {
  const payload = request.body;
        
  console.log('TRIGGER_ID', payload['trigger_id']);
  console.log(`RESPONSE URL ${(payload['response_url'])}`);
  console.log(payload['actions']);

  const trigger_id = payload['trigger_id'];
  const response_url = payload['response_url'];
  const message = payload['message'];
  console.log(`TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`);
  
  
    const modalPost =  axios({
      method: "post",
      url: response_url,
      data: { 
	      "replace_original": "true",
	      "text": 'Bloack Relaced'
      },
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((modalResponse) => {
      console.log('Update msg',modalResponse);
    }).catch((err) => {
        console.log(err);
    });

  response.status(200).send('Nice test');
};
