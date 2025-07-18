const patchTaskHandler = function(request, response, next) {
  console.log('updating task');
  response.send('Updates to be confirmed... stay tuned');
  next();
};

export default patchTaskHandler;
