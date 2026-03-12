import { SLACK_BOT_TOKEN } from "./env";
import axios from "axios";


export async function postAlertToSlack(devChannel: string, errorMessage: string) {
  try {
    const postingUrl = "https://slack.com/api/chat.postMessage";
    const responseData = await axios.post(postingUrl,
      {
        channel: devChannel,
        text: "Some Text",
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `*Error Check Project Agent*\n> Details ${errorMessage}>`
            }
          },
          {
            "type": "section",
            "fields": [
              {
                "type": "mrkdwn",
                "text": "*Error Alert:* \nProject agent Monitoring service"
              },
              {
                "type": "mrkdwn",
                "text": `> *Details* \n >${errorMessage}`
              }
            ]
          },
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
        family: 4,
      },
    )
      .then((responseFromSlack) => {
        console.log("OK from slack", responseFromSlack.data);
        console.log("Data sent to Slack", responseFromSlack.config.data);
        return (responseFromSlack.data);
      })
      .catch((err) => {
        console.log("Error in Axios", err);
      });

    return responseData;
  } catch (err) {
    return err;
  }
}

