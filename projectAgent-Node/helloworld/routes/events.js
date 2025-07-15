const eventsHandler = function(request, response, next) {
    console.log(`Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
    try {
        response.status(200).send(`${request.body['challenge']}`);
    } catch (err){
        console.log(err);
    }
    next();
}


export default eventsHandler;
