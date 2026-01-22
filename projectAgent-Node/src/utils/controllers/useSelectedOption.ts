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
 * Integrates selected Notion users into the assignee field
 * @param assignees:      The assignees already in the task
 * @param selectedValues: The assignees the app user selected
 *
 * @returns               All assignees, both from the original task and those selected by the app user
 */
export function integrateUserSelections(
  assignees: NotionUser[],
  selectedValues: SelectionOption[],
) {
  const allAssignees: NotionUser[] = [...assignees];
  if (selectedValues.length < 1) {
    return [];
  }

  for (const selectedOption of selectedValues) {
    console.log(parseInt(selectedOption["value"]));
    const selectedUser:string = JSON.parse(selectedOption["value"]);
    
    allAssignees.push(selectedUser);

  }
  return allAssignees;
}

/**
 * Integrates selected projects into the existing task projects
 * @param projects:           The projects from the task
 * @param selectedValues:     The projects the app user selected
 *
 * @returns:                  All projects, both from the original task and those selected by the app user
 */
export function integrateSelectedProjects(
  projects: { id: string }[],
  selectedValues: SelectionOption[],
) {
  const allProjects: { id: string }[] = [...projects];

  if (selectedValues.length < 1) {
    return allProjects;
  }

  for (const selectedOption of selectedValues) {
    console.log(parseInt(selectedOption["value"]));
    // Refactoring so that we use the project id directly
    const projectId:string = selectedOption["value"].replace("Project_", "");
    
    if (
      allProjects.find(
        (element) => projectId === element.id,
      )
    )
      continue;
    allProjects.push({ id: projectId });
  }
  return allProjects;
}

/** Takes the user's selections and integrates them into the task to be created.
 * @param notionTask: The new task.
 * @param payload: Data sent from Slack that contains all we need to process the task.
 *
 * @returns The task with the user's selections integrated.
 */
export function integrateSelectedValues(
  notionTask: NotionTask,
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
  
  const notionTaskWithIntegratedValues: NotionTask = {
    taskTitle: notionTask.taskTitle,
    assignees: [...notionTask.assignees],
    assignedBy: [...notionTask.assignedBy],
    description: notionTask.description,
    dueDate: notionTask.dueDate,
    startDate: notionTask.startDate,
    project: [...(notionTask.project || [])]
  }

  if (selectedValues[0].value.includes("Project_")) {
    const allProjects = integrateSelectedProjects(
      projects,
      selectedValues,
    );

    notionTaskWithIntegratedValues.project = allProjects;
  } else {
    const allAssignees = integrateUserSelections(
      assignees,
      selectedValues,
    );
    notionTaskWithIntegratedValues.assignees = [...notionTask.assignees, ...allAssignees];
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
    );

    notionTaskWithIntegratedValues.project = allProjects2;
  }
  return notionTaskWithIntegratedValues;
}
