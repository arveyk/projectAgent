import slashCmdHandler from "./routes/slashcmd";
import interactionHandler from "./routes/paresponse/updateResponse";
import { threadMsgHandler } from "./routes/threadReply";
import { APIGatewayProxyHandlerV2, APIGatewayProxyEventV2, Context } from "aws-lambda";

async function fallbackHandler(event: APIGatewayProxyEventV2, context: Context) {
  return "Error: Invalid route";
}

export async function handler(event: APIGatewayProxyEventV2, context: Context) {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  const handlers = {
    "/slashcmd": slashCmdHandler,
    "/slack/interact": threadMsgHandler,
    "/test/resp": interactionHandler,
  }

  const urlPath: string = event["rawPath"];
  const handler: APIGatewayProxyHandlerV2 = handlers[urlPath] || fallbackHandler;
  return await handler(event, context);
}
