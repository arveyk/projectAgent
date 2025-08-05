import axios from 'axios';
import { confirmationBlock, RequestApprovalBlock } from './sampleBlocks.js'
import { TASK_MANAHEMENT_WEBHOOK_URL, TASK_N8N_WEBHOOK_URL } from '../env.js';

console.log(TASK_MANAHEMENT_WEBHOOK_URL)
//task management webhook url
axios({
  method: 'post',
  url: TASK_MANAHEMENT_WEBHOOK_URL,
  data: confirmationBlock
}).then((response) => {
  console.log(response);
});


