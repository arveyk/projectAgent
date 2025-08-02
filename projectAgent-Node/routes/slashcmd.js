import { confirmationBlock, 
  createBlockNewTask,
  RequestApprovalBlock } from '../blockkit/createBlocks.js';
import axios from 'axios';
import { parseTaskSlashCmd } from '../utils/aiagent.js';
import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from '../env.js';

// webhook for taskmanagement channel only
const webhookURL = process.env.TASK_MANAGEMENT_WEBHOOK_URL 
const webhookURL0 = "https:slack.com/api/chat.postEphimeral"
console.log(webhookURL0);
const slashCmdHandler = async function(request, response, next) {
    try {
      console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
      const command = request.body['command'];

      const commandParams = request.body['text'].trim().split(' ');
      let firstArg = commandParams[0] 
      let otherArgs = commandParams.slice(1, -1).join(' ');

      if (firstArg !== 'add'){
	axios({
          method: 'post',
          url: request.body['response_url'], 
          data: {
          // "response_type": "ephemeral",
          // "replace_original": false,
	        "text": "Format: add ['Task Details']"
	      }
        }).then((resp) => {
          console.log('OK from slack Wrong command format Though', resp['status']);
	      });
        response.status(200).send("");
      } else {
      const task = await parseTaskSlashCmd(request.body);
// =======================DUMMY DATA======================
       const dummyTasksArray = [
         {
	   "Task Title": "Replenish Credit",
	   "Assignee": "Albert Hines",
	   "Due Date": "2-08-2025",
	   "Start Date": "1-08-2025",
	   "Email": "albert@example.com",
	   "Phone Number": "+211-515-8920",
	   "Preferred Channel": "Slack",
	   "Task Details": "Hi Albert, our Anthropic credits are out again, could you please look into refilling so that we can get to the Project Agent app?",
	 }, 
	 {
	   "Task Title": "Sculpt Minions",
	   "Assignee": "Pharrel Williams",
	   "Due Date": "1-02-2021",
	   "Start Date": "4-07-2022",
	   "Email": "pharrel.causeimhappy@gmail.com",
	   "Phone Number": "159-383-6411",
	   "Preferred Channel": "Skype",
	   "Task Details": "Pharrel, my guy. Thank you so much for allowing us to work with you on this project, could yu please share some ideas you have in mind perhaps sculpt a minion for us as a model for the animation"
	 }, {
	   "Task Title": "Compose a violin piece",
	   "Assignee": "Boccherini",
	   "Due Date": "7-08-2025",
	   "Start Date": "09-2-2024",
	   "Email": "example@replaceme.com",
	   "Phone Number": "244-328-38717",
	   "Preferred Channel": "Phone Call",
           "Task Details": "Boccherini compose a beautiful violin piece for the national parade",
	 }, {
	   "Task Title": "Create new Resume",
	   "Assignee": "Samantha Halley",
	   "Due Date": "12-05-2021",
	   "Start Date": "10-05-2021",
	   "Email": "smtsmith@yahoo.com",
	   "Phone Number": "038-489-7361",
	   "Preferred Channel": "Gmail",
           "Task Details": "Create a new resume using enhancv app and send to me. Want to see the difference that itt adds",
	 }, {
	   "Task Title": "Edit Company Brand promo video",
	   "Assignee": "Brandon Shaw",
	   "Due Date": "5-11-2024",
	   "Start Date": "1-10-2024",
	   "Email": "brad.shaw@123.com",
	   "Phone Number": "83-327-3176",
	   "Preferred Channel": "Discord",
           "Task Details": "Brandon Shaw, we need the Company promo video to create traction online, can you edit and get it ready in one month? Any challenges please let me know",
	 }, {
	   "Task Title": "Precide over local elections",
	   "Assignee": "Khandi Kitaka",
	   "Due Date": "8-11-2027",
	   "Start Date": "2-11-2027",
	   "Email": "replace@soon.com",
	   "Phone Number": "43-335-344-4344",
	   "Preferred Channel": "Call, email",
           "Task Details": "Mr Khandi Kitaka, you country needs you, Kasongo must go, please make sure that the elections are done in a transparent manner. Do not let any huligans disrupt the process. Police offices will be assigned to you so they will be under you instructions. You call the shots.",
	 }, {
	   "Task Title": "Benchmark and report Dell and Macbook",
	   "Assignee": "Mukwana",
	   "Due Date": "2-03-2025",
	   "Start Date": "4-03-2025",
	   "Email": "mukwana.mungwana@gmail.com",
	   "Phone Number": "254-719-504-966",
	   "Preferred Channel": "Slack",
           "Task Details": "Mukwana, benchmark these two specific machines and give us a report Macbook M4 chip-based latop and the new Dell 14 flagship. This will inform which machines we need to buy for the team. You get to keep them both for you efforts",
	 }, {
	   "Task Title": "Internal Accounts Auditing",
	   "Assignee": "Ailene Njogu",
	   "Due Date": "12-06-2025",
	   "Start Date": "11-04-2025",
	   "Email": "nj@ilene@email.com",
	   "Phone Number": "233-128-795-434",
	   "Preferred Channel": "Slack",
           "Task Details": "Ailene Njogu, carry out the internal accounts auditing and summarize you findings for us. Please be a thorough as you can. Ask for whichever number of assistance you need, we have inters who are eager to learn and am sure will greatly appreciate you wealth of wisdom",
	 }
       ];
// =========================== END OF DUMMY DATA======================================================

	      
// ===========ASYNC CALL TO createBlockNewTask since its an async function=============================
        const taskBlock = await createBlockNewTask(task);
        RequestApprovalBlock.blocks[3].elements[0].value = JSON.stringify(dummyTasksArray[0]);
	console.log(`block create by task$${JSON.stringify(taskBlock)}`);

//============ TODO call searchDB on task to determine if it should create new or edit existing========
	axios({
          method: 'post',
          url: request.body['response_url'], 
          data: taskBlock
        }).then((resp) => {
          console.log('OK from slack', resp['status']);
	      });
        response.status(200).send("");
      }
    } catch (err){
	console.log(err);
	return response.status(404).send('Server Error in SlashCmdHandler', err);
    }
  next();
}

export default slashCmdHandler;
