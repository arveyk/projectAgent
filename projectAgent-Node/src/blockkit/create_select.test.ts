import {
  createMultiSelectionsBlock,
  createSelectionBlock,
} from "./create_select";
import { createSelectionBlock as createSBColumnLayout } from "./create_select_columnlayout";
// import { describe, it } from "@jest/global";
import { testPostToSlack } from "../otherFiles/postMessageSlack";
import { taskNoAssignee } from "../test-data/tasks/example-tasks";

describe("RUn without issue", () => {
  const eventResURL = "https://slack.com/api/chat.postMessage";
  /*it("Should run", () => {
    console.log(JSON.stringify(createMultiSelectionsBlock(
      ["iss"],
      ["Project1", "Project2"])))
  });

  /*it("Should run with test2", () => {
    console.log(JSON.stringify(conciseCreateSelectionBlock(test2[0], test2[1])));
  });
  it("Should run with test3", () => {
    console.log(JSON.stringify(conciseCreateSelectionBlock(test3[0], test3[1])));
  });
  it("Should run with test4", () => {
    console.log(JSON.stringify(conciseCreateSelectionBlock(test4[0], test4[1])));
  });
  it("Should run with test0", () => {
    let empty = createMultiSelectionsBlock([], []);

    console.log(JSON.stringify(empty));
  })
  it("Should run with test00", async () => {  
    await testPostToSlack(eventResURL, createMultiSelectionsBlock(["JIUsbds", "Iodshs"], ["Project0", "Project1", "Project clear", "Anime", "Writter"]));
  });
  it("Should run createSelection smoothly", async () => {
    await testPostToSlack(
      eventResURL,
      createSelectionBlock(taskNoAssignee, "Project", [
        {
          userId: "philing good",
          name: "Phil",
          email: "philippians2@gmail.com",
        },
        { userId: "bond!jamesBond-007", name: "James", email: "james1:5" },
        { userId: "youaremine", name: "You", email: "youandi@yahoo.com" },
        { userId: "Me", name: "tome", email: "to-me-or-not-to-me@outlook.com" },
        { userId: "abbycd>?sa7039", name: "Abyyy", email: "" },
      ]),
    );
  }),*/
    it("just runs Creating block", async () => {
      await testPostToSlack(eventResURL, createSBColumnLayout(taskNoAssignee, "users",
      {
          identifiedUsers: [
            {
              "userId": "152d872b-594c-8145-9c2c-000204787b69",
              "name": "Ceci Kurdelak",
              "email": "ceci.kurdelak@solutional.com"
            }]
          ,
          ambiguousUsers: [
            {
              "userId": "136d872b-594c-817b-adaa-00026796be69",
              "name": "James Dirksen",
              "email": "james.dirksen@solutional.com"
            },
            {
              "userId": "13dd872b-594c-810f-8bb4-000282e27820",
              "name": "Daniel Dirksen",
              "email": "daniel.dirksen@solutional.com"
            }
          ]
        }))
    });
});
