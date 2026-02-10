import { createCacheClient, retrieveCache } from "./getFromCache";

describe("Tests retrieveCache", () => {
    it("Should return all cache data", async () => {
        // TODO mock client
        const client = createCacheClient();
        const cacheItems = await retrieveCache(client);

        throw new Error("not implemented");
    })
})
