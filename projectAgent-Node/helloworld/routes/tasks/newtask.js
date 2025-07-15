import { Router } from 'express';
const router = Router();

const postHandler = function(request, response) {
  console.log('creating new task...');
  response.status(201).send(JSON.stringify({
    taskTitle: `${req.params["taskTitle"]}`,
    assignee: `${req.params["assignee"]}`
  }));
};

router.post('/tasks/newtask', postHandler);

export default router;