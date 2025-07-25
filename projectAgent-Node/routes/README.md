## Interactions URL

Event to handle
---
### Adding a Task
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
