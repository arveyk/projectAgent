import { Router } from 'express';
const router = Router();

const putHandler = function(request, response) {
  console.log('updating task');
};

router.put('/tasks/update', putHandler);

export default router;