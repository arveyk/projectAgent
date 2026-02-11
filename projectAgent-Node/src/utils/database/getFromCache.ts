import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, BatchGetCommand, BatchGetCommandOutput } from "@aws-sdk/lib-dynamodb";
import zlib from 'zlib';
import { promisify } from 'util';
import { CACHE_TABLE_NAME, REGION } from "../../env";
import { ListUsersResponse, QueryDataSourceResponse } from "@notionhq/client";

// Convert callback-based functions to promise-based
const gunzipPromise = promisify(zlib.gunzip);

/**
 * Creates a DynamoDBDocumentClient for retrieving items from the cache.
 * @returns A DynamoDBDocumentClient for retrieving items from the cache.
 */
export function createCacheClient(): DynamoDBDocumentClient {
    const DDBClient: DynamoDBClient = new DynamoDBClient({ region: REGION });
    const DDBDocumentClient: DynamoDBDocumentClient =
        DynamoDBDocumentClient.from(DDBClient);
    return DDBDocumentClient;
}

/**
 * Retrieves all data from the cache.
 * @param client The client that accesses the cache in DynamoDB.
 * @returns All data from the cache.
 */
export async function retrieveCache(client: DynamoDBDocumentClient): Promise<CacheData> {
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

    const batchGetResponse = await client.send(getCommand);
    const cacheData: CacheData = await extractCacheData(batchGetResponse);
    return cacheData;
}

/**
 * Extracts the cache data from a DynamoDB batch response.
 * @param batchGetResponse A DynamoDB batch response from the cache.
 * @returns The extracted and decompressed cache data.
 */
export async function extractCacheData(batchGetResponse: BatchGetCommandOutput): Promise<CacheData> {
    const responses = batchGetResponse.Responses;
    if (!responses) {
        throw new Error("Couldn't fetch cache items");
    }

    const cacheItems = responses["projectagent-cache-dev"];

    const projectsRecord = cacheItems.find(item => item["ItemType"] === "project");
    const tasksRecord = cacheItems.find(item => item["ItemType"] === "task");
    const usersRecord = cacheItems.find(item => item["ItemType"] === "user");

    const projects: QueryDataSourceResponse["results"] | ListUsersResponse = await extractCacheItemData(projectsRecord);
    const tasks: QueryDataSourceResponse["results"] | ListUsersResponse = await extractCacheItemData(tasksRecord);
    const users: QueryDataSourceResponse["results"] | ListUsersResponse = await extractCacheItemData(usersRecord);

    if (projects && !Array.isArray(projects)) {
        throw new Error("Object 'projects' is the wrong type");
    }
    if ( tasks && !Array.isArray(tasks)) {
        throw new Error("Object 'tasks' is the wrong type");
    }
    if (Array.isArray(users)) {
        throw new Error("Object 'users' is the wrong type");
    }

    return {
        projects: projects,
        tasks: tasks,
        users: users
    };
}

/**
 * Decompresses the data of a cache item using gunzip.
 * @param itemRecord A cache entry.
 * @returns The decompressed data of the cache item.
 */
export async function extractCacheItemData(itemRecord: Record<string, any> | undefined) {
    const itemCompressed: Buffer<ArrayBuffer> | null = itemRecord ? itemRecord["RawResponse"] : null;

    const itemData: QueryDataSourceResponse["results"] | ListUsersResponse = itemCompressed ? JSON.parse((await gunzipPromise(itemCompressed)).toString()) : null;
    return itemData;
}

/**
 * A type representing the data stored in the cache.
 */
export type CacheData = {
    projects: QueryDataSourceResponse["results"] | null,
    tasks: QueryDataSourceResponse["results"] | null,
    users: ListUsersResponse | null
}
