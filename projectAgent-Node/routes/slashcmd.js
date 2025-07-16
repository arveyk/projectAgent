const slashCmdHandler = function(request, response, next) {
    try {
      console.log(`Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
      response.status(200).send(`Slash command ${request.body['slashcmd']}`);
    } catch (err){
        console.log(err);
    }
  next();
}

export default slashCmdHandler;
