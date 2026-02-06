export const EXAMPLE_USER_AND_PROJECT_SELECTED = {
	"payload": {
		"type": "block_actions",
		"user": {
			"id": "U08UDKY38QK",
			"username": "harveykisiangani",
			"name": "harveykisiangani",
			"team_id": "T08VADHH17S"
		},
		"api_app_id": "A0A6W48S823",
		"token": "cWjYlMtRpvakDg2fD3wU43KF",
		"container": {
			"type": "message",
			"message_ts": "1767964513.001200",
			"channel_id": "C08VADJ7SEL",
			"is_ephemeral": true
		},
		"trigger_id": "10264570572098.8996459579264.fc0a3d91fb6ed4403572be9f5fe4b4de",
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
				"24rJu": {
					"multi_select-action": {
						"type": "multi_static_select",
						"selected_options": [{
							"text": {
								"type": "plain_text",
								"text": "Harvey Kisiangani (harvey.kisiangani@solutional.com)", "emoji": true
							},
							"value": { "userId": "1e0d872b- 594c - 81e5 - be86 -000260493812", "name": "Harvey Kisiangani", "email": "harvey.kisiangani@solutional.com" }
						}
						]
					}
				},
				"pDrLp": {
					"multi_select-action": {
						"type": "multi_static_select",
						"selected_options": [
							{
								"text": {
									"type": "plain_text", "text": "*Project Assigned by Ceci*", "emoji": true
								},
								"value": "Project_cWjYlMtRpvakDg2fD3wU43KF"
							}
						]
					}
				}
			}
		},
		"response_url": "https://hooks.slack.com/actions/T08VADHH17S/10261141601669/dyRlNm9OlbYgP8rn2BUaOfjP",
		"actions": [
			{
				"action_id": "SelectionActionId-2",
				"block_id": "XyU0G",
				"text": {
					"type": "plain_text",
					"text": "Confirm",
					"emoji": true
				},
				"value": {
					"taskPageObject": {
						"task": {
							"taskTitle": "Prime the new pump", "assignees": [], "assignedBy": [], "startDate": "2026-01 -09T13: 15: 12.886Z", "description": "Prime the new pump for the project created by Ceci", "project": [{
								"id": "2bdeef29- a653 - 8093 - 97fb - f411a20b58ed"

							}]
						}, "pageId": "", "url": ""
					},
					"userOptions": [{
						"userId": "1e0d872b - 594c - 81e5 - be86 -000260493812", "name": "Harvey Kisiangani", "email": "harveykisiangani@gmail.com"
					},
					{
						"userId": "25cd872b - 594c - 8111 - 84e3-00020e1da9ea", "name": "Harvey Kisiangani", "email": "harvey.kisiangani@solutional.com"
					}],
					"projectOptions": [{
						"projectName": "Project Assigned by Harvey", "id": "2bdeef29 - a653 - 8020 - 9dd0 - e20ff33c265c"
					},
					{
						"projectName": "Project Assigned by Ceci", "id": "2bdeef29 - a653 - 8093 - 97fb - f411a20b58ed"
					}]
				},
				"style": "primary", "type": "button", "action_ts": "1767964532.869631"
			}]
	}
}


