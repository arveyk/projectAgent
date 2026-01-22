import { QueryDataSourceResponse } from "@notionhq/client";

export const exampleProjectRaw: QueryDataSourceResponse["results"][number] = {
  "object": "page",
  "id": "2e8eef29-a653-80b9-a50d-df4982f43b21",
  "created_time": "2026-01-14T12:36:00.000Z",
  "last_edited_time": "2026-01-14T12:36:00.000Z",
  "created_by": {
    "object": "user",
    "id": "25cd872b-594c-8111-84e3-00020e1da9ea"
  },
  "last_edited_by": {
    "object": "user",
    "id": "25cd872b-594c-8111-84e3-00020e1da9ea"
  },
  "cover": null,
  "icon": {
    "type": "external",
    "external": {
      "url": "https://www.notion.so/icons/target_lightgray.svg"
    }
  },
  "parent": {
    "type": "data_source_id",
    "data_source_id": "25eeef29-a653-8138-88d4-000b4ab2fb3e",
    "database_id": "25eeef29-a653-81e8-b616-db78dd6a7425"
  },
  "archived": false,
  "in_trash": false,
  "is_locked": false,
  "properties": {
    "Assigned Date": {
      "id": "B%3F%7B%3C",
      "type": "date",
      "date": null
    },
    "Due Date": {
      "id": "a%40%3Dm",
      "type": "date",
      "date": null
    },
    "Sign off project?": {
      "id": "icgq",
      "type": "button",
      "button": {}
    },
    "Person": {
      "id": "%7B%3BST",
      "type": "people",
      "people": []
    },
    "Project name": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "Jet Propulsion Redesign",
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
          "plain_text": "Jet Propulsion Redesign",
          "href": null
        }
      ]
    },
    "Owner": {
      "id": "notion%3A%2F%2Fprojects%2Fpeople_property",
      "type": "people",
      "people": []
    },
    "Status": {
      "id": "notion%3A%2F%2Fprojects%2Fstatus_property",
      "type": "status",
      "status": {
        "id": "planned",
        "name": "Planning",
        "color": "blue"
      }
    },
    "Completion": {
      "id": "notion%3A%2F%2Fprojects%2Fcompletion_rollup",
      "type": "rollup",
      "rollup": {
        "type": "number",
        "number": 0,
        "function": "percent_per_group"
      }
    },
    "Priority": {
      "id": "notion%3A%2F%2Fprojects%2Fpriority_property",
      "type": "select",
      "select": null
    },
    "Dates": {
      "id": "notion%3A%2F%2Fprojects%2Fproject_dates_property",
      "type": "date",
      "date": null
    },
    "Summary": {
      "id": "notion%3A%2F%2Fprojects%2Fproject_summary_feature",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "No content",
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
          "plain_text": "No content",
          "href": null
        }
      ]
    },
    "Tasks": {
      "id": "notion%3A%2F%2Fprojects%2Fproject_to_task_relation",
      "type": "relation",
      "relation": [
        {
          "id": "2efeef29-a653-8194-9191-e5e4e24904e4"
        },
        {
          "id": "2efeef29-a653-81d4-aed3-f17c58e8d76d"
        }
      ],
    },
    "Is Blocking": {
      "id": "notion%3A%2F%2Fprojects%2Fproject_blocking_relation",
      "type": "relation",
      "relation": [],
    },
    "Blocked By": {
      "id": "notion%3A%2F%2Fprojects%2Fproject_blocked_by_relation",
      "type": "relation",
      "relation": [],
    }
  },
  "url": "https://www.notion.so/Jet-Propulsion-Redesign-2e8eef29a65380b9a50ddf4982f43b21",
  "public_url": null
}