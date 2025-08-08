/**
 * Replaces "<UNKNOWN>" fields with empty strings.
 * @param {*} task A task object
 * @returns A task object with all "<UNKNOWN>" fields replaced with empty strings.
 */
export const convertEmptyFields = function (task) {
  let newTask = {
    tasktitle: "",
    assignee: "",
    duedate: "",
    startdate: "",
    phonenumber: "",
    email: "",
    preferredchannel: "",
    taskdetail: "",
    project: "",
  };
  for (let [key, value] of Object.entries(task)) {
    if (value !== "<UNKNOWN>") {
      newTask[key] = value;
    }
  }
  return newTask;
};
