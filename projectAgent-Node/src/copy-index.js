import { http } from "@google-cloud/functions-framework";

http("helloHttp", (req, res) => {
  const request_params = req.body.request_params;
  console.log(request_params);
  res.send(
    JSON.stringify({
      greeting: `Hello ${req.query.name || req.body.name || "World"}!`,
      user_id: `${req.body["user_id"]}`,
      channel_id: `${req.body["channel_id"]}`,
      api_app_id: `${req.body["api_app_id"]}`,
      channel_idL: `${req.body["channel_idL"]}`,
      challenge: `${req.body["challenge"]}`,
      text: `${req.body["text"]}`,
    }),
  );
});

export { http };
