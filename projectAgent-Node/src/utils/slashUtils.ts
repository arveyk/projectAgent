import { APIGatewayProxyEventV2 } from "aws-lambda";
import { Request } from "express";
import querystring from "querystring";

// TODO refactor to work with Lambda instead of Express
/**
 * Parses a slash command and determines if it is a valid command.
 * @param {*} reqBody Request from Slack containing a slash command
 * @returns true if the slash command is valid, else returns false.
 */

export function isValidCmd(reqBody: Request["body"]): {
  isValid: boolean;
  action?: string;
} {
  const commandParams = reqBody["text"].trim().split(" ");
  let firstArg = commandParams[0];
  let otherArgs = commandParams.slice(1, -1).join(" ");
  const isValidCmd = {
    isValid: false,
    action: "",
  };

  isValidCmd.isValid =
    (firstArg.toLowerCase() === "add" || "update") && otherArgs.length >= 5;
  firstArg === "add" ? (isValidCmd.action = "add") : "update";
  return isValidCmd;
}

/**
 * Extracts parameters from the encoded event body.
 * @param event 
 */
export function extractReqBody(event: APIGatewayProxyEventV2) {
  const bufferObj = Buffer.from(event.body ? event.body : "", "base64");
  const decodedBody: string = bufferObj.toString("utf8");
  const parsedBody = querystring.parse(decodedBody);
  console.log(JSON.stringify(parsedBody));

  return parsedBody
}

/**
 * Extracts a payload from a request body
 * @param reqBody 
 * @returns 
 */
export function extractPayload(reqBody: querystring.ParsedUrlQuery) {
  const payloadStr = reqBody.payload ? Array.isArray(reqBody.payload) ? reqBody.payload.join() : reqBody.payload : "";
  const payload = JSON.parse(payloadStr);
  return payload;
}
