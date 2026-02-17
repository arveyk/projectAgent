export const EXAMPLE_CONFIRM_CREATE_TASK_WITH_SELECTION = {
    "type": "block_actions",
    "user": {
        "id": "U08UDKY38QK",
        "username": "harveykisiangani",
        "name": "harveykisiangani",
        "team_id": "T08VADHH17S"
    },
    "api_app_id": "A09RWHEGTCP",
    "token": " ",
    "container": {
        "type": "message",
        "message_ts": "1766586719.006800",
        "channel_id": "C08VADJ7SEL",
        "is_ephemeral": true
    },
    "trigger_id": "1024.8999264.a0cdde23c1e71",
    "team": {
        "id": "T08VADHH17S",
        "domain": "solutionalpro-1c61413"
    },
    "enterprise": null,
    "is_enterprise_install": false,
    "channel": {
        "id": "C08VADJ7SEL",
        "name": "all-solutional-project-agent"
    },
    "state": {
        "values": {
            "OiWMV": {
                "multi_select-action": {
                    "type": "multi_static_select",
                    "selected_options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "*Harvey Kisiangani --- harvey.kisiangani@solutional.com*",
                                "emoji": true
                            },
                            "value": "1"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "*Harvey Kisiangani --- harveykisiangani@gmail.com*",
                                "emoji": true
                            },
                            "value": "0"
                        }
                    ]
                }
            }
        }
    },
    "response_url": "https://hooks.slack.com/actions/ExampleChannel/exampleresponse/SampleEndPoint4eiXhWD6xo1",
    "actions": [
        {
            "action_id": "SelectionActionId-2",
            "block_id": "is1Dx",
            "text": {
                "type": "plain_text",
                "text": "Confirm",
                "emoji": true
            },
            "value": "{\"task\":{\"taskTitle\":\"Contact Quickmart manager to discuss employee coupons\",\"assignees\":[],\"assignedBy\":[],\"dueDate\":\"2025-12-25T21:00:00.000Z\",\"startDate\":\"2025-12-24T14:31:55.000Z\",\"description\":\"Contact Quickmart manager to discuss how we can have coupons for our employees this Friday\"},\"pageId\":\"\",\"url\":\"\"}",
            "style": "primary",
            "type": "button",
            "action_ts": "1766586748.157947"
        }
    ]
}
