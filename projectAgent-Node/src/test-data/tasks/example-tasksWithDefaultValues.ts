import { DateTime } from "luxon";
import { UserData } from "../../utils/controllers/getUsersSlack";
import { Task } from "../../utils/taskFormatting/task";

export const EXAMPLE_USER_DATA_DANA: UserData = {
    eventTimeData: DateTime.fromISO("2026-03-04"),
    userId: "12345",
    name: "Dana Cardinal",
    email: "dana@nightvale.net"
}

export const EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [
        {
            name: "Cecil Palmer",
        }
    ],
    startDate: "2026-03-09",
    dueDate: "2026-03-12"
}

export const EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS_DEFAULT_ALL: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [
        {
            name: "Dana Cardinal",
        }
    ],
    startDate: "2026-03-04",
    dueDate: "2026-03-06"
}

export const EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS_DEFAULT_START: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [
        {
            name: "Cecil Palmer",
        }
    ],
    startDate: "2026-03-04",
    dueDate: "2026-03-12"
}

export const EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS_DEFAULT_DUE: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [
        {
            name: "Cecil Palmer",
        }
    ],
    startDate: "2026-03-09",
    dueDate: "2026-03-06"
}

export const EXAMPLE_TASK_WITH_ALL_REQUIRED_FIELDS_DEFAULT_ASSIGNEE: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [
        {
            name: "Dana Cardinal",
        }
    ],
    startDate: "2026-03-09",
    dueDate: "2026-03-12"
}

export const EXAMPLE_TASK_MISSING_START_DATE: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [
        {
            name: "Cecil Palmer",
        }
    ],
    dueDate: "2026-03-12"
}

export const EXAMPLE_TASK_MISSING_DUE_DATE: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [
        {
            name: "Cecil Palmer",
        }
    ],
    startDate: "2026-03-09",
}

export const EXAMPLE_TASK_MISSING_ASSIGNEES: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [],
    startDate: "2026-03-09",
    dueDate: "2026-03-12"
}

export const EXAMPLE_TASK_MISSING_START_DUE_ASSIGNEES: Task = {
    taskTitle: "Pet the cats",
    description: "Pet the cats",
    assignees: [],
}
