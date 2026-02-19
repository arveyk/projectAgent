import { filterDoneAndArchivedTasks, simplifyTaskPage, simplifyTaskPages } from "./simplifyTaskPages";
import { EXAMPLE_RAW_TASKS_RESPONSE } from "../../test-data/cache/rawTasks";



describe("Test it this function filters out tasks as required", () => {
  it("Should filter out done tasks", () => {
    const unFilteredTasks = EXAMPLE_RAW_TASKS_RESPONSE;
    const activeTasks = filterDoneAndArchivedTasks(unFilteredTasks);
    expect(unFilteredTasks.length).toBeGreaterThan(activeTasks.length);

    const simplifiedUnfilteredTasks = simplifyTaskPages(unFilteredTasks);
    const simplifiedActiveTasks = simplifyTaskPages(activeTasks);

    console.log(JSON.stringify(simplifiedUnfilteredTasks.length));

    console.log(JSON.stringify(simplifiedActiveTasks.length));

        
    expect(simplifiedActiveTasks).toBeDefined();
    expect(simplifiedActiveTasks.find((task) => {
      return task.taskTitle === "Create a new type of carbon vanadium composite";
    })).toBeFalsy();

    expect(simplifiedActiveTasks.find((task) => {
      return task.taskTitle === "Create portraits of every cat in the world";
    },
    )).toBeFalsy();

    const statusEqualsNotStarted = simplifiedActiveTasks.find((task) => {
      return task.taskTitle === "Pet every cat and take cat photos"
    });
    const statusEqualsInProgress = simplifiedActiveTasks.find((task) => {
      return task.taskTitle === "Add finishing touches to the portrait";
    });

    expect(statusEqualsNotStarted).toBeTruthy();
    expect(statusEqualsInProgress).toBeTruthy();

  });
});