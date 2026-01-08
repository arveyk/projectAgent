import {
  filterSimilar,
} from "./searchDatabase";
import { SIMPLIFIED_DB_PAGES } from "../../test-data/simplifiedDbPages"

describe("Tests filterSimilar on the message 'Harvey, please rake the leaves'", () => {
  it("Should find both tasks that involve raking", () => {
    const message = "Harvey, please rake the leaves";
    const similarPages = filterSimilar(SIMPLIFIED_DB_PAGES, message);
    console.log(JSON.stringify(similarPages), similarPages.length);

    // "rake the leaves" task
    const RAKE_LEAVES_ID = "2d9eef29-a653-81b3-aedb-f37251d2c72e";
    expect(similarPages).toContain(similarPages.find(page => page.pageId === RAKE_LEAVES_ID));
    // "rake the lawn" task
    const RAKE_LAWN_ID = "2d8eef29-a653-8143-81f8-d5ae3a046036";
    expect(similarPages).toContain(similarPages.find(page => page.pageId === RAKE_LAWN_ID));
  })
})
