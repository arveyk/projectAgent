import { PageObjectResponse, QueryDataSourceResponse } from "@notionhq/client/build/src/api-endpoints";

export const exampleNewDb: QueryDataSourceResponse = {
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task",
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
                            "plain_text": "Task",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
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
        },
        {
            "object": "page",
            "id": "262eef29-a653-80c9-8ef2-df95a590b55a",
            "created_time": "2025-09-02T15:52:00.000Z",
            "last_edited_time": "2025-09-17T23:49:00.000Z",
            "created_by": {
                "object": "user",
                "id": "13dd872b-594c-810f-8bb4-000282e27820"
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Example Task",
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
                            "plain_text": "Example Task",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
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
                        "start": "2025-09-30",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-8052-898d-f3cf22e11c74"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Example-Task-262eef29a65380c98ef2df95a590b55a",
            "public_url": null
        },
        {
            "object": "page",
            "id": "263eef29-a653-803f-b9ff-e972fa666d76",
            "created_time": "2025-09-03T18:00:00.000Z",
            "last_edited_time": "2025-09-22T19:44:00.000Z",
            "created_by": {
                "object": "user",
                "id": "152d872b-594c-8145-9c2c-000204787b69"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Test Task 3",
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
                            "plain_text": "Test Task 3",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
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
                        "start": "2025-09-19",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Test-Task-3-263eef29a653803fb9ffe972fa666d76",
            "public_url": null
        },
        {
            "object": "page",
            "id": "263eef29-a653-80bd-b97d-c5ab02f5fd79",
            "created_time": "2025-09-03T00:21:00.000Z",
            "last_edited_time": "2025-09-17T23:49:00.000Z",
            "created_by": {
                "object": "user",
                "id": "13dd872b-594c-810f-8bb4-000282e27820"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Example Task 2",
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
                            "plain_text": "Example Task 2",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "in-progress",
                        "name": "In Progress",
                        "color": "blue"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-19",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-8052-898d-f3cf22e11c74"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Example-Task-2-263eef29a65380bdb97dc5ab02f5fd79",
            "public_url": null
        },
        {
            "object": "page",
            "id": "263eef29-a653-80ce-b512-f8c7d2a1ac3e",
            "created_time": "2025-09-03T18:00:00.000Z",
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Test Task 2",
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
                            "plain_text": "Test Task 2",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-17",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Test-Task-2-263eef29a65380ceb512f8c7d2a1ac3e",
            "public_url": null
        },
        {
            "object": "page",
            "id": "263eef29-a653-80d0-a0b6-c62e827e0fb5",
            "created_time": "2025-09-03T17:59:00.000Z",
            "last_edited_time": "2025-10-13T19:54:00.000Z",
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Test Task 1",
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
                            "plain_text": "Test Task 1",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-01",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Test-Task-1-263eef29a65380d0a0b6c62e827e0fb5",
            "public_url": null
        },
        {
            "object": "page",
            "id": "263eef29-a653-80f2-b34d-fbad853d0456",
            "created_time": "2025-09-03T18:00:00.000Z",
            "last_edited_time": "2025-09-23T10:56:00.000Z",
            "created_by": {
                "object": "user",
                "id": "152d872b-594c-8145-9c2c-000204787b69"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Test Task 4",
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
                            "plain_text": "Test Task 4",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-23",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Test-Task-4-263eef29a65380f2b34dfbad853d0456",
            "public_url": null
        },
        {
            "object": "page",
            "id": "26aeef29-a653-80b9-89fb-c5305a9c834f",
            "created_time": "2025-09-10T15:17:00.000Z",
            "last_edited_time": "2025-09-23T11:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "152d872b-594c-8145-9c2c-000204787b69"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task",
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
                            "plain_text": "Task",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-22",
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
            "url": "https://www.notion.so/Task-26aeef29a65380b989fbc5305a9c834f",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-8005-9762-faaf9642b9e7",
            "created_time": "2025-09-22T19:37:00.000Z",
            "last_edited_time": "2025-09-23T10:35:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task Today 2",
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
                            "plain_text": "Task Today 2",
                            "href": null
                        }
                    ]
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
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "in-progress",
                        "name": "In Progress",
                        "color": "blue"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-23",
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
            "url": "https://www.notion.so/Task-Today-2-276eef29a65380059762faaf9642b9e7",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-8013-9986-c90924cab91d",
            "created_time": "2025-09-22T19:36:00.000Z",
            "last_edited_time": "2025-09-23T11:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task test Today",
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
                            "plain_text": "Task test Today",
                            "href": null
                        }
                    ]
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
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-23",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-8052-898d-f3cf22e11c74"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Task-test-Today-276eef29a65380139986c90924cab91d",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-803b-90eb-ee46b5bba8e6",
            "created_time": "2025-09-22T19:35:00.000Z",
            "last_edited_time": "2025-09-22T19:43:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task test Week",
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
                            "plain_text": "Task test Week",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-30",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Task-test-Week-276eef29a653803b90ebee46b5bba8e6",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-803e-a02f-dc29ec5d2578",
            "created_time": "2025-09-22T19:35:00.000Z",
            "last_edited_time": "2025-09-23T11:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task Test in Prog",
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
                            "plain_text": "Task Test in Prog",
                            "href": null
                        }
                    ]
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
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-23",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Task-Test-in-Prog-276eef29a653803ea02fdc29ec5d2578",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-8065-88e2-f8500efa6f19",
            "created_time": "2025-09-22T19:42:00.000Z",
            "last_edited_time": "2025-09-23T11:24:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task 2 Days",
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
                            "plain_text": "Task 2 Days",
                            "href": null
                        }
                    ]
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
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-25",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Task-2-Days-276eef29a653806588e2f8500efa6f19",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-8078-a8af-c5df56d21173",
            "created_time": "2025-09-22T19:42:00.000Z",
            "last_edited_time": "2025-09-23T11:24:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task 2 days",
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
                            "plain_text": "Task 2 days",
                            "href": null
                        }
                    ]
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
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        },
                        {
                            "object": "user",
                            "id": "152d872b-594c-8145-9c2c-000204787b69",
                            "name": "Chimara Tabitha",
                            "avatar_url": "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
                            "type": "person",
                            "person": {
                                "email": "crtabitha@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-25",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Task-2-days-276eef29a6538078a8afc5df56d21173",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-8084-88c1-fae613cc7774",
            "created_time": "2025-09-22T19:35:00.000Z",
            "last_edited_time": "2025-09-22T19:44:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task test Week 2",
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
                            "plain_text": "Task test Week 2",
                            "href": null
                        }
                    ]
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
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
                            }
                        }
                    ]
                },
                "Status": {
                    "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
                    "type": "status",
                    "status": {
                        "id": "not-started",
                        "name": "Not Started",
                        "color": "default"
                    }
                },
                "Due": {
                    "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
                    "type": "date",
                    "date": {
                        "start": "2025-09-30",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-80e7-82d5-ef29c4cba142"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Task-test-Week-2-276eef29a653808488c1fae613cc7774",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-8088-ac32-f2b9c221796c",
            "created_time": "2025-09-22T19:35:00.000Z",
            "last_edited_time": "2025-09-23T11:25:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task",
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
                            "plain_text": "Task",
                            "href": null
                        }
                    ]
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
                            "id": "1e0d872b-594c-81e5-be86-000260493812",
                            "name": "Harvey Spectre",
                            "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
                            "type": "person",
                            "person": {
                                "email": "harveyspectre@example-mail.com"
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
                        "start": "2025-09-22",
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
            "url": "https://www.notion.so/Task-276eef29a6538088ac32f2b9c221796c",
            "public_url": null
        },
        {
            "object": "page",
            "id": "276eef29-a653-80ad-bc8a-c7ae243c32a4",
            "created_time": "2025-09-22T19:36:00.000Z",
            "last_edited_time": "2025-09-22T19:38:00.000Z",
            "created_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
            },
            "last_edited_by": {
                "object": "user",
                "id": "1e0d872b-594c-81e5-be86-000260493812"
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
                    "people": []
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
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Task Test Done",
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
                            "plain_text": "Task Test Done",
                            "href": null
                        }
                    ]
                },
                "Tags": {
                    "id": "notion%3A%2F%2Ftasks%2Ftags_property",
                    "type": "multi_select",
                    "multi_select": []
                },
                "Assigned to": {
                    "id": "notion%3A%2F%2Ftasks%2Fassign_property",
                    "type": "people",
                    "people": []
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
                        "start": "2025-09-20",
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
                    "relation": [
                        {
                            "id": "262eef29-a653-8052-898d-f3cf22e11c74"
                        }
                    ],
                }
            },
            "url": "https://www.notion.so/Task-Test-Done-276eef29a65380adbc8ac7ae243c32a4",
            "public_url": null
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "page_or_data_source",
    "page_or_data_source": {},
}

