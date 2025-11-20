import slashCmdHandler from "./routes/slashcmd";
import interactionHandler from "./routes/paresponse/updateResponse";
import { threadMsgHandler } from "./routes/threadReply";
import { APIGatewayProxyEventV2, Context } from "aws-lambda";

export async function handler(event: APIGatewayProxyEventV2, context: Context) {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  const handlers = {
    "/slashcmd": slashCmdHandler,
    "/slack/interact": threadMsgHandler,
    "/test/resp": interactionHandler,
  }
  // const handler = handlers[urlPath] || fallbackHandler;
  // return await handler(event, context)
}
