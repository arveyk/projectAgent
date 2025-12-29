import { NotionUser } from "./userTypes";

type SelectionOption ={
  "text": {
    "type": "plain_text";
    "text": string; //"*Harvey Kisiangani --- harvey.kisiangani@solutional.com*",
    "emoji": boolean; 
  },
  "value": string;// "1"
}
export function integrateUserSelections(assignees: NotionUser[], payload: any, userSelections: NotionUser[]) {
  const selected = payload["state"]["values"]

  const valueKeys = Object.keys(selected);

  const selectedKey = valueKeys[0];

  const selectedValues: SelectionOption[] = selected[selectedKey]["multi_select-action"]["selected_options"];

  const allAssignees: NotionUser[] = [...assignees]; 
  
  for (const indexHolder of selectedValues) {
    
    console.log(parseInt(indexHolder["value"]));
    const index = parseInt(indexHolder["value"]);
    if (isNaN(index)) {
      throw "(integrateUserSelections): index value is Not a Number";
    }
    allAssignees.push(userSelections[index])
  }
  return allAssignees;  
}