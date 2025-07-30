let channel_id = 'C08R4M9P5SM'

const confirmationBlock = {
  "text": "Which Field would you like to edit?",
  "replace_original": true,
  "blocks": [
    {
      "type": "header",
      "text": {
      "type": "plain_text",
        "text": "New request",
        "emoji": true
      }
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*Type:*\nPaid Time Off"
        },
        {
          "type": "mrkdwn",
          "text": "*Created by:*\n<example.com|Fred Enriquez>"
        }
      ]
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*When:*\nAug 10 - Aug 13"
        }
      ]
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Approve"
          },
          "style": "primary",
          "value": "click_me_123"
        },
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Reject"
          },
            "style": "danger",
            "value": "click_me_123"
        }
      ]
    }
  ]
};


const sampleModal = {
  "trigger_id": "trigger_id",
      "view": {
        "type": "modal",
        "callback_id": "modal-identifier",
        "title": {
          "type": "plain_text",
          "text": "Just a modal"
        },
        "blocks": [
          {
            "type": "section",
            "block_id": "section-identifier",
            "text": {
              "type": "mrkdwn",
              "text": "*Welcome* to ~my~ Block Kit _modal_!"
            },
            "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Just a button"
            },
            "action_id": "button-identifier"
            }
          }
        ]
      }
}
const RequestApprovalBlock = {
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
	"text": "*You Are About to Create a New Task*"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
	"type": "mrkdwn",
	"text": "*Task Title:*\t\t\t${_Task Title_} \n*Assignee:* \t\t\t${Assignee}\n*Due Date:*\t\t\t${_Due Date_}\n*Phone Number:*\t$[_545-039-5264_]\n*Description:* \t\t${Task_Description}"
      }
    },
    {
      "type": "actions",
      "elements": [
	{
	  "type": "button",
	  "text": {
	    "type": "plain_text",
	    "emoji": true,
	    "text": "Approve"
	  },
	  "style": "primary",
	  "value": "approve_123",
	  "action_id": "actionId-0"
	},
	{
	  "type": "button",
	  "text": {
	    "type": "plain_text",
	    "emoji": true,
	    "text": "Discard"
	  },
	  "style": "danger",
	  "value": "discard_123",
	    "action_id": "actionId-1"
	},
	{
	  "type": "button",
	  "text": {
	    "type": "plain_text",
            "text": "Edit",
	    "emoji": true
	  },
	  "value": "edit_123",
	  "action_id": "actionId-2"
	}
      ]
    },
    {
      "type": "divider"
    }
  ]
};
	

export {
  confirmationBlock,
  RequestApprovalBlock,
  sampleModal
};
