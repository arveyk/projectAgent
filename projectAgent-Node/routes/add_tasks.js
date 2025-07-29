import { Client } from '@notionhq/client';
import { 
  PORT, 
  SLACK_BOT_TOKEN, 
  SLACK_SIGNING_SECRET, 
  NOTION_API_KEY, 
  NOTION_DATABASE_ID, 
  ANTHROPIC_API_KEY, 
  PROJ_AGENT_APP_ID 
} from '../env.js';

const notion = new Client({ auth: NOTION_API_KEY });

const response = await notion.pages.create({
    parent: {
      database_id: NOTION_DATABASE_ID,
    },
    properties: 
    {
        "Phone Number":
        {
            "id":"%3C%5EUP",
            "type":"phone_number",
            "phone_number":"123-456-7890"
        },
        "Description":
        {
            "id":"%40Ydr",
            "type":"rich_text",
            "rich_text":
            [{
                "type":"text",
                "text":
                {
                    "content":"Schedule a meeting with the customer. Check the sender's Calendly for available times.",
                    "link":null
                },
                "annotations":
                {
                    "bold":false,
                    "italic":false,
                    "strikethrough":false,
                    "underline":false,
                    "code":false,
                    "color":"default"
                },
                "plain_text":"Schedule a meeting with the customer. Check the sender's Calendly for available times.",
                "href":null
            }]
        },
        "Preferred Channel":
        {
            "id":"%40~%3F%3A",
            "type":"rich_text",
            "rich_text":
            [{
                "type":"text",
                "text":
                {
                    "content":"Slack or What",
                    "link":null
                },
                "annotations":
                {"bold":false,
                "italic":false,
                "strikethrough":false,
                "underline":false,
                "code":false,
                "color":"default"
                },
                "plain_text":"Slack or What",
                "href":null
            }]
        },
        "Email":
        {
            "id":"C%7BQM",
            "type":"email",
            "email":"example@email.com"
        },
        "Start Date":
        {
            "id":"PAhZ",
            "type":"date",
            "date":
            {
                "start":"2026-01-11",
                "end":null,
                "time_zone":null
            }
        },
        "Assignee":
        {
            "id":"jDlj",
            "type":"created_by",
            "created_by":
            {
                "object":"user",
                "id":"77db293e-684f-4cf7-9ea1-c915c02855a4",
                "name":"Jacob",
                "avatar_url":null,
                "type":"bot",
                "bot":{}
            }
        },
        "Due Date":
        {
            "id":"r%3ErR",
            "type":"date",
            "date":
            {
                "start":"2025-05-11",
                "end":null,
                "time_zone":null
            }
        },
        "Task Title":
        {
            "id":"title",
            "type":"title",
            "title":
            [
                {
                    "type":"text",
                    "text":
                    {
                        "content":"Schedule meeting with customer",
                        "link":null
                    },
                    "annotations":
                    {
                        "bold":false,
                        "italic":false,
                        "strikethrough":false,
                        "underline":false,
                        "code":false,
                        "color":"default"
                    },
                    "plain_text":"Schedule meeting with customer",
                    "href":null
                }
            ]
        }
    },
  });

console.log(response);