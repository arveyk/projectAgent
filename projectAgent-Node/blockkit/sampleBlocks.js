let channel_id = 'C08R4M9P5SM'

const confirmationBlock = {
  "channel": `${channel_id}`,
  "text": "New Paid Time Off request from Fred Enriquez",
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
				"text": "You about to :\n*Add a task to the database*"
			}
		},
		{
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": "*Task Title:*\nNotion Integration"
				},
				{
					"type": "mrkdwn",
					"text": "*Due Date:*\n Aut 10 2025"
				},
				{
					"type": "mrkdwn",
					"text": "*Start date:*\nMar 10, 2025 (3 years, 5 months)"
				},
				{
					"type": "mrkdwn",
					"text": "*Description:*\nAdd Some tasks to the database ."
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
						"text": "Deny"
					},
					"style": "danger",
					"value": "click_me_123"
				}
			]
		}
	]
};
	

export {
  confirmationBlock,
  RequestApprovalBlock,
  sampleModal
};
