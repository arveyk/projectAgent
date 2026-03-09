import { NotionTask } from "../taskFormatting/task";
import { NotionUser } from "./userTypes";

type SelectionOption = {
  text: {
    type: "plain_text";
    text: string; //  "*Harvey Kis --- harvey.kis@example.com*",
    emoji: boolean;
  };
  value: string; //  "{userId: "", name: "", email: ""}"
};

/**
 * Integrates selected Notion users into the assignee field
 * @param assignees:      The assignees already in the task
 * @param selectedValues: The assignees the app user selected
 *
 * @returns               All assignees, both from the original task and those selected by the app user
 */
export function integrateSelectedUsers(
  assignees: NotionUser[],
  selectedValues: SelectionOption[],
) {
  const allAssignees: NotionUser[] = [];
  if (selectedValues.length < 1) {
    return [];
  }

  console.log("Selected users/assignees:", JSON.stringify(selectedValues));

  for (const selectedOption of selectedValues) {
    const selectedUser: NotionUser = JSON.parse(selectedOption["value"]);
    if (!assignees.includes(selectedUser)) {
      allAssignees.push(selectedUser);
    }
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

  console.log("Selected Projects:", JSON.stringify(selectedValues));

  for (const selectedOption of selectedValues) {
    // Refactoring so that we use the project id directly
    const projectId: string = selectedOption["value"].replace("Project_", "");

    if (!allProjects.includes({ id: projectId })) {
      allProjects.push({ id: projectId });
    }
  }
  return allProjects;
}

/** Takes the user's selections and integrates them into the task to be created.
 * @param notionTask: The new task.
 * @param payload: Data sent from Slack that contains all we need to process the task.
 *
 * @returns The task with the user's selections integrated.
 */
export function integrateSelectedValues(notionTask: NotionTask, payload: any) {
  const assignees = notionTask.assignees;
  const projects = notionTask.project || [];

  const selected = payload["state"]["values"];

  const selectedValueKeysArray = Object.keys(selected);

  const firstMenuSelectedKey = selectedValueKeysArray[0];

  const selectedOptionsObjects: SelectionOption[] =
    selected[firstMenuSelectedKey]["multi_select-action"]["selected_options"];

  const notionTaskWithIntegratedValues: NotionTask = {
    taskTitle: notionTask.taskTitle,
    assignees: [...notionTask.assignees],
    assignedBy: [...notionTask.assignedBy],
    description: notionTask.description,
    dueDate: notionTask.dueDate,
    startDate: notionTask.startDate,
    project: [...(notionTask.project || [])],
  };

  if (selectedOptionsObjects.length > 0) {
    if (selectedOptionsObjects[0].value.includes("Project_")) {
      const allProjects = integrateSelectedProjects(
        projects,
        selectedOptionsObjects,
      );

      notionTaskWithIntegratedValues.project = allProjects;
    } else {
      const selectedAssignees = integrateSelectedUsers(
        assignees,
        selectedOptionsObjects,
      );
      notionTaskWithIntegratedValues.assignees = [
        ...notionTask.assignees,
        ...selectedAssignees,
      ];
    }
  }
  if (selectedValueKeysArray.length > 1) {
    const secondMenuSelectedKey = selectedValueKeysArray[1];
    console.log("More than one item selected");

    const selectedValues: SelectionOption[] =
      selected[secondMenuSelectedKey]["multi_select-action"][
        "selected_options"
      ];

    const allProjectsSecondMenu = integrateSelectedProjects(
      projects,
      selectedValues,
    );

    notionTaskWithIntegratedValues.project = allProjectsSecondMenu;
  }

  return notionTaskWithIntegratedValues;
}