export const EXAMPLE_ONLY_ASSIGNEE_SELECTED = {
	"payload": {
		"type": "block_actions",
		"user": {
			"id": "U08UDKY38QK", "username": "harveykisiangani",
			"name": "harveykisiangani",
			"team_id": "T08VADHH17S"
		},
		"api_app_id": "A0A6W48S823",
		"token": " ", "container":
		{
			"type": "message",
			"message_ts": "1767964513.001200",
			"channel_id": "C08VADJ7SEL",
			"is_ephemeral": true
		},
		"trigger_id": "10264570572098.8996459579264.fc0a3d91fb6ed4403572be9f5fe4b4de",
		"team": {
			"id": "T08VADHH17S",
			"domain": "solutionalpro-1c61413"
		},
		"enterprise": null, "is_enterprise_install": false,
		"channel": {
			"id": "C08VADJ7SEL", "name": "all-solutional-project-agent"
		},
		"state": {
			"values": {
				"24rJu": {
					"multi_select-action": {
						"type": "multi_static_select",
						"selected_options": [{
							"text": {
								"type": "plain_text",
								"text": "Harvey Kisiangani (harvey.kisiangani@solutional.com)",
								"emoji": true
							},
							"value": "1"
						}]
					}
				},
				"pDrLp": {
					"multi_select-action": {
						"type": "multi_static_select",
						"selected_options": [{
							"text": {
								"type": "plain_text",
								"text": "*Project Assigned by Ceci*", "emoji": true
							},
							"value": "Project_1"
						}]
					}
				}
			}
		}, "response_url": "https://hooks.slack.com/actions/T08VADHH17S/10261141601669/dyRlNm9OlbYgP8rn2BUaOfjP",
		"actions": [{
			"action_id": "SelectionActionId-2",
			"block_id": "XyU0G", "text": { "type": "plain_text", "text": "Confirm", "emoji": true },
			"value": {
				"taskPageObject": {
					"task": {
						"taskTitle": "Prime the new pump",
						"assignees": [],
						"assignedBy": [],
						"startDate": "2026-01 -09T13: 15: 12.886Z",
						"description": "Prime the new pump for the project created by Ceci",
						"project": [{
							"id": "2bdeef29- a653 - 8093 - 97fb - f411a20b58ed"
						}]
					},
					"pageId": "",
					"url": ""
				},
				"userOptions": [{
					"userId": "1e0d872b - 594c - 81e5 - be86 -000260493812", "name": "Harvey Kisiangani", "email": "harveykisiangani@gmail.com"
				},
				{
					"userId": "25cd872b - 594c - 8111 - 84e3-00020e1da9ea", "name": "Harvey Kisiangani", "email": "harvey.kisiangani@solutional.com"
				}],
				"projectOptions": [{
					"projectName": "Project Assigned by Harvey", "id": "2bdeef29 - a653 - 8020 - 9dd0 - e20ff33c265c"
				},
				{
					"projectName": "Project Assigned by Ceci", "id": "2bdeef29 - a653 - 8093 - 97fb - f411a20b58ed"
				}]
			},
			"style": "primary",
			"type": "button",
			"action_ts": "1767964532.869631"
		}]
	}
}

export const EXAMPLE_ONLY_PROJECT_SELECTED = {
	"payload": {
		"type": "block_actions",
		"user": {
			"id": "U08UDKY38QK",
			"username": "harveykisiangani",
			"name": "harveykisiangani",
			"team_id": "T08VADHH17S"
		},
		"api_app_id": "A0A6W48S823",
		"token": " ", "container": {
			"type": "message",
			"message_ts": "1767969245.002800",
			"channel_id": "C08VADJ7SEL",
			"is_ephemeral": true
		},
		"trigger_id": "10263077280966.8996459579264.f04350577804046b456c67a6ca980e00",
		"team": {
			"id": "T08VADHH17S",
			"domain": "solutionalpro-1c61413"
		}, "enterprise": null,
		"is_enterprise_install": false,
		"channel": {
			"id": "C08VADJ7SEL",
			"name": "all-solutional-project-agent"
		},
		"state": {
			"values": {
				"btnTn": {
					"multi_select-action": {
						"type": "multi_static_select", "selected_options": []
					}
				},
				"qbjGD": {
					"multi_select-action":
					{
						"type": "multi_static_select",
						"selected_options": [
							{
								"text": {
									"type": "plain_text",
									"text": "*Project Assigned by Ceci*",
									"emoji": true
								},
								"value": "Project_1"
							}
						]
					}
				}
			}
		},
		"response_url": "https://hooks.slack.com/actions/T08VADHH17S/10278041067025/7QNg50JBvd9Cveb6C6l4M7DG",
		"actions": [{
			"action_id": "SelectionActionId-2",
			"block_id": "b5S64",
			"text": {
				"type": "plain_text", "text": "Confirm", "emoji": true
			},
			"value": {
				"taskPageObject": {
					"task": {
						"taskTitle": "Prime the new pump",
						"assignees": [],
						"assignedBy": [],
						"startDate": "2026-01-09T14:34:05.642Z",
						"description": "Prime the new pump for the project created by Ceci",
						"project": [{
							"id": "2bdeef29-a653-8093-97fb-f411a20b58ed"
						}]
					},
					"pageId": "",
					"url": ""
				},
				"userOptions": [{
					"userId": "1e0d872b-594c-81e5-be86-000260493812",
					"name": "Harvey Kisiangani", "email": "harveykisiangani@gmail.com"
				},
				{
					"userId": "25cd872b-594c-8111-84e3-00020e1da9ea",
					"name": "Harvey Kisiangani",
					"email": "harvey.kisiangani@solutional.com"
				}],
				"projectOptions": [{
					"projectName": "Project Assigned by Harvey",
					"id": "2bdeef29-a653-8020-9dd0-e20ff33c265c"
				},
				{
					"projectName": "Project Assigned by Ceci",
					"id": "2bdeef29-a653-8093-97fb-f411a20b58ed"
				}]
			},
			"style": "primary",
			"type": "button",
			"action_ts": "1767969254.611832"
		}]
	}
}
