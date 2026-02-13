import { QueryDataSourceResponse } from "@notionhq/client";

export const RAW_DB_PAGES: QueryDataSourceResponse = {
  "object": "list",
  "results": [
    {
      "object": "page",
      "id": "2bdeef29-a653-8000-8185-ff7539e44792",
      "created_time": "2025-12-02T18:55:00.000Z",
      "last_edited_time": "2025-12-02T18:59:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
        "Assigned by": {
          "id": "KdiL",
          "type": "people",
          "people": [
            {
              "object": "user",
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
                "content": "ARCHIVED Task overdue by 3 days (assigned by Harvey, assigned to Chimara)",
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
              "plain_text": "ARCHIVED Task overdue by 3 days (assigned by Harvey, assigned to Chimara)",
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
                "email": "chimara.tabitha@example-domain.com"
              }
            }
          ]
        },
        "Status": {
          "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
          "type": "status",
          "status": {
            "id": "archived",
            "name": "Archived",
            "color": "gray"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": {
            "start": "2025-11-28",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task, archived and overdue by three days, was assigned by Harvey Spectre to Chimara Tabitha with a due date of November 28, 2025.\n\nKeywords: task, archived, overdue, assignment, Harvey Spectre, Chimara Tabitha, due date, November 28, 2025, project management, reminders.",
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
              "plain_text": "This task, archived and overdue by three days, was assigned by Harvey Spectre to Chimara Tabitha with a due date of November 28, 2025.\n\nKeywords: task, archived, overdue, assignment, Harvey Spectre, Chimara Tabitha, due date, November 28, 2025, project management, reminders.",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8020-9dd0-e20ff33c265c"
            }
          ],
        }
      },
      "url": "https://www.notion.so/ARCHIVED-Task-overdue-by-3-days-assigned-by-Harvey-assigned-to-Chimara-2bdeef29a65380008185ff7539e44792",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-8018-8eeb-fe1bd65f1b8e",
      "created_time": "2025-12-02T17:32:00.000Z",
      "last_edited_time": "2025-12-02T18:58:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Task overdue by 3 days (assigned by Chimara, assigned to Harvey)",
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
              "plain_text": "Task overdue by 3 days (assigned by Chimara, assigned to Harvey)",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
            "start": "2025-11-28",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task, assigned by Chimara Tabitha to Harvey Spectre, is overdue by 3 days with a due date of November 28, 2025. Its current status is marked as \"Not Started.\"\n\nKeywords: task, overdue, Chimara Tabitha, Harvey Spectre, November 2025, assignment, status, deadline, project management, reminders.",
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
              "plain_text": "This task, assigned by Chimara Tabitha to Harvey Spectre, is overdue by 3 days with a due date of November 28, 2025. Its current status is marked as \"Not Started.\"\n\nKeywords: task, overdue, Chimara Tabitha, Harvey Spectre, November 2025, assignment, status, deadline, project management, reminders.",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8093-97fb-f411a20b58ed"
            }
          ],
        }
      },
      "url": "https://www.notion.so/Task-overdue-by-3-days-assigned-by-Chimara-assigned-to-Harvey-2bdeef29a65380188eebfe1bd65f1b8e",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-802a-9674-f896fdb82564",
      "created_time": "2025-12-02T17:29:00.000Z",
      "last_edited_time": "2025-12-02T18:57:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Task due today (assigned by Chimara, assigned to Harvey)",
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
              "plain_text": "Task due today (assigned by Chimara, assigned to Harvey)",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
            "start": "2025-12-01",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task, assigned by Chimara Tabitha to Harvey Spectre, is due on December 1, 2025 and is currently not started.\n\n",
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
              "plain_text": "This task, assigned by Chimara Tabitha to Harvey Spectre, is due on December 1, 2025 and is currently not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " Task, Due Date, Assigned By, Assigned To, Not Started, December 1, 2025, Reminder, Project Management, Team Collaboration, Task Tracking.",
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
              "plain_text": " Task, Due Date, Assigned By, Assigned To, Not Started, December 1, 2025, Reminder, Project Management, Team Collaboration, Task Tracking.",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8093-97fb-f411a20b58ed"
            }
          ],
        }
      },
      "url": "https://www.notion.so/Task-due-today-assigned-by-Chimara-assigned-to-Harvey-2bdeef29a653802a9674f896fdb82564",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-8030-9864-cc4dedfdc63c",
      "created_time": "2025-12-02T18:03:00.000Z",
      "last_edited_time": "2025-12-02T18:58:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
        "Assigned by": {
          "id": "KdiL",
          "type": "people",
          "people": [
            {
              "object": "user",
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
                "content": "Task due in 3 days (assigned by Harvey, assigned to Chimara)",
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
              "plain_text": "Task due in 3 days (assigned by Harvey, assigned to Chimara)",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2025-12-03",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task, assigned by Harvey Spectre to Chimara Tabitha, is due on December 3, 2025, and is currently not started.\n\n",
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
              "plain_text": "This task, assigned by Harvey Spectre to Chimara Tabitha, is due on December 3, 2025, and is currently not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " task, deadline, assignment, Chimara Tabitha, Harvey Spectre, due date, project management, not started, reminders, organization.",
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
              "plain_text": " task, deadline, assignment, Chimara Tabitha, Harvey Spectre, due date, project management, not started, reminders, organization.",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8020-9dd0-e20ff33c265c"
            }
          ],
        }
      },
      "url": "https://www.notion.so/Task-due-in-3-days-assigned-by-Harvey-assigned-to-Chimara-2bdeef29a65380309864cc4dedfdc63c",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-8045-9d6c-f8edb6e6b8a4",
      "created_time": "2025-12-02T18:55:00.000Z",
      "last_edited_time": "2025-12-02T18:59:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
        "Assigned by": {
          "id": "KdiL",
          "type": "people",
          "people": [
            {
              "object": "user",
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
                "content": "COMPLETED Task overdue by one day (assigned by Harvey, assigned to Chimara)",
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
              "plain_text": "COMPLETED Task overdue by one day (assigned by Harvey, assigned to Chimara)",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2025-11-30",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "The task assigned by Harvey Spectre to Chimara Tabitha has been completed, though it was overdue by one day, with a due date of November 30, 2025.\n\nKeywords: task completion, overdue, deadline, Harvey Spectre, Chimara Tabitha, project management, assignments, productivity, time management, work status.",
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
              "plain_text": "The task assigned by Harvey Spectre to Chimara Tabitha has been completed, though it was overdue by one day, with a due date of November 30, 2025.\n\nKeywords: task completion, overdue, deadline, Harvey Spectre, Chimara Tabitha, project management, assignments, productivity, time management, work status.",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8020-9dd0-e20ff33c265c"
            }
          ],
        }
      },
      "url": "https://www.notion.so/COMPLETED-Task-overdue-by-one-day-assigned-by-Harvey-assigned-to-Chimara-2bdeef29a65380459d6cf8edb6e6b8a4",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-8058-b0e9-d398da259483",
      "created_time": "2025-12-02T18:54:00.000Z",
      "last_edited_time": "2025-12-02T18:58:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "ARCHIVED Task due today (assigned by Chimara, assigned to Harvey)",
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
              "plain_text": "ARCHIVED Task due today (assigned by Chimara, assigned to Harvey)",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
              }
            }
          ]
        },
        "Status": {
          "id": "notion%3A%2F%2Ftasks%2Fstatus_property",
          "type": "status",
          "status": {
            "id": "archived",
            "name": "Archived",
            "color": "gray"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": {
            "start": "2025-12-01",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This archived task, assigned by Chimara Tabitha to Harvey Spectre, is due today, December 1, 2025.\n\n",
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
              "plain_text": "This archived task, assigned by Chimara Tabitha to Harvey Spectre, is due today, December 1, 2025.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " Archived, Task, Chimara Tabitha, Harvey Spectre, Due Date, December 1, 2025, Assignment, Project Management, Reminders, Workflow",
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
              "plain_text": " Archived, Task, Chimara Tabitha, Harvey Spectre, Due Date, December 1, 2025, Assignment, Project Management, Reminders, Workflow",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8093-97fb-f411a20b58ed"
            }
          ],
        }
      },
      "url": "https://www.notion.so/ARCHIVED-Task-due-today-assigned-by-Chimara-assigned-to-Harvey-2bdeef29a6538058b0e9d398da259483",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-8076-9ba3-da4bcb4f1962",
      "created_time": "2025-12-02T18:52:00.000Z",
      "last_edited_time": "2025-12-02T18:59:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
        "Assigned by": {
          "id": "KdiL",
          "type": "people",
          "people": [
            {
              "object": "user",
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
                "content": "Task overdue by 3 days (assigned by Harvey, assigned to Chimara)",
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
              "plain_text": "Task overdue by 3 days (assigned by Harvey, assigned to Chimara)",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2025-11-28",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task, assigned by Harvey Spectre to Chimara Tabitha, is currently overdue by 3 days, with a due date of November 28, 2025. Immediate attention is required to address the pending work.\n\n",
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
              "plain_text": "This task, assigned by Harvey Spectre to Chimara Tabitha, is currently overdue by 3 days, with a due date of November 28, 2025. Immediate attention is required to address the pending work.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " task, overdue, assignment, Chimara Tabitha, Harvey Spectre, deadline, November 2025, status, not started, reminders.",
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
              "plain_text": " task, overdue, assignment, Chimara Tabitha, Harvey Spectre, deadline, November 2025, status, not started, reminders.",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8020-9dd0-e20ff33c265c"
            }
          ],
        }
      },
      "url": "https://www.notion.so/Task-overdue-by-3-days-assigned-by-Harvey-assigned-to-Chimara-2bdeef29a65380769ba3da4bcb4f1962",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-8093-8b64-ee8964517d14",
      "created_time": "2025-12-02T18:54:00.000Z",
      "last_edited_time": "2025-12-02T18:57:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "COMPLETED Task due in 3 days (assigned by Chimara, assigned to Harvey)",
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
              "plain_text": "COMPLETED Task due in 3 days (assigned by Chimara, assigned to Harvey)",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
            "start": "2025-12-03",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "The task assigned by Chimara Tabitha to Harvey Spectre has been completed and was due on December 3, 2025. This successful completion reflects effective task management and collaboration.\n\nTop 10 keywords: completed task, Chimara Tabitha, Harvey Spectre, due date, December 3, 2025, task management, collaboration, assignment, productivity, status done.",
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
              "plain_text": "The task assigned by Chimara Tabitha to Harvey Spectre has been completed and was due on December 3, 2025. This successful completion reflects effective task management and collaboration.\n\nTop 10 keywords: completed task, Chimara Tabitha, Harvey Spectre, due date, December 3, 2025, task management, collaboration, assignment, productivity, status done.",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8093-97fb-f411a20b58ed"
            }
          ],
        }
      },
      "url": "https://www.notion.so/COMPLETED-Task-due-in-3-days-assigned-by-Chimara-assigned-to-Harvey-2bdeef29a65380938b64ee8964517d14",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-80b1-aa16-d65bb1300a56",
      "created_time": "2025-12-02T18:52:00.000Z",
      "last_edited_time": "2025-12-02T18:58:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
        "Assigned by": {
          "id": "KdiL",
          "type": "people",
          "people": [
            {
              "object": "user",
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
                "content": "Task due today (assigned by Harvey, assigned to Chimara)",
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
              "plain_text": "Task due today (assigned by Harvey, assigned to Chimara)",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2025-12-01",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task, assigned by Harvey Spectre to Chimara Tabitha, is due today, December 1, 2025, and has not yet been started.\n\n",
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
              "plain_text": "This task, assigned by Harvey Spectre to Chimara Tabitha, is due today, December 1, 2025, and has not yet been started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " task, due today, assigned by, assigned to, status, not started, deadline, project management, reminder, Chimara Tabitha",
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
              "plain_text": " task, due today, assigned by, assigned to, status, not started, deadline, project management, reminder, Chimara Tabitha",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8020-9dd0-e20ff33c265c"
            }
          ],
        }
      },
      "url": "https://www.notion.so/Task-due-today-assigned-by-Harvey-assigned-to-Chimara-2bdeef29a65380b1aa16d65bb1300a56",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-80cc-85d1-c628f124677b",
      "created_time": "2025-12-02T17:28:00.000Z",
      "last_edited_time": "2025-12-02T18:57:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Task due in 3 days (assigned by Chimara, assigned to Harvey)",
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
              "plain_text": "Task due in 3 days (assigned by Chimara, assigned to Harvey)",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
            "start": "2025-12-03",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines a task assigned by Chimara Tabitha to Harvey Spectre, which is due on December 3, 2025, and is currently not started.\n\n",
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
              "plain_text": "This document outlines a task assigned by Chimara Tabitha to Harvey Spectre, which is due on December 3, 2025, and is currently not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " task, due date, Chimara Tabitha, Harvey Spectre, assignment, project management, reminders, deadline, not started, organization.",
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
              "plain_text": " task, due date, Chimara Tabitha, Harvey Spectre, assignment, project management, reminders, deadline, not started, organization.",
              "href": null
            }
          ]
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
              "id": "2bdeef29-a653-8093-97fb-f411a20b58ed"
            }
          ],
        }
      },
      "url": "https://www.notion.so/Task-due-in-3-days-assigned-by-Chimara-assigned-to-Harvey-2bdeef29a65380cc85d1c628f124677b",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-80dc-9229-de3478220589",
      "created_time": "2025-12-02T18:52:00.000Z",
      "last_edited_time": "2025-12-02T18:59:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
        "Assigned by": {
          "id": "KdiL",
          "type": "people",
          "people": [
            {
              "object": "user",
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
                "content": "Task overdue by one day (assigned by Harvey, assigned to Chimara)",
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
              "plain_text": "Task overdue by one day (assigned by Harvey, assigned to Chimara)",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2025-11-30",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task, assigned by Harvey Spectre and designated for Chimara Tabitha, is overdue by one day with a due date of November 30, 2025. The status remains \"Not Started.\"\n\n",
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
              "plain_text": "This task, assigned by Harvey Spectre and designated for Chimara Tabitha, is overdue by one day with a due date of November 30, 2025. The status remains \"Not Started.\"\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " task, overdue, assignment, Chimara Tabitha, Harvey Spectre, due date, November 30, 2025, not started, project management, reminders.",
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
              "plain_text": " task, overdue, assignment, Chimara Tabitha, Harvey Spectre, due date, November 30, 2025, not started, project management, reminders.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Task-overdue-by-one-day-assigned-by-Harvey-assigned-to-Chimara-2bdeef29a65380dc9229de3478220589",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2bdeef29-a653-80fe-b7b5-ca86d9409c03",
      "created_time": "2025-12-02T17:29:00.000Z",
      "last_edited_time": "2025-12-03T14:12:00.000Z",
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
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": null
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Task overdue by one day (assigned by Chimara, assigned to Harvey)",
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
              "plain_text": "Task overdue by one day (assigned by Chimara, assigned to Harvey)",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
            "start": "2025-11-30",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task, assigned by Chimara Tabitha to Harvey Spectre, is overdue by one day with a due date of November 30, 2025, and has not yet been started.\n\n",
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
              "plain_text": "This task, assigned by Chimara Tabitha to Harvey Spectre, is overdue by one day with a due date of November 30, 2025, and has not yet been started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " task, overdue, Chimara Tabitha, Harvey Spectre, not started, due date, assignment, project management, reminders, deadline.",
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
              "plain_text": " task, overdue, Chimara Tabitha, Harvey Spectre, not started, due date, assignment, project management, reminders, deadline.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Task-overdue-by-one-day-assigned-by-Chimara-assigned-to-Harvey-2bdeef29a65380feb7b5ca86d9409c03",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d2eef29-a653-81b5-bcf7-c629b1d76b72",
      "created_time": "2025-12-23T19:40:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-23T19:40:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Fix the routes",
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
              "plain_text": "Fix the routes",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2025-12-24T01:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves fixing the routes and is assigned to Chimara Tabitha, with a due date of December 24, 2025, at 1:00 AM (UTC). The task is currently not started.\n\n",
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
              "plain_text": "This task involves fixing the routes and is assigned to Chimara Tabitha, with a due date of December 24, 2025, at 1:00 AM (UTC). The task is currently not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " fix routes, Chimara Tabitha, task management, project deadline, route optimization, transportation, logistics, assignment, not started, due date.",
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
              "plain_text": " fix routes, Chimara Tabitha, task management, project deadline, route optimization, transportation, logistics, assignment, not started, due date.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Fix-the-routes-2d2eef29a65381b5bcf7c629b1d76b72",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d3eef29-a653-8144-a0cc-c5dc33486536",
      "created_time": "2025-12-24T11:54:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-24T11:54:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Research on random gene mutations",
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
              "plain_text": "Research on random gene mutations",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2025-12-24T14:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines a research task focused on random gene mutations, assigned to Chimara Tabitha, with a start and due date set for December 24, 2025. The task is currently not started.\n\n",
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
              "plain_text": "This document outlines a research task focused on random gene mutations, assigned to Chimara Tabitha, with a start and due date set for December 24, 2025. The task is currently not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " gene mutations, random mutations, genetics research, DNA changes, mutation effects, genetic variability, evolutionary biology, molecular genetics, mutation mechanisms, heredity.",
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
              "plain_text": " gene mutations, random mutations, genetics research, DNA changes, mutation effects, genetic variability, evolutionary biology, molecular genetics, mutation mechanisms, heredity.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Research-on-random-gene-mutations-2d3eef29a6538144a0ccc5dc33486536",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d3eef29-a653-819e-97d6-e98e5d6dc2b0",
      "created_time": "2025-12-24T17:48:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-24T17:47:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Come up with a rough estimate of the project's timeline",
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
              "plain_text": "Come up with a rough estimate of the project's timeline",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
            "start": "2025-12-26T14:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "The project is set to start on December 24, 2025, and is due by December 26, 2025, indicating a very tight timeline. A rough estimate suggests a two-day duration for the project's execution.\n\nKeywords: project timeline, rough estimate, start date, due date, project management, scheduling, deadlines, execution plan, time allocation, task assignment.",
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
              "plain_text": "The project is set to start on December 24, 2025, and is due by December 26, 2025, indicating a very tight timeline. A rough estimate suggests a two-day duration for the project's execution.\n\nKeywords: project timeline, rough estimate, start date, due date, project management, scheduling, deadlines, execution plan, time allocation, task assignment.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Come-up-with-a-rough-estimate-of-the-project-s-timeline-2d3eef29a653819e97d6e98e5d6dc2b0",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d3eef29-a653-81a4-87c6-fedce576bc32",
      "created_time": "2025-12-24T14:32:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-24T14:31:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Contact Quickmart manager to discuss employee coupons",
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
              "plain_text": "Contact Quickmart manager to discuss employee coupons",
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
            "id": "not-started",
            "name": "Not Started",
            "color": "default"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": {
            "start": "2025-12-25T21:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves contacting the Quickmart manager to discuss the implementation of employee coupons for the upcoming Friday. The deadline for this discussion is set for December 25, 2025, at 9:00 PM (UTC).\n\n",
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
              "plain_text": "This task involves contacting the Quickmart manager to discuss the implementation of employee coupons for the upcoming Friday. The deadline for this discussion is set for December 25, 2025, at 9:00 PM (UTC).\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " Quickmart, manager, employee coupons, discussion, contact, December 25, 2025, deadline, task, implementation, reminders.",
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
              "plain_text": " Quickmart, manager, employee coupons, discussion, contact, December 25, 2025, deadline, task, implementation, reminders.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Contact-Quickmart-manager-to-discuss-employee-coupons-2d3eef29a65381a487c6fedce576bc32",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d3eef29-a653-81c8-9692-f3b325fb8710",
      "created_time": "2025-12-24T12:02:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-24T12:02:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Research on random gene mutations",
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
              "plain_text": "Research on random gene mutations",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2026-01-06T21:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This research focuses on random gene mutations, exploring their origins, implications, and the biological significance of these changes. The study aims to provide a comprehensive report on the findings related to these mutations.\n\n",
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
              "plain_text": "This research focuses on random gene mutations, exploring their origins, implications, and the biological significance of these changes. The study aims to provide a comprehensive report on the findings related to these mutations.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " gene mutations, random mutations, genetic research, biological significance, DNA changes, mutation origins, genetic variability, evolutionary biology, mutation impacts, genetic studies.",
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
              "plain_text": " gene mutations, random mutations, genetic research, biological significance, DNA changes, mutation origins, genetic variability, evolutionary biology, mutation impacts, genetic studies.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Research-on-random-gene-mutations-2d3eef29a65381c89692f3b325fb8710",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d3eef29-a653-81dd-80b1-f1d452b4ef81",
      "created_time": "2025-12-24T10:12:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-24T10:12:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Call CEO of Zoox for important next year strategy",
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
              "plain_text": "Call CEO of Zoox for important next year strategy",
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
            "id": "not-started",
            "name": "Not Started",
            "color": "default"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": {
            "start": "2025-12-24T14:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines a scheduled call with the CEO of Zoox to discuss key strategies for the upcoming year. The call is set to take place on December 24, 2025, from 10:12 AM to 2:00 PM (UTC).\n\n",
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
              "plain_text": "This document outlines a scheduled call with the CEO of Zoox to discuss key strategies for the upcoming year. The call is set to take place on December 24, 2025, from 10:12 AM to 2:00 PM (UTC).\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " Zoox, CEO, strategy, call, next year, important, discussion, scheduling, December 2025, business planning.",
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
              "plain_text": " Zoox, CEO, strategy, call, next year, important, discussion, scheduling, December 2025, business planning.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Call-CEO-of-Zoox-for-important-next-year-strategy-2d3eef29a65381dd80b1f1d452b4ef81",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d8eef29-a653-8143-81f8-d5ae3a046036",
      "created_time": "2025-12-29T18:25:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-29T18:20:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Rake the lawn",
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
              "plain_text": "Rake the lawn",
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
            "id": "not-started",
            "name": "Not Started",
            "color": "default"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": {
            "start": "2025-12-30T08:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves raking the lawn, scheduled to start on December 29, 2025, and due by December 30, 2025. It is currently marked as not started.\n\n",
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
              "plain_text": "This task involves raking the lawn, scheduled to start on December 29, 2025, and due by December 30, 2025. It is currently marked as not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " lawn care, raking, garden maintenance, landscaping, outdoor chores, lawn cleanup, autumn tasks, yard work, gardening, seasonal maintenance.",
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
              "plain_text": " lawn care, raking, garden maintenance, landscaping, outdoor chores, lawn cleanup, autumn tasks, yard work, gardening, seasonal maintenance.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Rake-the-lawn-2d8eef29a653814381f8d5ae3a046036",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d8eef29-a653-815d-aafe-eb9dfe38a88d",
      "created_time": "2025-12-29T18:36:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-29T18:36:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Feed dogs, pigs, and cats",
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
              "plain_text": "Feed dogs, pigs, and cats",
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
                "email": "chimara.tabitha@example-domain.com"
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
            "start": "2025-12-30T01:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves feeding dogs, pigs, and cats, assigned to Chimara Tabitha, with a due date of December 30, 2025. The task is currently not started.\n\n",
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
              "plain_text": "This task involves feeding dogs, pigs, and cats, assigned to Chimara Tabitha, with a due date of December 30, 2025. The task is currently not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " feed, dogs, pigs, cats, animal care, pet feeding, livestock, responsibilities, schedule, Chimara Tabitha",
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
              "plain_text": " feed, dogs, pigs, cats, animal care, pet feeding, livestock, responsibilities, schedule, Chimara Tabitha",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Feed-dogs-pigs-and-cats-2d8eef29a653815daafeeb9dfe38a88d",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d8eef29-a653-81ad-98be-c81d87a57b95",
      "created_time": "2025-12-29T17:33:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-29T17:29:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Change the lightbulb",
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
              "plain_text": "Change the lightbulb",
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
            "id": "not-started",
            "name": "Not Started",
            "color": "default"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": {
            "start": "2025-12-30T01:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "The task is to change the lightbulb, which is scheduled to start on December 29, 2025, and is due by December 30, 2025. This task has not yet been started.\n\n",
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
              "plain_text": "The task is to change the lightbulb, which is scheduled to start on December 29, 2025, and is due by December 30, 2025. This task has not yet been started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " change, lightbulb, maintenance, task, schedule, due date, reminder, home improvement, lighting, household.",
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
              "plain_text": " change, lightbulb, maintenance, task, schedule, due date, reminder, home improvement, lighting, household.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Change-the-lightbulb-2d8eef29a65381ad98bec81d87a57b95",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d8eef29-a653-81c8-b669-c41dddaf1756",
      "created_time": "2025-12-29T16:37:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-29T16:36:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Row your boat gently down the stream",
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
              "plain_text": "Row your boat gently down the stream",
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
            "id": "not-started",
            "name": "Not Started",
            "color": "default"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": {
            "start": "2025-12-30T01:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines a task titled \"Row your boat gently down the stream,\" which is scheduled to start on December 29, 2025, and is due by December 30, 2025. The status of the task is currently marked as \"Not Started.\"\n\nTop 10 Keywords: boat, stream, rowing, gently, task, schedule, due date, December 2025, not started, water.",
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
              "plain_text": "This document outlines a task titled \"Row your boat gently down the stream,\" which is scheduled to start on December 29, 2025, and is due by December 30, 2025. The status of the task is currently marked as \"Not Started.\"\n\nTop 10 Keywords: boat, stream, rowing, gently, task, schedule, due date, December 2025, not started, water.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Row-your-boat-gently-down-the-stream-2d8eef29a65381c8b669c41dddaf1756",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2d9eef29-a653-81b3-aedb-f37251d2c72e",
      "created_time": "2025-12-30T19:20:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2025-12-30T19:20:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Rake the leaves",
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
              "plain_text": "Rake the leaves",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves raking the leaves, assigned to Harvey Spectre, and is scheduled to start on December 30, 2025. The status of the task is currently \"Not Started.\"\n\n",
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
              "plain_text": "This task involves raking the leaves, assigned to Harvey Spectre, and is scheduled to start on December 30, 2025. The status of the task is currently \"Not Started.\"\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " raking leaves, gardening, yard work, Harvey Spectre, outdoor tasks, seasonal chores, leaf cleanup, landscaping, home maintenance, task management.",
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
              "plain_text": " raking leaves, gardening, yard work, Harvey Spectre, outdoor tasks, seasonal chores, leaf cleanup, landscaping, home maintenance, task management.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Rake-the-leaves-2d9eef29a65381b3aedbf37251d2c72e",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e0eef29-a653-8100-88c6-e44041628712",
      "created_time": "2026-01-06T17:32:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-06T17:28:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Get Old Bay spice",
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
              "plain_text": "Get Old Bay spice",
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
            "id": "not-started",
            "name": "Not Started",
            "color": "default"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": {
            "start": "2026-01-07T21:00:00.000+00:00",
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves obtaining Old Bay spice, with a start date of January 6, 2026, and a due date of January 7, 2026. The status of the task is currently \"Not Started.\"\n\n",
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
              "plain_text": "This task involves obtaining Old Bay spice, with a start date of January 6, 2026, and a due date of January 7, 2026. The status of the task is currently \"Not Started.\"\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " Old Bay, spice, seasoning, cooking, seafood, flavoring, culinary, herbs, recipe, pantry essentials.",
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
              "plain_text": " Old Bay, spice, seasoning, cooking, seafood, flavoring, culinary, herbs, recipe, pantry essentials.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Get-Old-Bay-spice-2e0eef29a653810088c6e44041628712",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e0eef29-a653-817d-9689-f8d338025ab4",
      "created_time": "2026-01-06T17:37:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-06T17:37:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Feed the cat",
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
              "plain_text": "Feed the cat",
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
            "id": "not-started",
            "name": "Not Started",
            "color": "default"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines the task to feed the cat as part of the \"Internal: Project Agent.\" The project is scheduled to start on January 6, 2026, at 5:37 PM (UTC) and is currently marked as not started.\n\n",
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
              "plain_text": "This document outlines the task to feed the cat as part of the \"Internal: Project Agent.\" The project is scheduled to start on January 6, 2026, at 5:37 PM (UTC) and is currently marked as not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "\n1. Feed the cat\n2. Project Agent\n3. Internal project\n4. Task management\n5. Pet care\n6. Reminder\n7. Scheduling\n8. Cat feeding\n9. Project planning\n10. Not started",
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
              "plain_text": "\n1. Feed the cat\n2. Project Agent\n3. Internal project\n4. Task management\n5. Pet care\n6. Reminder\n7. Scheduling\n8. Cat feeding\n9. Project planning\n10. Not started",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Feed-the-cat-2e0eef29a653817d9689f8d338025ab4",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e0eef29-a653-819a-8e48-fe17818eae99",
      "created_time": "2026-01-06T01:19:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-06T01:19:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Update the Done message",
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
              "plain_text": "Update the Done message",
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
                "email": "chimara.tabitha@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines a task to update the \"Done\" message, assigned to Chimara Tabitha with a start date of January 6, 2026. The current status of the task is \"Not Started.\"\n\n",
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
              "plain_text": "This document outlines a task to update the \"Done\" message, assigned to Chimara Tabitha with a start date of January 6, 2026. The current status of the task is \"Not Started.\"\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " Update, Done message, Chimara Tabitha, task, status, not started, project management, communication, deadline, assignment.",
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
              "plain_text": " Update, Done message, Chimara Tabitha, task, status, not started, project management, communication, deadline, assignment.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Update-the-Done-message-2e0eef29a653819a8e48fe17818eae99",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e0eef29-a653-81a0-aa4b-fc07685b2078",
      "created_time": "2026-01-06T17:28:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-06T17:28:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Update the task board",
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
              "plain_text": "Update the task board",
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
                "email": "chimara.tabitha@example-domain.com"
              }
            },
            {
              "object": "user",
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Chimara and Harvey are tasked with updating the task board, which has not yet been started. The assignment was initiated by Chimara Tabitha on January 6, 2026.\n\n",
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
              "plain_text": "Chimara and Harvey are tasked with updating the task board, which has not yet been started. The assignment was initiated by Chimara Tabitha on January 6, 2026.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " task board, update, Chimara Tabitha, Harvey Spectre, project management, team collaboration, not started, assignment, reminders, productivity.",
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
              "plain_text": " task board, update, Chimara Tabitha, Harvey Spectre, project management, team collaboration, not started, assignment, reminders, productivity.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Update-the-task-board-2e0eef29a65381a0aa4bfc07685b2078",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e0eef29-a653-81a4-84cb-d512772d0b30",
      "created_time": "2026-01-06T17:30:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-06T17:28:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Feed the cats dog food",
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
              "plain_text": "Feed the cats dog food",
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
                "email": "chimara.tabitha@example-domain.com"
              }
            },
            {
              "object": "user",
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves feeding cats dog food, assigned to Chimara Tabitha and Harvey Spectre, and is scheduled to start on January 6, 2026. The status of this task is currently not started.\n\n",
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
              "plain_text": "This task involves feeding cats dog food, assigned to Chimara Tabitha and Harvey Spectre, and is scheduled to start on January 6, 2026. The status of this task is currently not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "\n1. Feed\n2. Cats\n3. Dog food\n4. Task\n5. Chimara Tabitha\n6. Harvey Spectre\n7. Pet care\n8. Not Started\n9. Assignment\n10. Schedule",
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
              "plain_text": "\n1. Feed\n2. Cats\n3. Dog food\n4. Task\n5. Chimara Tabitha\n6. Harvey Spectre\n7. Pet care\n8. Not Started\n9. Assignment\n10. Schedule",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Feed-the-cats-dog-food-2e0eef29a65381a484cbd512772d0b30",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e0eef29-a653-81ab-9aa7-c5548a57d3c7",
      "created_time": "2026-01-06T01:36:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-06T01:35:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Add slash command to loading messages",
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
              "plain_text": "Add slash command to loading messages",
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
                "email": "chimara.tabitha@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves adding a slash command to loading messages. The project is assigned to Chimara Tabitha and is set to start on January 6, 2026.\n\n",
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
              "plain_text": "This task involves adding a slash command to loading messages. The project is assigned to Chimara Tabitha and is set to start on January 6, 2026.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " slash command, loading messages, Chimara Tabitha, project, task, software development, user interface, command integration, message enhancement, not started.",
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
              "plain_text": " slash command, loading messages, Chimara Tabitha, project, task, software development, user interface, command integration, message enhancement, not started.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Add-slash-command-to-loading-messages-2e0eef29a65381ab9aa7c5548a57d3c7",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e0eef29-a653-81b1-b6db-ca7af7a44081",
      "created_time": "2026-01-06T16:36:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-06T16:36:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Pet all the cats",
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
              "plain_text": "Pet all the cats",
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
                "email": "chimara.tabitha@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines a task to pet all the cats, assigned to Chimara Tabitha, with a start date set for January 6, 2026. The task is currently marked as not started.\n\n",
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
              "plain_text": "This document outlines a task to pet all the cats, assigned to Chimara Tabitha, with a start date set for January 6, 2026. The task is currently marked as not started.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " petting, cats, animal care, task management, Chimara Tabitha, cat lovers, feline interaction, animal affection, pet care, scheduled activities.",
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
              "plain_text": " petting, cats, animal care, task management, Chimara Tabitha, cat lovers, feline interaction, animal affection, pet care, scheduled activities.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Pet-all-the-cats-2e0eef29a65381b1b6dbca7af7a44081",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e0eef29-a653-81fd-8067-d25cf3308837",
      "created_time": "2026-01-06T16:35:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-06T16:35:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Test the app",
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
              "plain_text": "Test the app",
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
              "id": "25cd872b-594c-8111-84e3-00020e1da9ea",
              "name": "Harvey Spectre",
              "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
              "type": "person",
              "person": {
                "email": "harvey.spectre@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines a task for Harvey Spectre to test an app, which is currently in a \"Not Started\" status. The task is scheduled to start on January 6, 2026, at 4:35 PM (UTC).\n\n",
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
              "plain_text": "This document outlines a task for Harvey Spectre to test an app, which is currently in a \"Not Started\" status. The task is scheduled to start on January 6, 2026, at 4:35 PM (UTC).\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " app testing, Harvey Spectre, task management, software testing, user feedback, project status, application performance, testing process, QA, tech evaluation.",
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
              "plain_text": " app testing, Harvey Spectre, task management, software testing, user feedback, project status, application performance, testing process, QA, tech evaluation.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Test-the-app-2e0eef29a65381fd8067d25cf3308837",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e1eef29-a653-815d-b9f9-de045fd62cdd",
      "created_time": "2026-01-07T17:59:00.000Z",
      "last_edited_time": "2026-01-08T00:28:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "152d872b-594c-8145-9c2c-000204787b69"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-07T17:59:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Set up the new dev environment",
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
              "plain_text": "Set up the new dev environment",
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
                "email": "chimara.tabitha@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document outlines the task to set up a new development environment, which is currently not started and assigned to Chimara Tabitha. The start date for this task is January 7, 2026, at 5:59 PM (UTC).\n\n",
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
              "plain_text": "This document outlines the task to set up a new development environment, which is currently not started and assigned to Chimara Tabitha. The start date for this task is January 7, 2026, at 5:59 PM (UTC).\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " development environment, setup, Chimara Tabitha, project management, software development, task assignment, IT infrastructure, environment configuration, team collaboration, project timeline.",
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
              "plain_text": " development environment, setup, Chimara Tabitha, project management, software development, task assignment, IT infrastructure, environment configuration, team collaboration, project timeline.",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Set-up-the-new-dev-environment-2e1eef29a653815db9f9de045fd62cdd",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e2eef29-a653-8112-9bcf-d12bf714e2fd",
      "created_time": "2026-01-08T00:20:00.000Z",
      "last_edited_time": "2026-01-08T00:20:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-08T00:20:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "email": "chimara.tabitha@example-domain.com"
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
                "content": "Fix the bug with recognizing existing tasks",
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
              "plain_text": "Fix the bug with recognizing existing tasks",
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
                "email": "chimara.tabitha@example-domain.com"
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
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This task involves fixing a bug related to the recognition of existing tasks, which has not yet been started. It is assigned to Chimara Tabitha and is set to begin on January 8, 2026.\n\n",
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
              "plain_text": "This task involves fixing a bug related to the recognition of existing tasks, which has not yet been started. It is assigned to Chimara Tabitha and is set to begin on January 8, 2026.\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " bug fix, task recognition, existing tasks, software issue, Chimara Tabitha, not started, project management, troubleshooting, development, January 2026",
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
              "plain_text": " bug fix, task recognition, existing tasks, software issue, Chimara Tabitha, not started, project management, troubleshooting, development, January 2026",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Fix-the-bug-with-recognizing-existing-tasks-2e2eef29a65381129bcfd12bf714e2fd",
      "public_url": null
    },
    {
      "object": "page",
      "id": "2e2eef29-a653-81b8-a569-e79f565fffee",
      "created_time": "2026-01-08T00:26:00.000Z",
      "last_edited_time": "2026-01-08T00:26:00.000Z",
      "created_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "last_edited_by": {
        "object": "user",
        "id": "c5c7242a-08c1-471e-b154-2592356fb0de"
      },
      "cover": null,
      "icon": null,
      "parent": {
        "type": "data_source_id",
        "data_source_id": "25eeef29-a653-8172-bd85-000bed7c6532",
        "database_id": "25eeef29-a653-81ba-a4df-e937fe2137f4"
      },
      "archived": false,
      "in_trash": false,
      "is_locked": false,
      "properties": {
        "Start": {
          "id": "Hj%5C_",
          "type": "date",
          "date": {
            "start": "2026-01-08T00:26:00.000+00:00",
            "end": null,
            "time_zone": null
          }
        },
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
                "content": "Feed the cats twice a day",
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
              "plain_text": "Feed the cats twice a day",
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
            "id": "not-started",
            "name": "Not Started",
            "color": "default"
          }
        },
        "Due": {
          "id": "notion%3A%2F%2Ftasks%2Fdue_date_property",
          "type": "date",
          "date": null
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
        "Description": {
          "id": "notion%3A%2F%2Ftasks%2Fdescription_property",
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This document serves as a reminder to feed the cats twice a day, with the task starting on January 8, 2026. The status of the task is currently \"Not Started.\"\n\n",
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
              "plain_text": "This document serves as a reminder to feed the cats twice a day, with the task starting on January 8, 2026. The status of the task is currently \"Not Started.\"\n\n",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "Top 10 Keywords:",
                "link": null
              },
              "annotations": {
                "bold": true,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Top 10 Keywords:",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "\n1. Feed cats\n2. Twice a day\n3. Cat care\n4. Pet feeding\n5. Daily routine\n6. Reminder\n7. Cat health\n8. Feeding schedule\n9. Pet management\n10. Animal care",
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
              "plain_text": "\n1. Feed cats\n2. Twice a day\n3. Cat care\n4. Pet feeding\n5. Daily routine\n6. Reminder\n7. Cat health\n8. Feeding schedule\n9. Pet management\n10. Animal care",
              "href": null
            }
          ]
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
      "url": "https://www.notion.so/Feed-the-cats-twice-a-day-2e2eef29a65381b8a569e79f565fffee",
      "public_url": null
    }
  ],
  "next_cursor": null,
  "has_more": false,
  "type": "page_or_data_source",
  "page_or_data_source": {},
}