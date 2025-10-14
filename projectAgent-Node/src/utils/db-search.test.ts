import { getTaskProperties, returnTasks, searchDB } from "./db-search";
import {
  task_in_db,
  task_in_db_reworded,
  task_not_in_db,
  task_feed_cats,
} from "../test-data/tasks/example-tasks";
import { dbSearchResult } from "./db-search";
import { Task } from "./task";
import { JsonPatchError } from "@langchain/core/dist/utils/fast-json-patch";
import { GetPageResponse } from "@notionhq/client";

const task: Task = {
  taskTitle: "Test Task 1",
  assignees: [
    {
      name: "Ceci Kurdelak",
      email: "crkurdelak@gmail.com"
    },
    // {
    //   name: "Harvey Kisiangani",
    //   email: "harveykisiangani@gmail.com"
    // }
],
  dueDate: new Date("2025-09-20"),
  startDate: new Date("2025-11-01"),
  description:
    "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
};

describe("Test searchDB in the new test database", () => {
  it("", async () => {
    // const response = await returnTasks();
    // console.log(JSON.stringify(response));

    const searchResult = await searchDB(task);
    console.log(`search result: ${JSON.stringify(searchResult)}`);
    expect(searchResult.exists).toBeDefined();
    expect(searchResult.taskId).toBeDefined();
    expect(searchResult.exists).toEqual(true);
    // TODO check the id to make sure it's correct
  });
});

describe("Get page response from db", () => {
  it("", async () => {
    const isInDatabase = {"exists":true,"taskId":"263eef29-a653-80d0-a0b6-c62e827e0fb5"}
    const pageObject: GetPageResponse = await getTaskProperties(
              isInDatabase.taskId || "",
            );
    console.log(JSON.stringify(pageObject));
  })
})


// describe("Test searchDB with a task that is already in the database word for word", () => {
//   it("returns true and the task ID from the database", async () => {
//     const searchResult = await searchDB(task_in_db);
//     console.log(`search result: ${JSON.stringify(searchResult)}`);
//     expect(searchResult.exists).toBeDefined();
//     expect(searchResult.taskId).toBeDefined();
//     expect(searchResult.exists).toEqual(true);
//     // TODO check the id to make sure it's correct
//   });
// });

// describe("Test searchDB with a task that is already in the database, but worded slightly differently", () => {
//   it("returns true and the task ID from the database", async () => {
//     const searchResult = await searchDB(task_in_db_reworded);
//     console.log(`search result: ${JSON.stringify(searchResult)}`);
//     expect(searchResult.exists).toBeDefined();
//     expect(searchResult.taskId).toBeDefined();
//     expect(searchResult.exists).toEqual(true);
//     // TODO check the id to make sure it's correct
//   });
// });

// describe("Test searchDB with a task that is not in the database", () => {
//   it("returns false", async () => {
//     const searchResult = await searchDB(task_not_in_db);
//     console.log(`search result: ${JSON.stringify(searchResult)}`);
//     expect(searchResult.exists).toBeDefined();
//     expect(searchResult.exists).toEqual(false);
//   });
// });

// describe("Test searchDB with the task that used to break on production", () => {
//   it("returns true", async () => {
//     const searchResult = await searchDB(task_feed_cats);
//     console.log(`search result: ${JSON.stringify(searchResult)}`);
//     expect(searchResult.exists).toBeDefined();
//     expect(searchResult.taskId).toBeDefined();
//     expect(searchResult.exists).toEqual(true);
//   });
// });
