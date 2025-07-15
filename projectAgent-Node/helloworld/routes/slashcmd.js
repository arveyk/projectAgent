const slashCmdHandler = function(request, response, next) {
    console.log(`You called the SLASH command! Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
    try {
        response.status(200).send(`${JSON.stringify(request.body)}`);
    } catch (err){
        console.log(err);
    }
    next();
}

export default slashCmdHandler;