export const exampleDbResult_1: QueryDataSourceResponse = {
  "object": "list",
  "results": [
    {
      "object": "page",
      "id": "2437b3ca-5344-81c2-a7b1-fbc160d657a0",
      "created_time": "2025-08-02T00:44:00.000Z",
      "last_edited_time": "2025-08-02T00:44:00.000Z",
      "created_by": {
        "object": "user",
        "id": "77db293e-684f-4cf7-9ea1-c915c02855a4"
      },
      "last_edited_by": {
        "object": "user",
        "id": "77db293e-684f-4cf7-9ea1-c915c02855a4"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "database_id",
        "database_id": "2387b3ca-5344-8085-9025-c97f0548887a"
      },
      "archived": false,
      "in_trash": false,
      "properties": {
        "Phone Number": {
          "id": "%3C%5EUP",
          "type": "phone_number",
          "phone_number": "123-456-7890"
        },
        "Description": {
          "id": "%40Ydr",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Feed the cats every day. Give them their pills and ensure they have enough clean water.",
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
              "plain_text": "Feed the cats every day. Give them their pills and ensure they have enough clean water.",
              "href": null
            }
          ]
        },
        "Preferred Channel": {
          "id": "%40~%3F%3A",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Slack",
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
              "plain_text": "Slack",
              "href": null
            }
          ]
        },
        "Email": {
          "id": "C%7BQM",
          "type": "email",
          "email": "josh@example.com"
        },
        "Start Date": {
          "id": "PAhZ",
          "type": "date",
          "date": {
            "start": "2023-08-01T00:00:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
        "Assignee": {
          "id": "jDlj",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Josh",
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
              "plain_text": "Josh",
              "href": null
            }
          ]
        },
        "Due Date": {
          "id": "r%3ErR",
          "type": "date",
          "date": {
            "start": "2023-08-07T00:00:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
        "Date Assigned": {
          "id": "vaoD",
          "type": "date",
          "date": null
        },
        "Task Title": {
          "id": "title",
          "type": "title",
          "title": [
            {
              "type": "text",
              "text": {
                "content": "Feed the cats daily",
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
              "plain_text": "Feed the cats daily",
              "href": null
            }
          ]
        }
      },
      "url": "https://www.notion.so/Feed-the-cats-daily-2437b3ca534481c2a7b1fbc160d657a0",
      "public_url": null
    }
  ],
  "next_cursor": null,
  "has_more": false,
  "type": "page_or_data_source",
  "page_or_data_source": {},
}

