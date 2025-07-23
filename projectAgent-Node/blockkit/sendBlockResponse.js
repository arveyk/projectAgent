import axios from 'axios';
import { confirmationBlock, RequestApprovalBlock } from './sampleBlocks.js'

//task management webhook url
const webhookURL = "https://hooks.slack.com/services/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";

axios({
  method: 'post',
  url: webhookURL,
  data: confirmationBlock
}).then((response) => {
  console.log(response.body);
});


