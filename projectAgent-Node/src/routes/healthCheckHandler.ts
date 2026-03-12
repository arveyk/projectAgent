import { StreamifyHandler, APIGatewayProxyEventV2, Context } from "aws-lambda";
import { healthCheck } from "../utils/healthCheck/healthCheck";

/**
 * Responds with 200 if all external services are working, and 503 if any are not working.
 */
export const healthCheckHandler: StreamifyHandler = async function (
  event: APIGatewayProxyEventV2,
  responseStream: awslambda.HttpResponseStream,
  context: Context,
) {
    const healthCheckResponse = await healthCheck();

    const status = healthCheckResponse.llmHealth.ok && healthCheckResponse.notionHealth.ok && healthCheckResponse.slackHealth.ok ? 200 : 503;
    const httpResponseMetadata = {
    statusCode: status,
    headers: {
      "Content-Type": "text/plain",
    },
  };

  responseStream = awslambda.HttpResponseStream.from(
    responseStream,
    httpResponseMetadata,
  );
  responseStream.write(healthCheckResponse);
  responseStream.end();
}
