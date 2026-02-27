import { APIGatewayProxyEventV2 } from "aws-lambda";
import { Request } from "express";
import querystring from "querystring";

/**
 * Parses a slash command and determines if it is a valid command.
 * A valid command is one that has a non-empty "text" field in the request body.
 * @param {*} reqBody Request from Slack containing a slash command
 * @returns true if the slash command is valid, else returns false.
 */

export function isValidCommand(reqBody: Request["body"]): {
  isValid: boolean;
  action?: string;
} {
  const isValidCmd = {
    isValid: Boolean(reqBody["text"]?.trim()),
    action: "add",
  };
  return isValidCmd;
}

/**
 * Extracts parameters from the encoded event body.
 * @param event
 */
export function extractRequestBody(event: APIGatewayProxyEventV2) {
  const bufferObj = Buffer.from(event.body ? event.body : "", "base64");
  const decodedBody: string = bufferObj.toString("utf8");
  const parsedBody = querystring.parse(decodedBody);
  console.log(JSON.stringify(parsedBody));

  return parsedBody;
}

/**
 * Extracts a payload from a request body
 * @param reqBody
 * @returns
 */
export function extractPayload(reqBody: querystring.ParsedUrlQuery) {
  const payloadStr = reqBody.payload
    ? Array.isArray(reqBody.payload)
      ? reqBody.payload.join()
      : reqBody.payload
    : "";
  const payload = JSON.parse(payloadStr);
  return payload;
}

/**
 * Function to categorize task into task creation or project creation
 * 
 * @param requestBody: request object from slack
 * @return - 
 */
export function isTaskCRUDCommand(requestBody: Request["body"]): {
  isTaskCommand: boolean;
  action?: string;
} {

  const textWithTasks: string = requestBody["text"];
  const isTaskCommand = true;

  if (textWithTasks.trim().length === 0) {
    return {
      isTaskCommand,
      action: "get task from chats"
    };
  } else if (textWithTasks.toLowerCase() === "create project") {
    return {
      isTaskCommand: false,
      action: "Create Project"
    };
  } else {
    return {
      isTaskCommand,
      action: "get task from text"
    };
  }
}