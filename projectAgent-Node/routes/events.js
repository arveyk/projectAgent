import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const APP_ID = process.env.PROJ_AGENT_APP_ID;

/**
 * Screens an incoming Slack message to see if it is a task assignment.
 * @param {*} reqBody 
 * @returns 
 */
const screenMessage = function(reqBody) {
  if (typeof reqBody !== 'undefined'){
    console.log('Request body is defined');
    // TODO check if message is a command
    const eventType = reqBody["event"]['type'] || 'No Event';
    	  //
    const isCommand = false;
    switch (eventType) {
      case 'message':
        console.log("Message event detected [By screenMessage]");
	break;
      case 'app_mention':
        console.log("App Mention Event detected [By screenMessange]");
        break;
      default:
        console.log("Unknown Event detected [By screenMessage]");
    }

    // check if message is from Project Agent
    console.log(`api app id: ${reqBody['api_app_id']}, app_id ${reqBody['event']['app_id']}`);
    const isFromProjAgent = (reqBody['event']['app_id'] === APP_ID);

    // TODO check if message is a task assignment
    const isTask = true

    return (!isFromProjAgent && isTask);
  }
  else {
    throw new Error('Request body is undefined');
  }
}

const thing = {"insertId":"687657510004ad27ab1a0145","jsonPayload":{"event_id":"Ev095FKRUR1V","event_time":1752586063,"api_app_id":"A08T4SJP659","token":"cdpGCjWC3RGCqp0yCWWJa3cD","event_context":"4-eyJldCI6ImFwcF9tZW50aW9uIiwidGlkIjoiVDAzVE5RRk42MlYiLCJhaWQiOiJBMDhUNFNKUDY1OSIsImNpZCI6IkMwOFI0TTlQNVNNIn0","authorizations":[{"enterprise_id":null,"is_enterprise_install":false,"team_id":"T03TNQFN62V","is_bot":true,"user_id":"U08TS0Z9725"}],"blocks":[{"elements":[{"type":"rich_text_section","elements":[{"user_id":"U08TS0Z9725","type":"user"},{"type":"text","text":" Carol hand me some file on Skyline design portfolio"}]}],"type":"rich_text","block_id":"XBQyU"}],"event_ts":"1752586063.569079","channel":"C08R4M9P5SM","text":"<@U08TS0Z9725> Carol hand me some file on Skyline design portfolio","user":"U03T772MESH","type":"event_callback","team":"T03TNQFN62V","client_msg_id":"ea3ffb61-65cc-4c6a-a18b-db4051373bf1","ts":"1752586063.569079","is_ext_shared_channel":false,"team_id":"T03TNQFN62V"},"resource":{"type":"cloud_run_revision","labels":{"configuration_name":"projectagent","location":"africa-south1","project_id":"focal-dolphin-464823-s3","service_name":"projectagent","revision_name":"projectagent-00003-rss"}},"timestamp":"2025-07-15T13:27:45.306471Z","labels":{"instanceId":"0069c7a9886808ffeeb24181dd9c88f968cca6f4ba78c90cab914d5363d376b0a2fe1cd98de1e4e017884a61943845a26be25d390516b55201539a50105ab3c298385d9c9ea0e5bba3c05333258629ce2821eb2dcf"},"logName":"projects/focal-dolphin-464823-s3/logs/run.googleapis.com%2Fstdout","receiveTimestamp":"2025-07-15T13:27:45.311660105Z"}

const postHandler = async function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	 Request Body: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';
      if (screenMessage(request.body)) {
            // TODO send it to newTaskHandler
        console.log("it's a task!");
        console.log(`blocks: ${request.body['blocks']}`);
        const res = await axios.post(eventResURL, {
          channel: '#task-management',
              // TODO fix this line
          text: request.body['event']['text'],
	}, {
             headers: {
               "Authorization": `Bearer ${process.env['SLACK_BOT_TOKEN']}`,
               "Content-Type": "application/x-www-form-urlencoded",
	     }
	});
        console.log(res.data);
      } else {
        console.log("not a task");
      }
    } catch (err){
      console.log(err);
      return response.status(500).send(`Error and Body${request.body}`);
    }
  next();
}

export default postHandler;
