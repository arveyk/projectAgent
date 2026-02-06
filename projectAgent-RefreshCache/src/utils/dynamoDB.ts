import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { BatchGetCommand, BatchGetCommandOutput, DynamoDBDocumentClient, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ListUsersResponse, QueryDataSourceResponse } from "@notionhq/client";
import { CACHE_TABLE_NAME, REGION } from "../env";

// initialize DDB client
const DDBClient: DynamoDBClient = new DynamoDBClient({ region: REGION });
const DDBDocumentClient: DynamoDBDocumentClient = DynamoDBDocumentClient.from(DDBClient);

/**
 * Updates the cache.
 * @param taskResponse The raw task response from Notion.
 * @param projectResponse The raw project response from Notion.
 * @param userResponse The raw user response from Notion.
 */
export async function refreshCache(taskResponse: QueryDataSourceResponse["results"], projectResponse: QueryDataSourceResponse["results"], userResponse: ListUsersResponse) {
    // TODO compress the data before storing it

    // check if the entry exists
    // Fetch all items
    const getCommand = new BatchGetCommand({
        RequestItems: {
            'projectagent-cache-dev': {
                Keys: [
                    {"ItemType": "task"},
                    {"ItemType": "project"},
                    {"ItemType": "user"},
                ]
            }
        }
    })

    const batchGetResponse = await DDBDocumentClient.send(getCommand);
    console.log(JSON.stringify(batchGetResponse));
    const taskCacheResponse = await refreshTaskCache(taskResponse, batchGetResponse);
    console.log(JSON.stringify(taskCacheResponse));
}

/**
 * Updates the task cache.
 * @param taskResponse The raw task response from Notion.
 * @param batchGetResponse The response from getting the current cache values.
 * @returns The response from updating the cache.
 */
async function refreshTaskCache(taskResponse: QueryDataSourceResponse["results"], batchGetResponse: BatchGetCommandOutput) {

    const batchGetResponses = batchGetResponse.Responses;

    let cacheResponse;
    // if it exists, update it
    if (batchGetResponses && "task" in batchGetResponses) {
        // TODO fix the update command
        const command = new UpdateCommand({
            TableName: CACHE_TABLE_NAME,
            Key: {
                "ItemType": "Task"
            },
            AttributeUpdates: {
                "RawResponse": {
                    Action: "PUT",
                    Value: taskResponse
                }
            }
        })
        cacheResponse = await DDBDocumentClient.send(command);
    }
    // if it doesn't exist, create it
    else {
        const command = new PutCommand({
            TableName: CACHE_TABLE_NAME,
            Item: {
                "ItemType": "task",
                "RawResponse": taskResponse
            }
        });
        cacheResponse = await DDBDocumentClient.send(command);
    }

    return cacheResponse;
}
