import { getSlackUsers } from "../getUsersSlack";
import { SlackUser } from "../userTypes";
import { SlashCommand } from "@slack/bolt";
import { getChatHistory } from "../../../externalService/slackApiService";


type InferredContext = {
  error: any | null,
  inferredFromPreviousContext: boolean,
  text: string
}

// Types for Message elements in the conversations history query response

type MessageResponse = {
  "user": string;
  "type": "message";
  "ts": number;
  "client_msg_id": string,
  "text": string;
  "team": string;
  "blocks": object[];
  "reactions": object[];
}

type BotAddOrRemoveMessage = {
  "subtype": "bot_add";
  "text": string;
  "user": string,
  "bot_link": string;
  "bot_id": string;
  "type": "message",
  "ts": number
}
type BotResponses = {
  "user": "U0935EFG3GD";
  "type": "message";
  "ts": "1769021479.365719";
  "edited": {
    "user": string;
    "ts": "1769021579.000000";
  },
  "bot_id": string;
  "app_id": string;
  "text": string;
  "team": string;
  "bot_profile": object[];
  "blocks": object[];
}

type ChannelJoin = {
  "subtype": "channel_join";
  "user": string;
  "text": string;
  "inviter": string;
  "type": "message",
  "ts": number;
}

type MessageElement = BotAddOrRemoveMessage | BotResponses | ChannelJoin | MessageResponse;

/**
 * Function to infer which input source the user would like processed
 *
 * @param requestBody: slash command request body from Slack
 * @return: returns the text that will be processed by Project Agent
 */

export async function inferInputSource(requestBody: SlashCommand, timeStamp: number): Promise<InferredContext> {
  console.log("(inferInputSource)");

  const userTextInputLength = requestBody.text.split(" ").filter((word) => {
    // Elimites elements that are empty - that were spaces
    return word !== "";
  }).length;
  let textToParse: string;

  if (requestBody["command"] || requestBody["event"]) {
    textToParse = requestBody["text"];
  } else {
    textToParse = "No Task Available";
  }

  if (userTextInputLength > 1) {
    console.log("Input included")
    return {
      error: null,
      inferredFromPreviousContext: false,
      text: textToParse
    }
  }
  const historyQueryResponse = await getChatHistory(requestBody.channel_id, timeStamp)
  const historyData = historyQueryResponse.data;
  console.log("Conversation History", JSON.stringify(historyData, null, 2));

  if (!historyData) {
    return {
      error: historyQueryResponse,
      inferredFromPreviousContext: false,
      text: "Error Encountered or No Data field to get History from"
    }
  }
  const recentMessageHistory: MessageElement[] | undefined = historyData.messages;

  if (recentMessageHistory) {
    if (recentMessageHistory.length === 0) {
      textToParse = "No Task Available"
    } else {
      textToParse = await createChatContext(requestBody.channel_name, recentMessageHistory);
    }

    return {
      error: null,
      inferredFromPreviousContext: true,
      text: textToParse
    }
  }
  return {
    error: historyQueryResponse.data,
    inferredFromPreviousContext: false,
    text: "Error Encountered or History is empty"
  }
}

/**
 * Function to match user by id
 * @param userId:	id to match
 * @param usersList:	list of users to search from
 *
 * @return: Slack user with id matching userId, undefined if not match is found
 */
export function matchUserById(userId: string, usersList: SlackUser[]): SlackUser | undefined {
  const user = usersList.find((user) => {
    return user.userId === userId;
  });
  return user;
}


/**
 * Function to put together text from chat history that LLM will extract task from
 * @param channelName: Name of the channel where project agent is called
 * @param recentMessageHistory: Array of conversations retrieved from the channel where project
 * agent is invoked
 * @returns: the combined chats to ne passed to LLM for task extraction
 */
export async function createChatContext(channelName: string, recentMessageHistory: MessageElement[]): Promise<string> {
  const conversationList: {
    user: string, text: string
  }[] = recentMessageHistory.map((conversation) => {
    console.log(conversation.user, ": ", conversation.text);
    // Existence of a subtype indicates that the conversation is a channel join (if a person or bot
    // joins the channel) or if a bot is removed from a channel, those we definately do not need to process

    if (!("subtype" in conversation || "bot_id" in conversation) && "client_msg_id" in conversation) {
      if (conversation.text.trim().startsWith("&gt; /timely")) {
        return null;
      }
      return {
        user: conversation.user,
        text: conversation.text
      };
    }
    return null
  }).filter((convo) => convo !== null);

  const allSlackUsers = await getSlackUsers();

  const convoWithSpeakerNames: string[] = conversationList.map((convo) => {
    const match = matchUserById(convo.user, allSlackUsers);
    return `${match?.name || "Unknown"}: ${convo.text}`;
  });
  console.log(conversationList);
  return `Channel: ${channelName}\n`.concat(convoWithSpeakerNames.reverse().join("\n"));

}