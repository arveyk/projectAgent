// import { getMostRecentlyDeliveredEmail, getTimeSinceLastInvocation } from "./mailgunlogs";
import { DateTime } from "luxon";

function getTimeSinceLastInvocation() {
  return DateTime.now();
};

/**
 * Sends an error notification if the last email delivery was more than 24 hours ago.
 * @param error - The error to be logged or notified about.
 */

export function createAlertMessage(error: unknown) {
  try {
    if (error) {
      console.log("Error in Monitoring Service:", error);
      return {
        sendAlert: true,
        msg: "**Alert!**\nMonitoring service failed ...",
      }
    }
    const mostRecentError = "None"
    const mostRecentInvocation = DateTime.now();

    if (!mostRecentError) {
      const errorEventMsg = `*Alert:*\n >The monitoring service has failed to Project Agent. This may indicate a critical issue with the Lambda function or AWS infrastructure. Immediate investigation required.`;
      console.log("Failure in Project Agent Service, please check app");

      return {
        sendAlert: true,
        msg: errorEventMsg
      }
    }
    const lastInvocationTime = getTimeSinceLastInvocation();
    const timeElapsed = DateTime.now().diff(lastInvocationTime, "hours");
    console.log(timeElapsed);
    if (timeElapsed.hours >= 4.0) {

      const errorEvenMsg = `> **Alert!:**\n
	      > Solutional’s Project Agent service has failed to daily emails to  in the past ${timeElapsed} hours. The last successful delivery was [${lastInvocationTime.toISO()}] hours ago  To diagnose visit Google Cloud Console to diagnose the issue through this link REPLACE WITH PROJECT AGENT'S LINK.`;

      console.log("Failure in Project Agent Service, please check app on Google cloud");

      return {
        sendAlert: true,
        msg: `**Alert**\nSolutional’s Project Agents monitoring service has been offline for the past ${timeElapsed} . Please double check to make sure that the service is running.\n\
The service can be found here:\
https://console.cloud.google.com/run/detail/europe-west1/notion-notifs/observability/metrics?hl=en&project=notion-notifs`
      }
    } else {
      return {
        sendAlert: false,
        msg: "*Solutional Project Agents Monitoring! Running Smoothly"
      }
    }

  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
}


