import { filterSimilar, getTasksRaw } from "./searchDatabase";
import { SIMPLIFIED_DB_PAGES } from "../../test-data/simplifiedDbPages";
import { isFullPage } from "@notionhq/client";
import { simplifyTaskPages } from "./simplifyTaskPages";

describe("Tests filterSimilar on the message 'Harvey, please rake the leaves'", () => {
  it("Should find both tasks that involve raking", () => {
    const message = "Harvey, please rake the leaves";
    const similarPages = filterSimilar(SIMPLIFIED_DB_PAGES, message);
    console.log(`Number of pages in db: ${SIMPLIFIED_DB_PAGES.length}`);
    console.log(`Similar tasks found: ${similarPages.length}`);

    // "rake the leaves" task
    const RAKE_LEAVES_ID = "2d9eef29-a653-81b3-aedb-f37251d2c72e";
    expect(similarPages).toContain(
      similarPages.find((page) => page.pageId === RAKE_LEAVES_ID),
    );
    // "rake the lawn" task
    const RAKE_LAWN_ID = "2d8eef29-a653-8143-81f8-d5ae3a046036";
    expect(similarPages).toContain(
      similarPages.find((page) => page.pageId === RAKE_LAWN_ID),
    );
  });
});

describe("Tests filterSimilar on the message 'Find the cats in the dev environment'", () => {
  it("Should find all tasks involving cats or dev environments", () => {
    const message = "Find the cats in the dev environment";
    const similarPages = filterSimilar(SIMPLIFIED_DB_PAGES, message);
    console.log(`Number of pages in db: ${SIMPLIFIED_DB_PAGES.length}`);
    console.log(`Similar tasks found: ${similarPages.length}`);

    const FEED_ANIMALS_ID = "2d8eef29-a653-815d-aafe-eb9dfe38a88d";
    expect(similarPages).toContain(
      similarPages.find((page) => page.pageId === FEED_ANIMALS_ID),
    );
    const FEED_CAT_ID = "2e0eef29-a653-817d-9689-f8d338025ab4";
    expect(similarPages).toContain(
      similarPages.find((page) => page.pageId === FEED_CAT_ID),
    );
    const FEED_CATS_DOG_FOOD_ID = "2e0eef29-a653-81a4-84cb-d512772d0b30";
    expect(similarPages).toContain(
      similarPages.find((page) => page.pageId === FEED_CATS_DOG_FOOD_ID),
    );
    const PET_CATS_ID = "2e0eef29-a653-81b1-b6db-ca7af7a44081";
    expect(similarPages).toContain(
      similarPages.find((page) => page.pageId === PET_CATS_ID),
    );
    const FEED_CATS_TWICE_A_DAY_ID = "2e2eef29-a653-81b8-a569-e79f565fffee";
    expect(similarPages).toContain(
      similarPages.find((page) => page.pageId === FEED_CATS_TWICE_A_DAY_ID),
    );
    const SET_UP_NEW_DEV_ENVIRONMENT_ID =
      "2e1eef29-a653-815d-b9f9-de045fd62cdd";
    expect(similarPages).toContain(
      similarPages.find(
        (page) => page.pageId === SET_UP_NEW_DEV_ENVIRONMENT_ID,
      ),
    );
  });
});

describe("Tests filterSimilar on the message 'Josh, row the new boat'", () => {
  it("Should find all tasks that involve rowing boats", () => {
    const message = "Josh, row the new boat";
    const similarPages = filterSimilar(SIMPLIFIED_DB_PAGES, message);
    console.log(`Number of pages in db: ${SIMPLIFIED_DB_PAGES.length}`);
    console.log(`Similar tasks found: ${similarPages.length}`);

    const ROW_BOAT_ID = "2d8eef29-a653-81c8-b669-c41dddaf1756";
    expect(similarPages).toContain(
      similarPages.find((page) => page.pageId === ROW_BOAT_ID),
    );
  });
});

describe("Tests getTasksRaw with the new property filters", () => {
  it("Should return a non-empty list of tasks", async () => {
    const rawTasks = await getTasksRaw();
    expect(rawTasks.length).toBeGreaterThan(0);
    console.log(rawTasks.map((result) => isFullPage(result)));
    console.log(rawTasks.length);
    console.log(JSON.stringify(rawTasks[0]));

    const tasks = simplifyTaskPages(rawTasks);
    expect(tasks.length).toEqual(rawTasks.length);
  });
});
