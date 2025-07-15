const newTaskHandler = function(request, response, next) {
  console.log('Creating new task...');
  response.status(201).send(JSON.stringify({
    action: 'Creating New task',
    taskTitle: `${req.params["taskTitle"]}`,
    assignee: `${req.params["assignee"]}`
  }));
  next();
};

export default newTaskHandler;
