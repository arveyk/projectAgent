import formData from "form-data";
import Mailgun from "mailgun.js";
// import { MailgunMessageData } from "mailgun.js/Types/index.js";

import { SENDING_KEY, DOMAIN, MAILGUN_API_KEY, DEPLOYMENT_ENV } from "./env";
import { DateTime } from "luxon";


const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY || "",
});

console.log("Sender: ", SENDING_KEY);

export type MailBody = {
  recipient: string;
  msg: string;
};

/**
 * Sends an email to a user.
 * @param emailBody The body of the email
 * @param recipientName The name of the user to email
 */
export async function sendEmail(
  emailBody: MailBody,
  recipientName: string,
): Promise<void> {
  const today = DateTime.now();
  let senderName = `Project Agent ${SENDING_KEY}`;
  if (DEPLOYMENT_ENV === "Development") {
    senderName = `Project Agent (Dev)${SENDING_KEY}`
  }

  const messageData = {
    from: `Project Agent ${SENDING_KEY}`,
    to: [emailBody.recipient],
    subject: `${recipientName}'s Monitor: ${today.toFormat("MMM dd '-' yyyy")}`,
    text: "Monitoring Alert",
    html: `${emailBody.msg}`,
  };

  const emailingResponse = await mg.messages.create(DOMAIN, messageData);
  console.log("Formatted message body", emailBody.msg);
  console.log("Emailing Attempt (sendNotification func): ", emailingResponse);
}

