import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import {
  extractCacheData,
  extractCacheItemData,
  retrieveCache,
} from "../../utils/database/getFromCache";
import {
  getExampleRawCacheResponse,
  getExampleCompressedData,
} from "../../test-data/cache/cacheResponse";
import { EXAMPLE_RAW_USERS_RESPONSE } from "../../test-data/cache/rawUsers";
import { EXAMPLE_RAW_PROJECTS_RESPONSE } from "../../test-data/cache/rawProjects";
import { EXAMPLE_RAW_TASKS_RESPONSE } from "../../test-data/cache/rawTasks";
import {
  CACHE_DATA_EXAMPLE_ALL,
  CACHE_DATA_EXAMPLE_NO_PROJECTS,
  CACHE_DATA_EXAMPLE_NO_TASKS,
  CACHE_DATA_EXAMPLE_NO_USERS,
} from "../../test-data/cache/cacheItems";

// Mock the environment variables
jest.mock("../../env", () => ({
  // This is the cache table name used in the example data
  CACHE_TABLE_NAME: "projectagent-cache-dev",
}));

const fakeCacheClient: DynamoDBDocumentClient = {
  send: jest.fn(async () => getExampleRawCacheResponse(true, true, true)),
} as unknown as DynamoDBDocumentClient;

describe("Tests retrieveCache", () => {
  it("Should return all cache data", async () => {
    const cacheItems = await retrieveCache(fakeCacheClient);

    expect(cacheItems.projects).toBeTruthy();
    expect(cacheItems.tasks).toBeTruthy();
    expect(cacheItems.users).toBeTruthy();
    expect(cacheItems).toMatchObject(CACHE_DATA_EXAMPLE_ALL);
  });
});

describe("Tests extractCacheItemData", () => {
  it("Should return the correctly decompressed user data", async () => {
    const decompressed = await extractCacheItemData(
      await getExampleCompressedData("user"),
    );
    expect(decompressed).toMatchObject(EXAMPLE_RAW_USERS_RESPONSE);
  });

  it("Should return the correctly decompressed project data", async () => {
    const decompressed = await extractCacheItemData(
      await getExampleCompressedData("project"),
    );
    expect(decompressed).toMatchObject(EXAMPLE_RAW_PROJECTS_RESPONSE);
  });

  it("Should return the correctly decompressed task data", async () => {
    const decompressed = await extractCacheItemData(
      await getExampleCompressedData("task"),
    );
    expect(decompressed).toMatchObject(EXAMPLE_RAW_TASKS_RESPONSE);
  });

  it("Should return null when given undefined", async () => {
    const decompressed = await extractCacheItemData(undefined);
    expect(decompressed).toBeFalsy();
  });
});

describe("Tests extractCacheData", () => {
  it("Should return all the cache data, correctly decompressed", async () => {
    const cacheDataExampleAll = await getExampleRawCacheResponse(
      true,
      true,
      true,
    );
    const decompressed = await extractCacheData(cacheDataExampleAll);

    expect(decompressed.projects).toBeTruthy();
    expect(decompressed.tasks).toBeTruthy();
    expect(decompressed.users).toBeTruthy();
    expect(decompressed).toMatchObject(CACHE_DATA_EXAMPLE_ALL);
  });

  it("Should return all project and task data, correctly decompressed", async () => {
    const cacheDataExampleNoUsers = await getExampleRawCacheResponse(
      false,
      true,
      true,
    );
    const decompressed = await extractCacheData(cacheDataExampleNoUsers);

    expect(decompressed.projects).toBeTruthy();
    expect(decompressed.tasks).toBeTruthy();
    expect(decompressed.users).toBeFalsy();
    expect(decompressed).toMatchObject(CACHE_DATA_EXAMPLE_NO_USERS);
  });

  it("Should return all project and user data, correctly decompressed", async () => {
    const cacheDataExampleNoTasks = await getExampleRawCacheResponse(
      true,
      false,
      true,
    );
    const decompressed = await extractCacheData(cacheDataExampleNoTasks);

    expect(decompressed.projects).toBeTruthy();
    expect(decompressed.tasks).toBeFalsy();
    expect(decompressed.users).toBeTruthy();
    expect(decompressed).toMatchObject(CACHE_DATA_EXAMPLE_NO_TASKS);
  });

  it("Should return all user and task data, correctly decompressed", async () => {
    const cacheDataExampleNoProjects = await getExampleRawCacheResponse(
      true,
      true,
      false,
    );
    const decompressed = await extractCacheData(cacheDataExampleNoProjects);

    expect(decompressed.projects).toBeFalsy();
    expect(decompressed.tasks).toBeTruthy();
    expect(decompressed.users).toBeTruthy();
    expect(decompressed).toMatchObject(CACHE_DATA_EXAMPLE_NO_PROJECTS);
  });
});
