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
  //const dueDate = new Date(taskObj["duedate"]); 
  const dueDate = taskObj["duedate"];
  const startDate = (taskObj["startdate"] !== "") ? new Date(taskObj["startdate"]) : new Date();
  const email = taskObj["email"] || "";
  const phoneNumber = taskObj["phonenumber"] || "";
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
  
  try {
    const newPage = await notion.pages.create({
      parent: {
        "database_id": NOTION_DATABASE_ID,
      },
      properties: TaskProperties,
    });
    console.log(newPage);
    return newPage;
  } catch (error) {
    return error;
  }
}
/*
const taskObj = addTaskNotionPage({
  "tasktitle": "End of Hamas and rescue hostages",
  "assignee": "Benjamin Noah",
  "duedate": "7-11-2027",
  "startdate": "1-11-2027",
  "email": "replace@soon.com",
  "phonenumber": "43-335-344-4344",
  "preferredchannel": "Call, email",
  "taskdetail": "Benjamin Noah, draw for us a strategy for ending this war, many innocents are dying, especially on our side. What ever it takes, we must take them down and rescue our people",
});
*/

export default addTaskNotionPage;
