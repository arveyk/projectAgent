import { QueryDataSourceResponse } from "@notionhq/client";

export const EXAMPLE_TASK_RESPONSE_NO_TITLE: QueryDataSourceResponse = {
    "object": "list",
    "results": [
        {
            "object": "page",
            "id": "262eef29-a653-8043-9f0f-fa584c51b8cf",
            "created_time": "2025-09-02T22:48:00.000Z",
            "last_edited_time": "2025-09-17T23:49:00.000Z",
            "created_by": {
                "object": "user",
                "id": "152d872b-594c-8145-9c2c-000204787b69"
            },
            "last_edited_by": {
                "object": "user",
                "id": "152d872b-594c-8145-9c2c-000204787b69"
            },
            "cover": null,
            "icon": {
                "type": "external",
                "external": {
                    "url": "https://www.notion.so/icons/clipping_lightgray.svg"
                }
            },
            "parent": {
                "type": "data_source_id",
                "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
                "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
            },
            "archived": false,
            "in_trash": false,
            "is_locked": false,
            "properties": {
                "Assigned by": {
                    "id": "KdiL",
                    "type": "people",
                    "people": [
                        {
                            "object": "user",
                            "id": "152d872b-594c-8145-9c2c-000204787b69",
                            "name": "Ramona Madison",
                            "avatar_url": "public.notion-static.com.jpg",
                            "type": "person",
                            "person": {
                                "email": "crmadison@gmail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "public.notion-static.com.jpg",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-domain.com"
                            }
                        }
                    ]
                },
                "Description": {
                    "id": "%40Ydr",
                    "type": "rich_text",
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Pick up the trash by tomorrow",
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
                            "plain_text": "Pick up the trash by tomorrow",
                            "href": null
                        }
                    ]
                },
                "Delay": {
                    "id": "%5B%3EkY",
                    "type": "formula",
                    "formula": {
                        "type": "string",
                        "string": null
                    }
                },
                "Completed on": {
                    "id": "%60d%3Bl",
                    "type": "date",
                    "date": null
                },
                "Task name": {
                    "id": "title",
                    "type": "title",
                    "title": []
                },
                "Tags": {
                    "id": "notion%3A%2F%2Ftasks%2Ftags_property",
                    "type": "multi_select",
                    "multi_select": []
                },
                "Assigned to": {
                    "id": "notion%3A%2F%2Ftasks%2Fassign_property",
                    "type": "people",
                    "people": [
                        {
                            "object": "user",
                            "id": "152d872b-594c-8145-9c2c-000204787b69",
                            "name": "Ramona Madison",
                            "avatar_url": "public.notion-static.com.jpg",
                            "type": "person",
                            "person": {
                                "email": "crmadison@gmail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "public.notion-static.com.jpg",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-domain.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "done",
                        "name": "Done",
                        "color": "green"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-04",
                        "end": null,
                        "time_zone": null
                    }
                },
                "Priority": {
                    "id": "notion%3A%2F%2Ftasks%2Fpriority_property",
                    "type": "select",
                    "select": null
                },
                "Sub-tasks": {
                    "id": "notion%3A%2F%2Ftasks%2Fsub_task_relation",
                    "type": "relation",
                    "relation": [],
                },
                "Parent-task": {
                    "id": "notion%3A%2F%2Ftasks%2Fparent_task_relation",
                    "type": "relation",
                    "relation": [],
                },
                "Project": {
                    "id": "notion%3A%2F%2Ftasks%2Ftask_to_project_relation",
                    "type": "relation",
                    "relation": [],
                }
            },
            "url": "https://www.notion.so/Task-262eef29a65380439f0ffa584c51b8cf",
            "public_url": null
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "page_or_data_source",
    "page_or_data_source": {},
};