const newTaskHandler = function(request, response, next) {
  console.log('creating new task...');
  response.status(201).send(JSON.stringify({
    taskTitle: `${request.params["taskTitle"]}`,
    assignee: `${request.params["assignee"]}`
  }));

  next();
};

export default newTaskHandler;
