import { searchDB } from "./db-search";
import {
  task_in_db,
  task_in_db_reworded,
  task_not_in_db,
  task_feed_cats
} from "../test-data/tasks/example-tasks";
import { dbSearchResult } from "./db-search";

describe("Test searchDB with a task that is already in the database word for word", () => {
  it("returns true and the task ID from the database", async () => {
    const searchResult = await searchDB(task_in_db);
    console.log(`search result: ${JSON.stringify(searchResult)}`);
    expect(searchResult.exists).toBeDefined();
    expect(searchResult.taskId).toBeDefined();
    expect(searchResult.exists).toEqual(true);
    // TODO check the id to make sure it's correct
  });
});

describe("Test searchDB with a task that is already in the database, but worded slightly differently", () => {
  it("returns true and the task ID from the database", async () => {
    const searchResult = await searchDB(task_in_db_reworded);
    console.log(`search result: ${JSON.stringify(searchResult)}`);
    expect(searchResult.exists).toBeDefined();
    expect(searchResult.taskId).toBeDefined();
    expect(searchResult.exists).toEqual(true);
    // TODO check the id to make sure it's correct
  });
});

describe("Test searchDB with a task that is not in the database", () => {
  it("returns false", async () => {
    const searchResult = await searchDB(task_not_in_db);
    console.log(`search result: ${JSON.stringify(searchResult)}`);
    expect(searchResult.exists).toBeDefined();
    expect(searchResult.exists).toEqual(false);
  });
});

describe("Test searchDB with the task that used to break on production", () => {
  it("returns true", async () => {
    const searchResult = await searchDB(task_feed_cats);
    console.log(`search result: ${JSON.stringify(searchResult)}`);
    expect(searchResult.exists).toBeDefined();
    expect(searchResult.taskId).toBeDefined();
    expect(searchResult.exists).toEqual(true);
  });
});
