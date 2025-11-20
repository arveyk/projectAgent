import slashCmdHandler from "./routes/slashcmd";
import {interactionHandler} from "./routes/paresponse/updateResponse";
import { APIGatewayProxyHandlerV2, APIGatewayProxyEventV2, Context } from "aws-lambda";
import { isPromise } from "util/types";

async function fallbackHandler(event: APIGatewayProxyEventV2, context: Context) {
  return "Error: Invalid route";
}

const handler: APIGatewayProxyHandlerV2 = function(event, context, callback) {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  // TODO rename all slashcmd to slashCommand
  const handlers: Record<string, APIGatewayProxyHandlerV2 | undefined> = {
    "/slashcmd": slashCmdHandler,
    "/interact": interactionHandler,
  }

  const urlPath: string = event["rawPath"];
  const handler: APIGatewayProxyHandlerV2 = handlers[urlPath] || fallbackHandler;
  const newHandler = handler(event, context, callback);
  if (isPromise(newHandler)){
    return newHandler;
  }
}

export { handler }