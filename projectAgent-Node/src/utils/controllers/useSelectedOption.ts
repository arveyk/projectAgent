import { NotionTask } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";

type SelectionOption = {
  text: {
    type: "plain_text";
    text: string; //"*Harvey Kisiangani --- harvey.kisiangani@solutional.com*",
    emoji: boolean;
  };
  value: string; // "1"
};
export function integrateUserSelections(
  assignees: NotionUser[],
  payload: any,
  userSelections: NotionUser[],
) {
  const selected = payload["state"]["values"];

  const valueKeys = Object.keys(selected);

  const selectedKey = valueKeys[0];

  const selectedValues: SelectionOption[] =
    selected[selectedKey]["multi_select-action"]["selected_options"];

  const allAssignees: NotionUser[] = [...assignees];
  if (selectedValues.length < 1) {
    return [];
  }

  for (const indexHolder of selectedValues) {
    console.log(parseInt(indexHolder["value"]));
    const index = parseInt(indexHolder["value"]);
    if (isNaN(index)) {
      throw "(integrateUserSelections): index value is Not a Number";
    }
    allAssignees.push(userSelections[index]);
  }
  return allAssignees;
}
export function integrateSelectedProjects(
  projects: { id: string }[],
  selectedValues: SelectionOption[],
  projectSelections: { projectName: string, id: string }[]
) {
  const allProjects: { id: string }[] = [...projects];

  if (selectedValues.length < 1) {
    return allProjects;
  }

  for (const indexHolder of selectedValues) {
    console.log(parseInt(indexHolder["value"]));
    const index = parseInt(indexHolder["value"].replace("Project_", ""));
    if (isNaN(index)) {
      throw "(integrateSelectedProjects): index value is Not a Number";
    }
    if (allProjects.find((element) =>
      projectSelections[index].id === element.id)
    ) continue;
    allProjects.push({ id: projectSelections[index].id });
  }
  return allProjects;
}


export function integrateSelectedValues(
  notionTask: NotionTask,
  userSelections: NotionUser[],
  projectSelections: { projectName: string, id: string }[],
  payload: any
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
    const allProjects = integrateSelectedProjects(projects, selectedValues, projectSelections)

    notionTask.project = allProjects;
  }
  else {
    const allAssignees = integrateUserSelections(assignees, payload, userSelections);
    notionTask.assignees = [...notionTask.assignees, ...allAssignees];
  }
  if (valueKeys.length > 1) {
    const selectedKey_01 = valueKeys[1];
    console.log("Key 2", selectedKey_01);
    console.log("Selected", selected);

    const selectedValues_01: SelectionOption[] =
      selected[selectedKey_01]["multi_select-action"]["selected_options"];

    const allProjects2 = integrateSelectedProjects(projects, selectedValues_01, projectSelections);

    notionTask.project = allProjects2;
  }
  return notionTask;
}
