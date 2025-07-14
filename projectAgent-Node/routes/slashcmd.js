import { Router } from 'express';
const router = Router();

const postHandler = function(request, response) {
    console.log(`Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
    try {
        response.status(200).send(`${request.body['challenge']}`);
    } catch (err){
        console.log(err);
    }
}

router.post('/slashcmd', postHandler);

export default router;