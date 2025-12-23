import slashCmdHandler from "./routes/slashcmd";
import {interactionHandler} from "./routes/paresponse/updateResponse";
import { APIGatewayProxyHandlerV2, StreamifyHandler, APIGatewayProxyEventV2, Context } from "aws-lambda";
import { isPromise } from "util/types";

// *const fallbackHandler = awslambda.streamifyResponse(async function(event: APIGatewayProxyEventV2, context: Context) {
const fallbackHandler = awslambda.streamifyResponse(function(event: APIGatewayProxyEventV2) {
return "Error: Invalid route";
})


const handler: StreamifyHandler = awslambda.streamifyResponse(function(event: APIGatewayProxyEventV2, responseStream: awslambda.HttpResponseStream, context: Context) {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  // TODO rename all slashcmd to slashCommand
  const handlers: Record<string, StreamifyHandler | undefined> = {
    "/slashcmd": slashCmdHandler,
    "/interact": interactionHandler,
  }

  const urlPath: string = event["rawPath"];
  const handler: StreamifyHandler = handlers[urlPath] || fallbackHandler;
  const newHandler = awslambda.streamifyResponse(handler(event, responseStream, context));
  if (isPromise(newHandler)){
    return newHandler;
  }
})

export { handler }