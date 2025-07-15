const updateTaskHandler = function(request, response, next) {
  console.log('updating task');
  next();
};

export default updateTaskHandler;
