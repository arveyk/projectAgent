import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
});

const task = z.object({
  tasktitle: z.string().describe("Short descriptive title of the task"),
  assignee: z.string().describe("Name of person assigned with the task"),
  duedate: z.string().describe("Task Due-date"),
  startdate: z.string().optional().describe("Task Start-date"),
  phonenumber: z.string().optional().describe("Assingnee phone number"),
  email: z.string().optional().describe("Assignee's email address"),
  preferredChannel: z.string().describe("Assignee\'s preferred channel of communication"),
  taskdetail: z.string().describe("details of the task"),
});


const structuredLlm = model.withStructuredOutput(task);

const eventsHandler = function(request, response, next) {
    console.log(`Any tasks for me?
	  Request Body: ${JSON.stringify(request.body)}`);
    try {
	(async () => {
	  console.log(request.body['event']['text']);
	  const extrTasksDetails = await structuredLlm.invoke(`Please extract information from this text: ${request.body['event']['text']}`);
          response.status(200).send(`${request.body['challenge']}:->${JSON.stringify(extrTasksDetails)}`);
	})();
    } catch (err){
        console.log(err);
    }
  //  next();
}


export default eventsHandler;
