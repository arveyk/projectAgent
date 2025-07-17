const postHandler = function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	 Request Body: ${JSON.stringify(request.body)}`);
    } catch (err){
        console.log(err);
        response.status(500).send(`${request.body['challenge']}`);
    }
  next();
}

export default postHandler;
