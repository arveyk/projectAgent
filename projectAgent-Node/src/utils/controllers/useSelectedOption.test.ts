import { 
  EXAMPLE_USER_AND_PROJECT_SELECTED,
  UNPROCESSED_SAMPLE_PAYLOAD,
  EXAMPLE_ONLY_PROJECT_SELECTED
} from "../../test-data/example-selections-payload";
import { integrateSelectedValues } from "./useSelectedOption";
import { TaskPage, ProjectWithName } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";


const payload = EXAMPLE_USER_AND_PROJECT_SELECTED.payload;
const payload_01 = JSON.parse(UNPROCESSED_SAMPLE_PAYLOAD.payload);
const payload_02 = JSON.parse(EXAMPLE_ONLY_PROJECT_SELECTED.payload);
describe("Run payload Extraction and use values", () => {
  it("Shouls extract users's selections", () => {
    // console.log(payload, payload_01);

    const taskPageAndOptionsObject: {
        taskPageObject: TaskPage;
        userOptions: NotionUser[];
        projectOptions: ProjectWithName[]
      } = JSON.parse(payload["actions"][0].value || "{}");

    const taskPageObject = taskPageAndOptionsObject.taskPageObject;
    const userSelection = taskPageAndOptionsObject.userOptions;
    const projects = taskPageAndOptionsObject.projectOptions;

    const task = integrateSelectedValues(taskPageObject.task, userSelection, projects, payload)
    console.log(task);
  }),
  it("Shouls extract users's selections", () => {
    // console.log(payload, payload_01);

    const taskPageAndOptionsObject: {
        taskPageObject: TaskPage;
        userOptions: NotionUser[];
        projectOptions: ProjectWithName[]
      } = JSON.parse(payload_02["actions"][0].value || "{}");

    const taskPageObject = taskPageAndOptionsObject.taskPageObject;
    const userSelection = taskPageAndOptionsObject.userOptions;
    const projects = taskPageAndOptionsObject.projectOptions;

    const task = integrateSelectedValues(taskPageObject.task, userSelection, projects, payload)
    console.log(task);
  })
})


