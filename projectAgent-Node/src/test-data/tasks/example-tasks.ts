import { DateTime } from "luxon";
import { Task, NotionTask } from "../../utils/taskFormatting/task";


const tomorrow = DateTime.now().plus({ days: 1 }).toISO();


export const task: Task = {
  taskTitle: "Schedule meeting with customer",
  assignees: [{"name":"Jacob"}],
  dueDate: new Date("2025-05-11").toISOString(),
  startDate: new Date("2025-01-11").toISOString(),
  description:
    "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
};

export const notionTask: NotionTask = {
  taskTitle: "Schedule meeting with customer",
  assignees: [{"name":"Jacob", "userId": "IUwuhd-98732-gdkxn-e932-jwoiw", "email": "jacomsmail@example.com"}],
  assignedBy: [{"name":"Jacob", "userId": "IUwuhd-98732-gdkxn-e932-jwoiw", "email": "jacomsmail@example.com"}],
  dueDate: new Date("2025-05-11").toISOString(),
  startDate: new Date("2025-01-11").toISOString(),
  description:
    "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
};

export const task_in_db: Task = {
  taskTitle: "Build prototype",
  assignees: [{"name": "Callie"}],
  dueDate: new Date("2025-08-06").toISOString(),
  startDate: new Date("2025-07-30").toISOString(),
  description: "Build the prototype",
};

export const task_in_db_reworded: Task = {
  taskTitle: "Create event supply list",
  assignees: [{"name": "Ellanie"}],
  dueDate: new Date("2025-08-04").toISOString(),
  startDate: new Date("2025-07-31").toISOString(),
  description:
    "Create a list of all the supplies needed for the event and give it to Joe",
};

export const task_not_in_db: Task = {
  taskTitle: "Take over the Tri-State Area",
  assignees: [{name:"Heinz"}],
  dueDate: new Date("2025-05-11").toISOString(),
  startDate: new Date("2026-01-11").toISOString(),
  description: "Take over the Tri-State Area",
};

export const task_feed_cats: Task = {
  taskTitle: "Feed the cats",
  assignees: [{name:"Josh"}],
  dueDate: "2023-08-07",
  startDate: "2023-08-01",
  description:
    "Feed the cats every day from August 1 to August 7. Give them their pills and ensure they have enough clean water.",
};

export const task_unknown_fields = {
  taskTitle: "Schedule meeting with customer",
  assignee: [{name:"Jacob"}],
  dueDate: "2025-05-11",
  startDate: "<UNKNOWN>",
  taskdetail:
    "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
};

export const taskGood: Task = {
  taskTitle: "Finish the mural",
  assignees: [{"name":"Jeff"},{"name": "Agnes"}],
  dueDate: "2025-09-01",
  startDate: "2025-08-06",
  description:
    "Finish the mural, preferably by September 1",
}

export const taskInferDates: Task = {
  taskTitle: "Gather information and write report on similar products",
  assignees: [{name:"Ellen"}],
  dueDate: "2025-08-06",
  startDate: "2025-08-05",
  description:
    "Gather information about similar preexisting products and write up a report",
}

export const taskHarvey: Task = {
  taskTitle: "Send photos for LinkedIn shout out",
  assignees: [{name:"Harvey"}],
  dueDate: "2025-08-06",
  startDate: "2025-08-05",
  description:
    "Send some photos for a LinkedIn shout out",
}

export const taskSubstr: Task = {
  taskTitle: "Crown the winner",
  assignees: [{name:"Dan"}],
  dueDate: "2025-10-7",
  startDate: "2025-10-02",
  description: "Crown the winner of the marathon with the golden diadem, and a sash of silver"
}
export const taskSubstr2: Task = {
  taskTitle: "Organize the files",
  assignees: [{name:"Lyn"}],
  dueDate: "2025-10-7",
  startDate: "2025-10-13",
  description: "Contact out list of attendees for teh DCD conference next week Monday"
}

export const taskKitchen: Task = { 
  taskTitle: "Fix plumbing issue in second floor kitchen", 
  assignees: [{name:"Jeremy"}], 
  dueDate: DateTime.fromMillis(1759852422989).
  setZone("Africa/Nairobi").toJSDate().toISOString(), 
  description: "Fix the plumbing issue in the second floor kitchen. Call when the task is completed." 
}

export const taskNoAssignee: NotionTask = { 
  taskTitle: "Fix plumbing issue in second floor kitchen", 
  assignees: [],
  assignedBy: [],
  dueDate: "2025-11-12", 
  description: "Fix the plumbing issue in the second floor kitchen. Call when the task is completed." 
}

export const jacobsTask: NotionTask = {
  taskTitle: "Schedule meeting with customer",
  assignees: [
    {
      userId: "1e0d872b-594c-81e5-be86-000260493812",
      name: "Jacob",
      email: "j@cob.com",
    },
  ],
  assignedBy: [],
  dueDate: tomorrow,
  startDate: "2025-11-01",
  description:
    "Schedule a meeting with the customer. Check the sender's Calendly for available times.",
};
