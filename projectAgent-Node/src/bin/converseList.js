import axios from "axios";
import {
  SLACK_BOT_TOKEN,
} from '../env';


 async function listConv() {
  const result = await axios.get('https://slack.com/api/conversations.list', {
    headers: {
      'Authorization': `Bearer ${SLACK_BOT_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
      types: 'public_channel,private_channel,im,mpim',
      limit: 1000
    }
  });

  if (!result.data.ok) {
    throw new Error(`Error fetching conversations: ${result.data.error}`);
  }

  return result.data.channels;  
}
