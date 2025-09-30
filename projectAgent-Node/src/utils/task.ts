export type Task = {
    tasktitle: string,
    assignee: string,
    duedate: Date,
    startdate?: Date,
    phonenumber?: string,
    email?: string,
    preferredchannel?: string,
    description: string,
    project?: string,
};