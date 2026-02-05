import { APIGatewayProxyEventV2, Context, Handler } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// initialize DDB client
    const DDBClient: DynamoDBClient = new DynamoDBClient({region: "us-west-2"});
    const DDBDocumentClient: DynamoDBDocumentClient = DynamoDBDocumentClient.from(DDBClient);

const cacheRefreshHandler: Handler = async function (
    event: APIGatewayProxyEventV2,
    context: Context
) {
    console.log("Hello world");
    const command = new PutCommand({
        TableName: "projectagent-cache-dev",
        Item: {
            ItemType: "hello",
            RawResponse: "world"
        }
    });
    const response = await DDBDocumentClient.send(command);
    console.log(response);
    return response;

    // pageResponse = await fetchPages()
    // userResponse = await fetchUsers()
    // projectResponse = await fetchProjects()
    // await refreshPageCache(client, pageResponse)
    // await refreshUserCache(client, userResponse)
    // await refreshProjectCache(client, projectResponse)

}

export default cacheRefreshHandler;
