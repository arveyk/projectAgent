#!/usr/bin/env python3
"""
Automate Worlflow testing
"""
import logging
import os
import requests
import time

# Import WebClient from Python SDK (github.com/slackapi/python-slack-sdk)
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

# WebClient instantiates a client that can call API methods
# When using Bolt, you can use either `app.client` or the `client` passed to listeners.

client = WebClient(token=os.environ.get("SLACK_BOT_TOKEN"))
print(os.environ.get("SLACK_BOT_TOKEN"))
logger = logging.getLogger(__name__)

url = 'https://slack.com/api/chat.postMessage'

# ID of channel you want to post message to

channel_id = "C08VADJ7SEL"
channel_id_harv = "C08UBDFST50"

with open('samplechats.txt', 'r') as file:
    for line in file:
        try:
            # Call the conversations.list method using the WebClient
            result = client.chat_postMessage(
                    channel=channel_id_harv,
                    #text="/tempest Alice, pick some groceries for tomorrows thanksgiving event and send me the bill",
                    blocks=[{"type": "section", "text": {"type": "mrkdwn",  "text": f"{line.strip()}"}}],
                    username='harveykisiangani',
                    icon_emoji=':white_check_mark:'
                    # You could also use a blocks[] array to send richer content
                    )
            # Print result, which includes information about the message (like TS)
            print(result)
        except SlackApiError as e:
            print(f"Error: {e}")

        time.sleep(180)
    
