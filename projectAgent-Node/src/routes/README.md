## Interactions URL

## Event to handle

### Adding a Task

// TODO update this super outdated readme

- Slash command
  - check input format
  - response
    - Format add [ Task Details ]
    - Correct Format - processing of tasks

- Approval/Reject Button pressed
  - Approve
    - Process and send confirmation
    - Send as ephemeral or Delete confirmation message
  - Reject
    - Send confirmation message
    - Delete confirmation message if not sent as ephemeral
  - Edit
    - Send a modal to task user input
- Modal/Block confirmation submission

### Updating a Task

- Slash command
  - check input format
  - response
    - Format: update [ TaskTitle] or [Assignee]
    - Correct Format - processing of tasks
  - prompt with database query of tasks in database that match
    - user should select index of desired entry to update

- Approval/Reject Button pressed
  - Approve
    - Process and send confirmation
    - Send as ephemeral or Delete confirmation message
  - Reject
    - Send confirmation message
    - Delete confirmation message if not sent as ephemeral
  - Edit
    - Send a modal to task user input
- Modal/Block confirmation submission

#### slash cmd

---

look for

- body['command'],
- body['channel_id']
- body['channel_name'],
- body['response_url']
- body['text']

#### user interaction

---

look for

- payload['type'] (block_actions, ...)
- payload['trigger_id']
- payload['channel']['id']
- payload['channel']['name']
- payload['message']['text']
- payload['message']['ts']
- payload['response_url']
- payload['actions']['action_id']
