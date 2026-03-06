import { DateTime } from "luxon";
import { UserData } from "../controllers/getUsersSlack";
import { PersonNoId, Task } from "./task";

/**
 * Sets empty startDate, dueDate, and assignees fields to default values.
 * The default for startDate is the current date.
 * The default for dueDate is two days after the current date.
 * The default for assignees is a list containing the app user.
 * @param appUserData Data about the app user, including the current date and time in their timezone.
 * @param parsedTask A Task object.
 * @returns A copy of the Task object with default values, if applicable.
 */
export function setDefaults(appUserData: UserData, parsedTask: Task) {
  const currentDate: DateTime<true> = appUserData.eventTimeData;

  const defaultStartDate = currentDate.toISODate();
  const defaultDueDate = currentDate.plus({ days: 2 }).toISODate();

  const defaultAssignees: PersonNoId[] = [];
  defaultAssignees.push({
    name: appUserData.name,
    email: appUserData.email,
  });

  const parsedDataWithDefaults: Task = {
    ...parsedTask,
    startDate: parsedTask.startDate ?? defaultStartDate,
    dueDate: parsedTask.dueDate ?? defaultDueDate,
    assignees:
      parsedTask.assignees.length === 0
        ? defaultAssignees
        : parsedTask.assignees,
  };
  return parsedDataWithDefaults;
}
