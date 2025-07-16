const newTaskHandler = function(request, response, next) {
  console.log('creating new task...');
  response.status(201).send(JSON.stringify({
    taskTitle: `${req.params["taskTitle"]}`,
    assignee: `${req.params["assignee"]}`
  }));

  next();
};

export default newTaskHandler;
