import axios from "axios";
import { getSlackUsers } from "../getUsersSlack";
import { SlackUser } from "../userTypes";
import { SLACK_BOT_TOKEN } from "../../../env";
import { SlashCommand } from "@slack/bolt";


/**
 * Function to infer which input source the user would like processed
 *
 * @param
 * @return returns the text that will be processed by Project Agent
 */

export async function inferInputSource(requestBody: SlashCommand) {
  console.log("(inferInputSource)");

  const userTextInputLength = requestBody.text.trim().length;
  let textToParse: string;
  if (requestBody["command"]) {
    textToParse = requestBody["text"];
  } else if (requestBody["event"]) {
    textToParse = requestBody["text"];
  } else {
    textToParse = "No Task available";
  }


  if (userTextInputLength <= 1) {
    const conversationHistoryResponse = await axios.get("https://slack.com/api/conversations.history", {
      params: {
        channel: requestBody.channel_id,
        inclusive: false,
        latest: requestBody.trigger_id,
        limit: 3,
      },

      headers: {
        "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      family: 4
    }).then((response) => {
      return response;
    }).catch((error) => {
      return error.data;
    });

    console.log(JSON.stringify(conversationHistoryResponse.data, null, 2));

    const  recentMessageHistory = conversationHistoryResponse.data.messages;
    let convoWithSpeakerNames: string[] = [];
    if (conversationHistoryResponse.data.ok === true) {
      const conversationList = [];
      for (const conversation of recentMessageHistory) {
        console.log(conversation.user, ": ", conversation.text)
        conversationList.push({
          user: conversation.user,
          text: conversation.text
        });
      }

      const allSlackUsers = await getSlackUsers();
      convoWithSpeakerNames = conversationList.map((convo) => {
        const match = matchUserById(convo.user, allSlackUsers);
        return `${match?.name || "Unknown"}: ${convo.text}`;
      });
      // console.log(convoWithSpeakerNames.reverse().join("\n"));
      console.log(conversationList);
    }
      return {
       inferredFromPreviousContext: true,
       text: convoWithSpeakerNames.reverse().join("\n")
     }
  } else {    
      return {
       inferredFromPreviousContext: false,
       text: requestBody.text
      }
  }
}

// TODO create convoList function
/**
 * Function to match user by id
 * @param userId:	id to match
 * @param usersList:	list of users to search from
 *
 * @return: user found
 */
export function matchUserById(userId: string, usersList: SlackUser[]) {
  const user = usersList.find((user) => {
    return user.userId === userId;
  });
  return user;
}