import { createMultiSelectionsBlock, createSelectionBlock } from "./create_select";
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
  });*/
  it("Should run createSelection smoothly", async () => {  
    await testPostToSlack(eventResURL, createSelectionBlock(taskNoAssignee, "Project(s)", [
            { userId: "philing good", name: "Phil", email: "philippians2@gmail.com" },
            { userId: "bond!jamesBond-007", name: "James", email: "james1:5" },
            { userId: "youaremine", name: "You", email: "youandi@yahoo.com" },
            { userId: "Me", name: "metoo", email: "meornottome@outlook.com" },
            { userId: "abbycd>?sa7039", name: "Abyyy", email: "" }
          ] ));
  });
/*
  it("shoould not err", async () => {
    await testPostToSlack(eventResURL, createMultiSelectionsBlock(taskNoAssignee,
      ["Phil", "James", "You", "Me", "Abyyy"], ["No Project"]))
  });
  */
})
