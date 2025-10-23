import { getTaskProperties, returnTasks, searchDB } from "./db-search";
import {
  task_in_db,
  task_in_db_reworded,
  task_not_in_db,
  task_feed_cats,
} from "../test-data/tasks/example-tasks";
import { dbPageList } from "../test-data/payloads/dbPage-list";
import { dbSearchResult, filterSimilar } from "./db-search";
import { Task } from "./task";
import { JsonPatchError } from "@langchain/core/dist/utils/fast-json-patch";
import { GetPageResponse } from "@notionhq/client";

const task: Task = {
  taskTitle: "Test Task 1",
  assignees: [
    {
      name: "Ceci Kurdelak",
      email: "crkurdelak@gmail.com",
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

describe("Tests filterSimilar", () => {
  it("Returns all pages related to feeding cats", () => {
    const similarPages = filterSimilar(dbPageList, "add Tuxedo Mask, feed all the cats every day and give them water");
    expect(similarPages).toContainEqual({
        "pageId": "292eef29-a653-8162-8016-e45dc2a99627",
        "taskTitle": "Feed the cats",
        "description": "Feed the cats today",
        "assignee": [
            {
                "name": "Ceci Kurdelak",
                "email": "ceci.kurdelak@solutional.com",
                // "userId": "152d872b-594c-8145-9c2c-000204787b69"
            }
        ]
    });
    expect(similarPages).toContainEqual({
        "pageId": "293eef29-a653-8149-9b79-e9f176fc263a",
        "taskTitle": "Feed the cats daily",
        "description": "Feed the cats every day from November 1 to November 7. Give them their pills and ensure they have enough clean water.",
        "assignee": []
    });
    expect(similarPages).toContainEqual({
        "pageId": "293eef29-a653-81f1-96f0-ef9fa9cdfae3",
        "taskTitle": "Feed the cats",
        "description": "Feed the cats until next Monday. Make sure to give them their pills and that they have enough clean water.",
        "assignee": [
            {
                "name": "Harvey Kisiangani",
                "email": "harveykisiangani@gmail.com",
                // "userId": "1e0d872b-594c-81e5-be86-000260493812"
            }
        ]
    });

  })

  it("Returns only the pages most similar to the message", () => {
    const similarPages = filterSimilar(dbPageList, "Within the next week, please fatigue and stress test the section 34 fuselage.");
    expect(similarPages).toContainEqual({
        "pageId": "293eef29-a653-8121-b265-cc85667429cb",
        "taskTitle": "Test section 34 fuselage for fatigue and stresses",
        "description": "Test the section 34 fuselage for fatigue and other stresses. The task should be completed within one week.",
        "assignee": []
    },);
  })

  it("Returns the task that mentions preparing something sweet for tomorrow's dinner", () => {
    const similarPages = filterSimilar(dbPageList, "add Prepare a sweet dessert for the dinner party by tomorrow");
    expect(similarPages).toContainEqual({
        "pageId": "292eef29-a653-8127-9532-c1f31fd42614",
        "taskTitle": "Feed the emu and prepare for dinner",
        "description": "Feed the emu and ensure she has enough water. Also, prepare something sweet for tomorrow's dinner.",
        "assignee": [
            {
                "name": "Harvey Kisiangani",
                "email": "harveykisiangani@gmail.com",
                // "userId": "1e0d872b-594c-81e5-be86-000260493812"
            }
        ]
    },);
  })

  it("Returns the task about the oldest aircraft in the fleet, the task about feeding the cats daily and giving them water, and the task that mentions Tuxedo Mask", () => {
    const similarPages = filterSimilar(dbPageList, "add help crkurdelak feed the oldest cat in the fleet daily and give them clean water. Also, do not kill Tuxedo Mask");
    expect(similarPages).toContainEqual({
        "pageId": "293eef29-a653-81d9-bf8e-fa797d755368",
        "taskTitle": "Fix left engine of oldest F22",
        "description": "Help crkurdelak fix the left engine of the oldest F22 aircraft in the fleet.",
        "assignee": [
            {
                "name": "Harvey Kisiangani",
                "email": "harveykisiangani@gmail.com",
                // "userId": "1e0d872b-594c-81e5-be86-000260493812"
            }
        ]
    },);
    expect(similarPages).toContainEqual({
        "pageId": "293eef29-a653-8149-9b79-e9f176fc263a",
        "taskTitle": "Feed the cats daily",
        "description": "Feed the cats every day from November 1 to November 7. Give them their pills and ensure they have enough clean water.",
        "assignee": []
    },);
    expect(similarPages).toContainEqual({
        "pageId": "292eef29-a653-81a8-a447-cb5911081740",
        "taskTitle": "Get rainbow crystals from Tuxedo Mask",
        "description": "Retrieve the last rainbow crystals from Tuxedo Mask without killing him. This task is considered a threat.",
        "assignee": []
    },);
  })
})

describe("Test searchDB in the new test database", () => {
  it("", async () => {
    // const response = await returnTasks();
    // console.log(JSON.stringify(response));

    const searchResult = await searchDB("add Harvey, please fix the fire hydrant pump and ladder mechanism within the next 5 working days. Call the office when you're done");
    console.log(`search result: ${JSON.stringify(searchResult)}`);
    expect(searchResult.exists).toBeDefined();
    expect(searchResult.taskId).toBeDefined();
    expect(searchResult.exists).toEqual(true);
  });
});

describe("Get page response from db", () => {
  it("", async () => {
    const isInDatabase = {
      exists: true,
      taskId: "263eef29-a653-80d0-a0b6-c62e827e0fb5",
    };
    const pageObject: GetPageResponse = await getTaskProperties(
      isInDatabase.taskId || "",
    );
    console.log(JSON.stringify(pageObject));
  });
});

// describe("Test searchDB with a task that is already in the database word for word", () => {
//   it("returns true and the task ID from the database", async () => {
//     const searchResult = await searchDB(task_in_db);
//     console.log(`search result: ${JSON.stringify(searchResult)}`);
//     expect(searchResult.exists).toBeDefined();
//     expect(searchResult.taskId).toBeDefined();
//     expect(searchResult.exists).toEqual(true);
//   });
// });

// describe("Test searchDB with a task that is already in the database, but worded slightly differently", () => {
//   it("returns true and the task ID from the database", async () => {
//     const searchResult = await searchDB(task_in_db_reworded);
//     console.log(`search result: ${JSON.stringify(searchResult)}`);
//     expect(searchResult.exists).toBeDefined();
//     expect(searchResult.taskId).toBeDefined();
//     expect(searchResult.exists).toEqual(true);
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
