export const convertEmptyFields = function(task) {
    let newTask = {
        tasktitle: "",
        assignee: "",
        duedate: "",
        startdate: "",
        phonenumber: "",
        email: "",
        preferredChannel: "",
        taskdetail: ""
    };
    for (let [key, value] of Object.entries(task)){
        if (value !== "<UNKNOWN>") {
            newTask[key] = value;
        }
    };
    return newTask
}