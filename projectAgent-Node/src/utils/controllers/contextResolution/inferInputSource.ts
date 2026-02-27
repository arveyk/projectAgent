import axios from "axios";
import { getSlackUsers } from "../getUsersSlack";
import { SlackUser } from "../userTypes";
import { SLACK_BOT_TOKEN } from "../../../env";
import { SlashCommand } from "@slack/bolt";


type InferredContext = {
  error: any | null,
  inferredFromPreviousContext: boolean,
  text: string

}


/**
 * Function to infer which input source the user would like processed
 *
 * @param requestBody - slash command request body from Slack
 * @return returns the text that will be processed by Project Agent
 */

export async function inferInputSource(requestBody: SlashCommand): Promise<InferredContext> {
  console.log("(inferInputSource)");

  const userTextInputLength = requestBody.text.trim().length;
  let textToParse: string;

  if (requestBody["command"]) {
    textToParse = requestBody["text"];
  } else if (requestBody["event"]) {
    textToParse = requestBody["text"];
  } else {
    textToParse = "No Task Available";
  }


  if (userTextInputLength <= 1) {
    const conversationHistoryResponse = await getChatHistory(requestBody.channel_id, requestBody.trigger_id)

    console.log(JSON.stringify(conversationHistoryResponse.data, null, 2));

    const recentMessageHistory = conversationHistoryResponse.data.messages;
    if (conversationHistoryResponse.data.ok === true && recentMessageHistory) {

      if (recentMessageHistory.length === 0) {
        textToParse = "No Task Available";
      }
      else {        
        textToParse = await createChatContext(requestBody.channel_name, recentMessageHistory);
      }
    } else {
      return {
        error: conversationHistoryResponse.data,
        inferredFromPreviousContext: false,
        text: "Error Encountered or History is empty"
      }
    }

    return {
      error: null,
      inferredFromPreviousContext: true,
      text: textToParse
    }
  } else {
    return {
      error: null,
      inferredFromPreviousContext: false,
      text: textToParse
    }
  }
}

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

/**
 * Function to retrive 5 most recent chats from the user's channel
 * 
 * @param channelId -  Id of the channel where project agent is invoked
 * @param triggerId - Trigger ID of the slash command
 * @returns response from searching channel history
 */

export async function getChatHistory(channelId: string, triggerId: string) {
  return await axios.get("https://slack.com/api/conversations.history", {
    params: {
      channel: channelId,
      inclusive: false,
      latest: triggerId,
      limit: 5,
    },

    headers: {
      "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    family: 4
  }).then((response) => {
    return response;
  }).catch((error) => {
    console.log(error.data);
    return error;
  });
};

export async function createChatContext(channelName: string, recentMessageHistory: any): Promise<string> {
  const conversationList = [];
  
  for (const conversation of recentMessageHistory) {
    console.log(conversation.user, ": ", conversation.text)
    if (!conversation.subtype) {
      conversationList.push({
        user: conversation.user,
        text: conversation.text
      });
    }
  }

  const allSlackUsers = await getSlackUsers();
  
  const convoWithSpeakerNames: string[] = conversationList.map((convo) => {
    const match = matchUserById(convo.user, allSlackUsers);
    return `${match?.name || "Unknown"}: ${convo.text}`;
  });
  console.log(conversationList);

  return `Channel: ${channelName}\n`.concat(convoWithSpeakerNames.reverse().join("\n"));

}