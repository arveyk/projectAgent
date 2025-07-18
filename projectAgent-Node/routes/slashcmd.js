const slashCmdHandler = function(request, response, next) {
    try {
      console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
      response.status(200).send(`Slash command ${request.body['event']['type']}`);
    } catch (err){
        console.log(err);
	return response.status(404).send(err);
    }
  next();
}

export default slashCmdHandler;
