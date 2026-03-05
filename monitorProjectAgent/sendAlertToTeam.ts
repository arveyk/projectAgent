import { getMostRecentlyDeliveredEmail, getTimeSinceDelivery } from "./mailgunlogs";
import { DateTime } from "luxon";

/**
 * Sends an error notification if the last email delivery was more than 24 hours ago.
 * @param e - The error to be logged or notified about.
 */

export async function createSNSAlertMessage(error: unknown) {
  try {
    if (error) {
      console.log("Error in Monitoring Service:", error);
      return {
        sendAlert: true,
        msg: "**Alert!**\nMonitoring service failed ...",
      }
    }
    const mostRecentError = ""
    if (!mostRecentError) {
      const errorEventMsg = `**Alert:**\nThe monitoring service has failed to Project Agent. This may indicate a critical issue with the Lambda function or AWS infrastructure. Immediate investigation required.`;
      console.log("Failure in Project Agent Service, please check app");

      return {
        sendAlert: true,
        msg: errorEventMsg
        // msg: "**Alert!**\nSolutional's Project Agent service No Logs retrieved...",
      }
    }
    const lastDeliveryDate = getTimeSinceDelivery(mostRecentError);
    const timeElapsed = DateTime.now().diff(lastDeliveryDate, "hours");
    console.log(timeElapsed);
    if (timeElapsed.hours >= 24.0) {
      
      const errorEvenMsg = `**Alert!:**\n
	      Solutional’s Project Agent service has failed to daily emails to  in the past ${timeElapsed} hours. The last successful delivery was [${lastDeliveryDate.toISO()}] hours ago  To diagnose visit Google Cloud Console to diagnose the issue through this link https://console.cloud.google.com/run/detail/europe-west1/notion-notifs/observability/metrics?hl=en&project=notion-notifs.`;
      
      console.log("Failure in Project Agent Service, please check app on Google cloud");

      return {
        sendAlert: true,
        msg: "**Alert**\nSolutional’s Project Agents monitoring service has not detected any emails sent in the past 24 hours. Please double check to make sure that the service is running.\n\
The service can be found here:\
https://console.cloud.google.com/run/detail/europe-west1/notion-notifs/observability/metrics?hl=en&project=notion-notifs"
      }
    } else {
      return {
        sendAlert: false,
        msg: "**Solutional Project Agents Monitoring!**\nNotification Running fine"
      }
    }
    
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
}

