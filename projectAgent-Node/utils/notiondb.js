import { Client } from "@notionhq/client";
import { config } from "dotenv";

config();


//const pageId = process.env.NOTION_PAGE_ID;
const databaseId = process.env.NOTION_DATABASE_ID
const notionApiKey = process.env.NOTION_API_KEY


const notion = new Client({
  auth: notionApiKey,
});


const titleArray = [
  {
    "type": "text",
    "text": {
      "content": "Task Title",
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
    "plain_text": "Jeff B jr",
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
    "plain_text": "Slack",
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
      "plain_text": "Some words ",
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
    "rich_text": taskDetailsArr
  }
}

async function addTaskNotionPage(dbID, pageProperties) {
  const newPage = await notion.pages.create({
    parent: {
      "database_id": dbID,
    },
    properties: pageProperties,
  });
  console.log(newPage);
}

addTaskNotionPage(databaseId,TaskProperties);
