import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import {
  extractCacheData,
  extractCacheItemData,
  retrieveCache,
} from "./getFromCache";
import {
  EXAMPLE_RAW_CACHE_RESPONSE_ALL,
  EXAMPLE_COMPRESSED_USER_DATA,
  EXAMPLE_COMPRESSED_PROJECT_DATA,
  EXAMPLE_COMPRESSED_TASKS_DATA,
  EXAMPLE_RAW_CACHE_RESPONSE_NO_USERS,
  EXAMPLE_RAW_CACHE_RESPONSE_NO_TASKS,
  EXAMPLE_RAW_CACHE_RESPONSE_NO_PROJECTS,
} from "../../test-data/cache/cacheResponse";
import { EXAMPLE_RAW_USERS_RESPONSE } from "../../test-data/cache/rawUsers";
import { EXAMPLE_RAW_PROJECTS_RESPONSE } from "../../test-data/cache/rawProjects";
import { EXAMPLE_RAW_TASKS_RESPONSE } from "../../test-data/cache/rawTasks";
import { CACHE_DATA_EXAMPLE_ALL, CACHE_DATA_EXAMPLE_NO_PROJECTS, CACHE_DATA_EXAMPLE_NO_TASKS, CACHE_DATA_EXAMPLE_NO_USERS } from "../../test-data/cache/cacheItems";

const fakeCacheClient = {
  send: jest.fn(() => Promise.resolve(EXAMPLE_RAW_CACHE_RESPONSE_ALL)),
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
      EXAMPLE_COMPRESSED_USER_DATA,
    );
    expect(decompressed).toMatchObject(EXAMPLE_RAW_USERS_RESPONSE);
  });

  it("Should return the correctly decompressed project data", async () => {
    const decompressed = await extractCacheItemData(
      EXAMPLE_COMPRESSED_PROJECT_DATA,
    );
    expect(decompressed).toMatchObject(EXAMPLE_RAW_PROJECTS_RESPONSE);
  });

  it("Should return the correctly decompressed task data", async () => {
    const decompressed = await extractCacheItemData(
      EXAMPLE_COMPRESSED_TASKS_DATA,
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
    const decompressed = await extractCacheData(EXAMPLE_RAW_CACHE_RESPONSE_ALL);

    expect(decompressed.projects).toBeTruthy();
    expect(decompressed.tasks).toBeTruthy();
    expect(decompressed.users).toBeTruthy();
    expect(decompressed).toMatchObject(CACHE_DATA_EXAMPLE_ALL);
  });

  it("Should return all project and task data, correctly decompressed", async () => {
    const decompressed = await extractCacheData(
      EXAMPLE_RAW_CACHE_RESPONSE_NO_USERS,
    );

    expect(decompressed.projects).toBeTruthy();
    expect(decompressed.tasks).toBeTruthy();
    expect(decompressed.users).toBeFalsy();
    expect(decompressed).toMatchObject(CACHE_DATA_EXAMPLE_NO_USERS);
  });

  it("Should return all project and user data, correctly decompressed", async () => {
    const decompressed = await extractCacheData(
      EXAMPLE_RAW_CACHE_RESPONSE_NO_TASKS,
    );

    expect(decompressed.projects).toBeTruthy();
    expect(decompressed.tasks).toBeFalsy();
    expect(decompressed.users).toBeTruthy();
    expect(decompressed).toMatchObject(CACHE_DATA_EXAMPLE_NO_TASKS);
  });

  it("Should return all user and task data, correctly decompressed", async () => {
    const decompressed = await extractCacheData(
      EXAMPLE_RAW_CACHE_RESPONSE_NO_PROJECTS,
    );

    expect(decompressed.projects).toBeFalsy();
    expect(decompressed.tasks).toBeTruthy();
    expect(decompressed.users).toBeTruthy();
    expect(decompressed).toMatchObject(CACHE_DATA_EXAMPLE_NO_PROJECTS);
  });
});
