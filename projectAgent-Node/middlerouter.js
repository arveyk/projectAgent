import { json } from 'express';
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';


import eventsHandler from "./routes/events.js";
import slashCmdHandler from "./routes/slashcmd.js";
import newTaskHandler from "./routes/tasks/newtask.js";
import updateTaskHandler from "./routes/tasks/update.js";

dotenv.config();
const router = express.Router();
const PORT = parseInt(process.env.PORT) || 8080;

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.post('/events', eventsHandler, (request, response) => {
  const eventResURL = 'https://slack.com/api/chat.postMessage';
  (async () => {
    try {
	if (request.body['client_msg_id'] !== undefined) {
	  const res = await axios.post(eventResURL, {
            channel: '#task-management',
            text: request.body['event']['text'],
	    }, {
             headers: { 
               "Authorization": `Bearer ${process.env['SLACK_BOT_TOKEN']}`,
	       "Content-Type": "application/x-www-form-urlencoded",
	     }
	  });
	  console.log(res.data);
	}
    } catch (err) {
      console.error(err);
    }
  })();

  response.send(JSON.stringify({
    channel: request.body['event']['channel'],
    text: request.body['event']['text'],
    challenge: request.body['challenge'],
  }));
});
router.post('/slashcmd', slashCmdHandler);

router.get('/tasks', (request, response) => {
  response.send(JSON.stringify({
    TasksTitle: 'Broad Spectrum',
    Assignee: 'Allen Mithika',
    Due_Date: '2025-09-05',
    Start_Date: `${Date.now()}`,
    preferredChannel: 'Slack'
    
  }));
});
router.post('/tasks/newtask', newTaskHandler);

router.patch('/tasks/update', updateTaskHandler);
//router.use('/auth/slack', authRouter);



export default router;
