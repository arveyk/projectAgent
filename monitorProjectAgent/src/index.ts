import { createAlertMessage } from "./sendAlertToTeam";
import { postAlertToSlack } from "./postMessageToSlack";
import { sendEmail } from "./mailgunService";
import { UPTIME_EMAIL } from "./env";

export async function errorHandler(sendError: boolean, communicationChannel: string) {
    try {

        const message = createAlertMessage(null
        );
        console.log("Error handler in action", sendError);

        if (communicationChannel === "email") {
            await sendEmail({
                recipient: UPTIME_EMAIL,
                msg: message.msg
            }, "DevTeam");
            console.log("Sending to email");
        } else {
            await postAlertToSlack("C08VADJ7SEL", message.msg);
            console.log("Sending to Dev channels");
        }
    } catch (error) {
        console.log(`Error in monitor`, error);
    }
}

(async () => {
    await errorHandler(true, 'emails');
})();
