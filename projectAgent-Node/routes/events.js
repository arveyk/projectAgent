const postHandler = function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	 Request Body: ${JSON.stringify(request.body)}`);
      response.status(200).send(`${request.body['challenge']}`);
    } catch (err){
        console.log(err);
    }
  next();
}

export default postHandler;
