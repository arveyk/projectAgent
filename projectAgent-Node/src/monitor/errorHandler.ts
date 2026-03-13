import { postMessageOnSlackChannel } from "./postSlackMessage";

export async function catchAllErrorHandler(alertTrigger: { sendAlert: boolean, error: unknown }, communicationChannel: string) {
    try {

        console.log("Error handler in action", alertTrigger.sendAlert);
        const messageBlocks = [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `*Error Check Project Agent*\n> Details ${String(alertTrigger.error)}`
                }
            }
        ];

        const userErrorMessageBlock = [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `:rotating_light: `
                }
            }
        ]

        if (communicationChannel === "email") {
            /**
             * email function comming soon
             * await sendEmail({
                recipient: UPTIME_EMAIL,
                msg: message.msg
            }, "DevTeam");
            */
            console.log("Sending to email");
        } else {
            await postMessageOnSlackChannel("C0AKE3082E5", messageBlocks);
            await postMessageOnSlackChannel("C093941T7JT", messageBlocks)
            console.log("Sending to Dev channels");
        }
    } catch (error) {
        console.log(`Error in monitor`, error);
    }
}

