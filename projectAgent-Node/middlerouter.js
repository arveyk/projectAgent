import { json } from 'express';
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';

import eventsHandler from "./routes/events.js";
import slashCmdHandler from "./routes/slashcmd.js";
import newTaskHandler from "./routes/tasks/newtask.js";
import patchTaskHandler from "./routes/tasks/update.js";

import { interactionsHandler, 
  interactHandlerBlocks
} from "./routes/interact.js";
import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from './env.js';

const APP_PORT = parseInt(PORT) || 8080;
const router = express.Router();

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.post('/events', asyncHandler(eventsHandler), (request, response) => {
  response.send(JSON.stringify({
    channel: request.body['event']['channel'],
    text: request.body['event']['text'],
    challenge: request.body['challenge'],
  }));
});

router.post('/slashcmd', slashCmdHandler);

router.post('/slack/interact', interactHandlerBlocks);
router.get('/tasks', (request, response) => {
  response.send(JSON.stringify(
    [{
	    
       TasksTitle: 'Broad Spectrum',
       Assignee: 'Allen Mithika',
       Due_Date: '2025-09-05',
       Start_Date: `${Date.now()}`,
       preferredChannel: 'Slack'
    },
    {
       TasksTitle: 'Broad Spectrum',
       Assignee: 'Bill',
       Due_Date: '2025-09-05',
       Start_Date: `${Date.now()}`,
       preferredChannel: 'Slack'
	    
    },
    {
       TasksTitle: 'Broad Spectrum',
       Assignee: 'Peterson Mukwana',
       Due_Date: '2025-09-05',
       Start_Date: `${Date.now()}`,
       preferredChannel: 'WhatsApp'
    }
  ]));
});
router.post('/tasks/newtask', newTaskHandler);
router.patch('/tasks/update', patchTaskHandler);
//router.use('/auth/slack', authRouter);



export default router;
