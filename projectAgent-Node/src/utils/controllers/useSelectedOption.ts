import { NotionTask, ProjectWithName } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";

type SelectionOption = {
  text: {
    type: "plain_text";
    text: string; //  "*Harvey Kis --- harvey.kis@example.com*",
    emoji: boolean;
  };
  value: string; //  "1"
};

/**
 * Integrated selected users into the assignee field
 * @param assignees:      assignees allready in task
 * @param selectedValues: what the user selected
 * @param allDisplayedAssigneeOptions: options the app user had to select from
 *
 * @returns               all assingees, both from task
 */
export function integrateUserSelections(
  assignees: NotionUser[],
  selectedValues: SelectionOption[],
  allDisplayedAssigneeOptions: NotionUser[],
) {
  const allAssignees: NotionUser[] = [...assignees];
  if (selectedValues.length < 1) {
    return [];
  }

  for (const selectedOption of selectedValues) {
    console.log(parseInt(selectedOption["value"]));
    const index = parseInt(selectedOption["value"]);
    if (isNaN(index)) {
      throw new Error("(integrateUserSelections): index value is Not a Number");
    }
    allAssignees.push(allDisplayedAssigneeOptions[index]);
  }
  return allAssignees;
}

/**
 * Function to integrate selected projects into the existing task projects
 * @param projects:           Projects from task
 * @param selectedValues:     selected projects Values
 * @param allDisplayedProjectOptions:  all project options the user had to select from
 *
 * @returns:                  projects from task plus projects the app user selected
 */
export function integrateSelectedProjects(
  projects: { id: string }[],
  selectedValues: SelectionOption[],
  allDisplayedProjectOptions: ProjectWithName[],
) {
  const allProjects: { id: string }[] = [...projects];

  if (selectedValues.length < 1) {
    return allProjects;
  }

  for (const selectedOption of selectedValues) {
    console.log(parseInt(selectedOption["value"]));
    const index = parseInt(selectedOption["value"].replace("Project_", ""));
    if (isNaN(index)) {
      throw new Error("(integrateSelectedProjects): index value is Not a Number");
    }
    if (
      allProjects.find((element) => allDisplayedProjectOptions[index].id === element.id)
    )
      continue;
    allProjects.push({ id: allDisplayedProjectOptions[index].id });
  }
  return allProjects;
}

/**
 * Takes what the user on slack selected and integrates them into the task to be created
 * @param notionTask:       task add the user's selections
 * @param userSelectionsOptions:   options of assignees, the app user chose from
 * @param projectSelectionsOptions project option the user selected from
 * @param payload:          what slack sends that contains all we need to process the task including
 *    the above
 *
 * @returns                 tasks with integrated user options
 */
export function integrateSelectedValues(
  notionTask: NotionTask,
  userSelectionsOptions: NotionUser[],
  projectSelectionsOptions: ProjectWithName[],
  payload: any,
) {
  const assignees = notionTask.assignees;
  const projects = notionTask.project || [];

  const selected = payload["state"]["values"];

  const valueKeys = Object.keys(selected);

  const selectedKey = valueKeys[0];

  const selectedValues: SelectionOption[] =
    selected[selectedKey]["multi_select-action"]["selected_options"];

  if (selectedValues.length === 0) {
    return notionTask;
  }

  if (selectedValues[0].value.includes("Project_")) {
    const allProjects = integrateSelectedProjects(
      projects,
      selectedValues,
      projectSelectionsOptions,
    );

    notionTask.project = allProjects;
  } else {
    const allAssignees = integrateUserSelections(
      assignees,
      selectedValues,
      userSelectionsOptions,
    );
    notionTask.assignees = [...notionTask.assignees, ...allAssignees];
  }
  if (valueKeys.length > 1) {
    const selectedKey_01 = valueKeys[1];
    console.log("Key 2", selectedKey_01);
    console.log("Selected", selected);

    const selectedValues_01: SelectionOption[] =
      selected[selectedKey_01]["multi_select-action"]["selected_options"];

    const allProjects2 = integrateSelectedProjects(
      projects,
      selectedValues_01,
      projectSelectionsOptions,
    );

    notionTask.project = allProjects2;
  }
  return notionTask;
}
