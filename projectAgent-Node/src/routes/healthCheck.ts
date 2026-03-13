
import { logTimestampForBenchmarking } from "../utils/logTimestampForBenchmarking";
import { APIGatewayProxyEventV2, Context, StreamifyHandler } from "aws-lambda";


export const healthcheckHandler: StreamifyHandler = async function (
    event: APIGatewayProxyEventV2,
    responseStream: awslambda.HttpResponseStream,
    context: Context,
) {
    console.log("We are now in the slashcmd handler");
    logTimestampForBenchmarking("Execution start");
    const httpResponseMetadata = {
        statusCode: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    };

    responseStream = awslambda.HttpResponseStream.from(
        responseStream,
        httpResponseMetadata,
    );
    responseStream.end();

    console.log(
        `Event: ${JSON.stringify(event)}\nContext: ${JSON.stringify(context)}`,
    );

    try {

        console.log(`slashCmdHandler here. Any tasks for me?
      Request Body: ${JSON.stringify(event)}`);
        console.log(`headers: ${JSON.stringify(event.headers)}`);
    
    } catch (error) {
        console.log("Error", error);
    }
}