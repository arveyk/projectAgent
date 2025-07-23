const slashCmdHandler = function(request, response, next) {
    try {
      console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
      const command = request.body['command'];

      const commandParams = request.body['text'].split(' ');
      let firstArg = commandParams[0]
      let otherArgs = commandParams.slice(1, -1).join(' ');

      if (firstArg !== 'add'){
        response.status(400).send(`Format: add ${request.body['text']}`);
      } else {
        response.status(200).send(`Correct format ${request.body['command']}`);
      }
    } catch (err){
        console.log(err);
	return response.status(404).send(err);
    }
  next();
}

export default slashCmdHandler;
