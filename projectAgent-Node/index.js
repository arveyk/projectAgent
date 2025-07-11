import { http } from '@google-cloud/functions-framework';

http('helloHttp', (req, res) => {
  const request_params = req.body.request_params;
  console.log(request_params);
  res.send(`Hello ${req.query.name || req.body.name || 'World'}!\
  user_id: ${req.body['user_id']}  \n\
  channel_id: ${req.body['channel_id']} \n\
  api_app_id: ${req.body['api_app_id']} \n\
  channel_idL ${req.body['channel_id']} \n\
  challenge: ${req.body['challenge']}  \n\
  text: ${req.body['text']}  \n\
  `);
});


export { http };
