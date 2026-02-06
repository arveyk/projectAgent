import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    BatchGetCommand,
    BatchGetCommandOutput,
    DynamoDBDocumentClient,
    PutCommand,
    UpdateCommand,
    UpdateCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import { ListUsersResponse, QueryDataSourceResponse } from "@notionhq/client";
import zlib from 'zlib';
import { promisify } from 'util';
import { CACHE_TABLE_NAME, REGION } from "../env";


// Convert callback-based functions to promise-based
const gzipPromise = promisify(zlib.gzip);

// initialize DDB client
const DDBClient: DynamoDBClient = new DynamoDBClient({ region: REGION });
const DDBDocumentClient: DynamoDBDocumentClient =
    DynamoDBDocumentClient.from(DDBClient);

/**
 * Updates the cache.
 * @param taskResponse The raw task response from Notion.
 * @param projectResponse The raw project response from Notion.
 * @param userResponse The raw user response from Notion.
 */
export async function refreshCache(
    taskResponse: QueryDataSourceResponse["results"],
    projectResponse: QueryDataSourceResponse["results"],
    userResponse: ListUsersResponse,
): Promise<CacheRefreshResponse> {
    // Fetch all items so we can check which entries already exist (needs "update" request)
    // and which were deleted (needs "put" request)
    const getCommand = new BatchGetCommand({
        RequestItems: {
            [CACHE_TABLE_NAME]: {
                Keys: [
                    { ItemType: "task" },
                    { ItemType: "project" },
                    { ItemType: "user" },
                ],
            },
        },
    });
    const batchGetResponse = await DDBDocumentClient.send(getCommand);
    console.log(JSON.stringify(batchGetResponse));

    // Refresh the cache
    const taskCacheResponse = await refreshCacheItem(
        "task",
        taskResponse,
        batchGetResponse,
    );
    const projectCacheResponse = await refreshCacheItem(
        "project",
        projectResponse,
        batchGetResponse,
    );
    const userCacheResponse = await refreshCacheItem(
        "user",
        userResponse,
        batchGetResponse,
    );
    const response = {
        task: taskCacheResponse,
        project: projectCacheResponse,
        user: userCacheResponse,
    };
    return response;
}

/**
 * Updates a cache item.
 * @param itemType The type of item being updated in the cache (task, project, or user)
 * @param notionResponse The raw response from Notion.
 * @param batchGetResponse The response from getting the current cache values.
 * @returns The response from updating the cache.
 */
async function refreshCacheItem(
    itemType: "task" | "project" | "user",
    notionResponse: QueryDataSourceResponse["results"] | ListUsersResponse,
    batchGetResponse: BatchGetCommandOutput,
): Promise<UpdateCommandOutput> {
    // Compress the Notion response before caching it
    const compressedResponse = await gzipPromise(JSON.stringify(notionResponse));

    const batchGetResponses = batchGetResponse.Responses;

    let cacheResponse;
    // If the cache entry exists, update it
    if (batchGetResponses && itemType in batchGetResponses) {
        const command = new UpdateCommand({
            TableName: CACHE_TABLE_NAME,
            Key: {
                ItemType: itemType,
            },
            AttributeUpdates: {
                RawResponse: {
                    Action: "PUT",
                    Value: compressedResponse,
                },
            },
        });
        cacheResponse = await DDBDocumentClient.send(command);
    }
    // If the cache entry doesn't exist, create it
    else {
        const command = new PutCommand({
            TableName: CACHE_TABLE_NAME,
            Item: {
                ItemType: itemType,
                RawResponse: compressedResponse,
            },
        });
        cacheResponse = await DDBDocumentClient.send(command);
    }

    return cacheResponse;
}

/**
 * A wrapper type for the DynamoDB responses from refreshing the cache.
 */
export type CacheRefreshResponse = {
    task: UpdateCommandOutput;
    project: UpdateCommandOutput;
    user: UpdateCommandOutput;
};
