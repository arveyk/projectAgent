import axios from 'axios';
import { createEditBlock, createFinalBlock } from '../../blockkit/createBlocks.js';
import addTaskNotionPage from '../../utils/notiondb.js';
import { 
  SLACK_BOT_TOKEN 
} from '../../env.js';

export default function testUpdateReply(request, response, next) {
  const payload = JSON.parse(request.body.payload);
  console.log(`Body: ${JSON.stringify(request.body)}`);
  console.log(`Body.payload${JSON.stringify(request.body.payload)}`);
  console.log('TRIGGER_ID', payload['trigger_id']);
  console.log(`RESPONSE URL ${(payload['response_url'])}`);
  console.log(`ACTIONS: ${JSON.stringify(payload['actions'])}`);

  const trigger_id = payload['trigger_id'];
  const response_url = payload['response_url'];
  const message = payload['message'];
  console.log(`TRIGGER_ID VARIABLE ${trigger_id}: RESPONSE_URL ${response_url} MESSAGE ${JSON.stringify(message)}`);
	
  const action_id = payload['actions'][0]['action_id'];
  let action_text = "";
  
  if (typeof payload['actions'][0]['selected_option'] !== 'undefined' ) {
   /* action_text = payload['actions'][0]['selected_option']['text']['text'];
    
    if (action_text === "Approve") {
      const taskDetailsObj =  JSON.parse(payload['actions'][0].value);
      const createRowResult = addTaskNotionPage(taskDetailsObj); console.log(createRowResult);
      const replaceBlockRes =  axios({
        method: "post",
        url: response_url,
        data: { 
	        "replace_original": "true",
          "text": 'Block Replaced\nNotification: Task Created Successfully'
        },
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        }
      }).then((Response) => {
        console.log('Update msg',Response);
      }).catch((err) => {
        console.log(err);
      }); 
    } else {
      console.log('Changed Discarded'); 
    }*/
    console.log('Changed, No longer Handling these Blocks'); 
  } else {
    action_text = payload['actions'][0]['text']['text'];
    console.log("action_text in else block", action_text);
  
    if (action_text === "Approve") {
    // Task details
      const taskDetailsObj =  JSON.parse(payload['actions'][0]['value']);

      addTaskNotionPage(taskDetailsObj).then((createRowResult) => {
        console.log(`CREATE ROW RESULT:${JSON.stringify(createRowResult)}\n ROW ID:${createRowResult.id}`);
      });

      let replaceBlockRes
      if (createRowResult['object']) {
	replaceBlockRes =  axios({
          method: "post",
          url: response_url,
          data: { 
            "replace_original": "true",
            "text": 'Block Replaced\nNotification: Task Created Successfully',
            "blocks": [
	      {
                "type": "section",
	        "text": {
	          "type": "mrkdwn",
		  "text": ":white_check_mark: *Task Successfully Created*, "
	        }
	      },
	    ],
	  },
          headers: {
            "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
            "Content-Type": "application/json; charset=UTF-8",
          }
        }).then((Response) => {
          console.log('Update msg',Response);
        }).catch((err) => {
          console.log(err);
        });
    } else {
       replaceBlockRes =  axios({
         method: "post",
         url: response_url,
         data: { 
           "replace_original": "true",
           "text": 'Block Replaced',
	   "blocks": [
	      {
                "type": "section",
	        "text": {
	          "type": "mrkdwn",
		  "text": ":heavy_multiplication_x: *Unable to Create Entry*, "
	        }
	      },
	    ],
	  }
       }, {
       headers: {
         "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
         "Content-Type": "application/json; charset=UTF-8",
       }
     }).then((Response) => {
       console.log('Error while Attempting to create row, Please check inputs',Response);
     }).catch((err) => {
       console.log(err);
     });
    
    }
    } else if (action_text === "Edit") {
  //  TODO Change the approve to Submit
	    //  Set its Submit value to 
      const taskDetailsObj =  JSON.parse(payload['actions'][0].value);
      const block = createEditBlock(taskDetailsObj);

      const editResp =  axios({
        method: "post",
        url: response_url,
        data: block,
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        }
      }).then((Response) => {
        console.log('Update msg',Response);
      }).catch((err) => {
        console.log(err);
      });
    } else if (action_text === "Submit") {
	   // Another block?
      const taskDetailsObj = JSON.parse(payload['actions'][0].value);
      
      const actionKeysArr = Object.keys(payload.state.values);
      const userInputs = payload.state.values;
      const validDate = true;

      actionKeysArr.map((key) => {
        const actionIdKey = Object.keys(userInputs[key]);
	console.log("ActionIDKey: ", actionIdKey);
        
	switch (actionIdKey[0]) {
	  case "task_title_id":
	    taskDetailsObj.tasktitle = userInputs[key][actionIdKey].value;
	    break;
	  case "assignee_id":
	    taskDetailsObj.assignee = userInputs[key][actionIdKey].value;
	    break;
	  case "due_date_id":
	    try {
	      const dueDate = new Date(userInputs[key][actionIdKey].value).toString();
	      taskDetailsObj.duedate = dueDate;
	    } catch (error) {
	      validDate = false;
	    }
	    break;
	  case "start_date_id":
	    try {
	      const startDate = new Date(userInputs[key][actionIdKey].value).toString();
	      taskDetailsObj.startdate = startDate;
	    } catch (error) {
	      validDate = false;
	    }
	    break;
	  case "email_id":
	    taskDetailsObj.email = userInputs[key][actionIdKey].value;
	    break;
	  case "phone_number_id":
	    taskDetailsObj.phonenumber = userInputs[key][actionIdKey].value;
	    break;
	  case "preferred_channel_id":
	    taskDetailsObj.preferredchannel = userInputs[key][actionIdKey].value;
	    break;
	  case "task_details_id":
	    taskDetailsObj.taskdetails = userInputs[key][actionIdKey].value;
	    break;
	}
      });
      
      const block = createFinalBlock(taskDetailsObj);

      const editResp =  axios({
        method: "post",
        url: response_url,
        data: block,
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        }
      }).then((Response) => {
        console.log('Final Block Submission',Response);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      console.log(`Text in button ${payload.actions[0]['value']}, Action_Text${action_text}`);
      const replaceBlockRes =  axios({
        method: "post",
        url: response_url,
        data: { 
          "replace_original": "true",
          "text": 'Changes Not Approved',
	  "blocks": [
	    {
	      "type": "section",
	      "text": {
	        "type": "mrkdwn",
		"text": ":x: *Task Not Created*, "
	      }
	    },
	  ],
        },
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        }
      }).then((Response) => {
        console.log('Update msg',Response);
      }).catch((err) => {
        console.log(err);
      });
    }  
  }
  next();
}
