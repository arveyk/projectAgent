import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { retrieveCache } from "./getFromCache";
import { EXAMPLE_RAW_CACHE_RESPONSE } from "../../test-data/cache/cacheResponse";

const fakeCacheClient = {
    send: jest.fn(() => Promise.resolve(EXAMPLE_RAW_CACHE_RESPONSE)),
} as unknown as DynamoDBDocumentClient;

describe("Tests retrieveCache", () => {
    it("Should return all cache data", async () => {
        const cacheItems = await retrieveCache(fakeCacheClient);
        console.log(JSON.stringify(cacheItems));

        // TODO fix "incorrect header check" error when mocking API call
        throw new Error("not implemented");
    })
})

// TODO make more specific unit test for extractCacheItemData