export const exampleDbResult_2: QueryDataSourceResponse = {
  "object": "list",
  "results": [
    {
      "object": "page",
      "id": "2487b3ca-5344-8039-813e-e3910160fe1b",
      "created_time": "2025-08-07T00:00:00.000Z",
      "last_edited_time": "2025-08-07T00:01:00.000Z",
      "created_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "database_id",
        "database_id": "2387b3ca-5344-8085-9025-c97f0548887a"
      },
      "archived": false,
      "in_trash": false,
      "properties": {
        "Phone Number": {
          "id": "%3C%5EUP",
          "type": "phone_number",
          "phone_number": null
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
        "Preferred Channel": {
          "id": "%40~%3F%3A",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Slack",
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
              "plain_text": "Slack",
              "href": null
            }
          ]
        },
        "Email": {
          "id": "C%7BQM",
          "type": "email",
          "email": null
        },
        "Start Date": {
          "id": "PAhZ",
          "type": "date",
          "date": {
            "start": "2025-08-06",
            "end": null,
            "time_zone": null
          }
        },
        "Assignee": {
          "id": "jDlj",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Greg",
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
              "plain_text": "Greg",
              "href": null
            }
          ]
        },
        "Due Date": {
          "id": "r%3ErR",
          "type": "date",
          "date": {
            "start": "2025-08-07",
            "end": null,
            "time_zone": null
          }
        },
        "Date Assigned": {
          "id": "vaoD",
          "type": "date",
          "date": {
            "start": "2025-08-06",
            "end": null,
            "time_zone": null
          }
        },
        "Task Title": {
          "id": "title",
          "type": "title",
          "title": [
            {
              "type": "text",
              "text": {
                "content": "Pick up trash",
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
              "plain_text": "Pick up trash",
              "href": null
            }
          ]
        }
      },
      "url": "https://www.notion.so/Pick-up-trash-2487b3ca53448039813ee3910160fe1b",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2467b3ca-5344-81e1-b7e9-e2b46357d3c4",
      "created_time": "2025-08-05T20:11:00.000Z",
      "last_edited_time": "2025-08-05T20:11:00.000Z",
      "created_by": {
        "object": "user",
        "id": "77db293e-684f-4cf7-9ea1-c915c02855a4"
      },
      "last_edited_by": {
        "object": "user",
        "id": "77db293e-684f-4cf7-9ea1-c915c02855a4"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "database_id",
        "database_id": "2387b3ca-5344-8085-9025-c97f0548887a"
      },
      "archived": false,
      "in_trash": false,
      "properties": {
        "Phone Number": {
          "id": "%3C%5EUP",
          "type": "phone_number",
          "phone_number": "000***000***"
        },
        "Description": {
          "id": "%40Ydr",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Paint the fence and have it completed by August 7",
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
              "plain_text": "Paint the fence and have it completed by August 7",
              "href": null
            }
          ]
        },
        "Preferred Channel": {
          "id": "%40~%3F%3A",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Slack",
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
              "plain_text": "Slack",
              "href": null
            }
          ]
        },
        "Email": {
          "id": "C%7BQM",
          "type": "email",
          "email": "example@email.com"
        },
        "Start Date": {
          "id": "PAhZ",
          "type": "date",
          "date": {
            "start": "2025-08-05T20:11:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
        "Assignee": {
          "id": "jDlj",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Greg",
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
              "plain_text": "Greg",
              "href": null
            }
          ]
        },
        "Due Date": {
          "id": "r%3ErR",
          "type": "date",
          "date": {
            "start": "2023-08-07T00:00:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
        "Date Assigned": {
          "id": "vaoD",
          "type": "date",
          "date": {
            "start": "2025-08-05T20:11:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
        "Task Title": {
          "id": "title",
          "type": "title",
          "title": [
            {
              "type": "text",
              "text": {
                "content": "Paint the fence",
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
              "plain_text": "Paint the fence",
              "href": null
            }
          ]
        }
      },
      "url": "https://www.notion.so/Paint-the-fence-2467b3ca534481e1b7e9e2b46357d3c4",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2467b3ca-5344-8129-b3af-d5354d1a1da7",
      "created_time": "2025-08-05T15:13:00.000Z",
      "last_edited_time": "2025-08-05T15:13:00.000Z",
      "created_by": {
        "object": "user",
        "id": "77db293e-684f-4cf7-9ea1-c915c02855a4"
      },
      "last_edited_by": {
        "object": "user",
        "id": "77db293e-684f-4cf7-9ea1-c915c02855a4"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "database_id",
        "database_id": "2387b3ca-5344-8085-9025-c97f0548887a"
      },
      "archived": false,
      "in_trash": false,
      "properties": {
        "Phone Number": {
          "id": "%3C%5EUP",
          "type": "phone_number",
          "phone_number": "000***000***"
        },
        "Description": {
          "id": "%40Ydr",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Print some t-shirts for Hillary and Mary's anniversary",
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
              "plain_text": "Print some t-shirts for Hillary and Mary's anniversary",
              "href": null
            }
          ]
        },
        "Preferred Channel": {
          "id": "%40~%3F%3A",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Slack",
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
              "plain_text": "Slack",
              "href": null
            }
          ]
        },
        "Email": {
          "id": "C%7BQM",
          "type": "email",
          "email": "example@email.com"
        },
        "Start Date": {
          "id": "PAhZ",
          "type": "date",
          "date": {
            "start": "2024-07-21T00:00:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
        "Assignee": {
          "id": "jDlj",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Greg",
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
              "plain_text": "Greg",
              "href": null
            }
          ]
        },
        "Due Date": {
          "id": "r%3ErR",
          "type": "date",
          "date": {
            "start": "2024-07-21T00:00:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
        "Date Assigned": {
          "id": "vaoD",
          "type": "date",
          "date": null
        },
        "Task Title": {
          "id": "title",
          "type": "title",
          "title": [
            {
              "type": "text",
              "text": {
                "content": "Print T-shirts for Anniversary",
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
              "plain_text": "Print T-shirts for Anniversary",
              "href": null
            }
          ]
        }
      },
      "url": "https://www.notion.so/Print-T-shirts-for-Anniversary-2467b3ca53448129b3afd5354d1a1da7",
      "public_url": null
    }
  ],
  "next_cursor": null,
  "has_more": false,
  "type": "page_or_data_source",
  "page_or_data_source": {},
}

