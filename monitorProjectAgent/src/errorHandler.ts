import { createAlertMessage } from "./sendAlertToTeam";
import { postAlertToSlack } from "./postMessageToSlack";
import { sendEmail } from "./mailgunService";
import { UPTIME_EMAIL } from "./env";
import { DEV_TEAM_SLACK_CHANNEL } from "./env";
import { SECOND_DEV_TEAM_SLACK_CHANNEL } from "./env";

export async function errorHandler(errorEncountered: unknown, communicationChannel: string) {
    try {

        const alertObject = createAlertMessage(errorEncountered);

        console.log("Error handler in action", errorEncountered);

        if (communicationChannel === "email") {
            await sendEmail({
                recipient: UPTIME_EMAIL,
                msg: alertObject.msg
            }, "DevTeam");
            console.log("Sending to email");
        } else {
            await postAlertToSlack(DEV_TEAM_SLACK_CHANNEL, alertObject.msg);
            await postAlertToSlack(SECOND_DEV_TEAM_SLACK_CHANNEL, alertObject.msg);
            console.log("Sending to Dev channels");
        }
    } catch (error) {
        console.log(`Error in monitor`, error);
    }
}
/*
(async () => {
    await errorHandler(true, 'emails');
})();
*/