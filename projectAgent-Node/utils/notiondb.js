import { Client } from "@notionhq/client";
import { 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
} from '../env.js';

const notion = new Client({
  auth: NOTION_API_KEY,
});

const titleArray = [
  {
    "type": "text",
    "text": {
      "content": "Create Online E-commerce platform",
      "link": null
    },
    "annotations": {
      "bold": false,
      "italic": false,
      "strikethrough": false,
      "underline": false,
      "code": false,
      "color": "default"
    },
    "plain_text": "Title of the task",
    "href": null
  }
]

const richTextArr = [
  {
    "type": "text",
    "text": {
      "content": "Jake Bezoz",
      "link": null
    },
    "annotations": {
      "bold": false,
      "italic": false,
      "strikethrough": false,
      "code": false,
      "color": "default"
    },
    "href": null
  }
]
const prefCommChannArr = [
  {
    "type": "text",
    "text": {
      "content": "Slack or What",
      "link": null
    },
    "annotations": {
      "bold": false,
      "italic": false,
      "strikethrough": false,
      "code": false,
      "color": "default"
    },
    "href": null
  }
]

const taskDetailsArr = [
  {
    "type": "text",
    "text": {
      "content": "Some details missing",
      "link": null
    },
    "annotations": {
      "bold": false,
      "italic": false,
      "strikethrough": false,
      "code": false,
      "color": "default"
    },
    "plain_text": "Do the task",
    "href": null
  }
]

const replaceArr = [{
      "type": "text",
      "text": {
        "content": "Create a website to show case Vetcare's range of aniamal feeds, their theme colors are green blue and white, please play mainly with those",
      "link": null
      },
      "annotations": {
        "bold": false,
        "italic": false,
        "strikethrough": false,
        "underline": false,
        "code": false,
        "color": "default"
      },
      "href": null
    }	  
]

const TaskProperties = {
  "Task Title": {
    "type": "title",
    "title" : titleArray
  },
  "Assignee": {
    "type": "rich_text",
    "rich_text": richTextArr
  },
  "Due Date": {
    "type": "date",
    "date": { 
      "start": "2025-05-11"
    }

  },
  "Start Date": {
    "type": "date",
    "date": {
      "start": "2026-01-11"
    }
  },
  "Phone Number": {
    "type": "phone_number",
    "phone_number": "124-542-0973"
  },
  "Email": {
    "type": "email",
    "email": "example@email.com"
  },
  "Preferred Channel": {
    "type": "rich_text",
    "rich_text": prefCommChannArr
  },
  "Description": {
    "type": "rich_text",
    "rich_text": replaceArr
  },
  "Date Assigned": {
    "type": "date",
    "date": { 
      "start": "2025-05-11"
    }
  }
}

async function addTaskNotionPage(taskObj) {
  const taskTitle = taskObj["tasktitle"];
  const assignee = taskObj["assignee"]; 
  const dueDate = new Date(taskObj["duedate"]); 
  const startDate = new Date(taskObj["startdate"]) || new Date();
  const email = taskObj["email"] || "example@email.com";
  const phoneNumber = taskObj["phonenumber"] || "000***000***";
  const preferredChannel = taskObj["preferredchannel"] || "Slack";
  const dateAssigned = new Date();
  
  TaskProperties['Task Title']['title'][0]['text']['content'] = taskTitle;
  TaskProperties['Assignee']['rich_text'][0]['text']['content'] = assignee;
  TaskProperties['Due Date']['date']['start'] = dueDate;
  TaskProperties['Start Date']['date']['start'] = startDate; 
  TaskProperties['Email']['email'] = email;
  TaskProperties['Phone Number']['phone_number'] = phoneNumber; 
  TaskProperties['Preferred Channel']['rich_text'][0]['text']['content'] = preferredChannel; 
  TaskProperties['Description']['rich_text'][0]['text']['content'] = taskObj["taskdetail"];
  TaskProperties['Date Assigned']['date']['start'] = dateAssigned; 
  

  const newPage = await notion.pages.create({
    parent: {
      "database_id": NOTION_DATABASE_ID,
    },
    properties: TaskProperties,
  });
  console.log(newPage);
}

/*addTaskNotionPage({
  "Task Title": "Precide over local elections",
  "Assignee": "Khandi Kitaka",
  "Due Date": "7-11-2027",
  "Start Date": "1-11-2027",
  "Email": "replace@soon.com",
  "Phone Number": "43-335-344-4344",
  "Preferred Channel": "Call, email",
  "Task Details": "Mr Khandi Kitaka, you country needs you, Kasongo must go, please make sure that the elections are done in a transparent manner. Do not let any huligans disrupt the process. Police offices will be assigned to you so they will be under you instructions. You call the shots.",
});
*/
export default addTaskNotionPage;