export const exampleDbResultExistingTask: PageObjectResponse = {
  "object": "page",
  "id": "2407b3ca-5344-8173-b5ff-f0bf8b869b82",
  "created_time": "2025-07-30T07:45:00.000Z",
  "last_edited_time": "2025-10-08T16:58:00.000Z",
  "created_by": {
    "object": "user",
    "id": "77db293e-684f-4cf7-9ea1-c915c02855a4"
  },
  "last_edited_by": {
    "object": "user",
    "id": "152d872b-594c-8145-9c2c-000204787b69"
  },
  "cover": null,
  "icon": null,
  "parent": {
    "type": "database_id",
    "database_id": "2387b3ca-5344-8085-9025-c97f0548887a"
  },
  "archived": false,
  "in_trash": false,
  "properties": {
    "Assigned By": {
      "id": "%3Bpph",
      "type": "rich_text",
      "rich_text": []
    },
    "Phone Number": {
      "id": "%3C%5EUP",
      "type": "phone_number",
      "phone_number": "123-456-7890"
    },
    "Description": {
      "id": "%40Ydr",
      "type": "rich_text",
      "rich_text": [{
        "type": "text",
        "text": {
          "content": "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
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
        "plain_text": "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
        "href": null
      }]
    },
    "Preferred Channel": {
      "id": "%40~%3F%3A",
      "type": "rich_text",
      "rich_text": [{
        "type": "text",
        "text": {
          "content": "Slack",
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
        "plain_text": "Slack",
        "href": null
      }]
    },
    "Email": {
      "id": "C%7BQM",
      "type": "email",
      "email": "example@email.com"
    },
    "Project": {
      "id": "JO%3Bo",
      "type": "rich_text",
      "rich_text": []
    },
    "Start Date": {
      "id": "PAhZ",
      "type": "date",
      "date": {
        "start": "2026-01-11",
        "end": null,
        "time_zone": null
      }
    },
    "Assignee": {
      "id": "jDlj",
      "type": "rich_text",
      "rich_text": [{
        "type": "text",
        "text": {
          "content": "Jacob",
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
        "plain_text": "Jacob",
        "href": null
      }]
    },
    "Due Date": {
      "id": "r%3ErR",
      "type": "date",
      "date": {
        "start": "2025-10-15",
        "end": null,
        "time_zone": null
      }
    },
    "Date Assigned": {
      "id": "vaoD",
      "type": "date",
      "date": null
    },
    "Task Title": {
      "id": "title",
      "type": "title",
      "title": [{
        "type": "text",
        "text": {
          "content": "Schedule meeting with customer",
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
        "plain_text": "Schedule meeting with customer",
        "href": null
      }]
    }
  },
  "url": "https://www.notion.so/Schedule-meeting-with-customer-2407b3ca53448173b5fff0bf8b869b82",
  "public_url": null,
  is_locked: false
}
