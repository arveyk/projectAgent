import axios from 'axios';
import { confirmationBlock, RequestApprovalBlock } from './sampleBlocks.js'
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config({ path: path.join(__dirname, '..', '.env') });

const webhookURL0 = process.env.TASK_MANAGEMENT_WEBHOOK_URL 
const webhookURL1 = process.env.TASK_N8N_WEBHOOK_URL


console.log(webhookURL0)
//task management webhook url
axios({
  method: 'post',
  url: webhookURL0,
  data: confirmationBlock
}).then((response) => {
  console.log(response);
});


