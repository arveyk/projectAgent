import { DateTime } from "luxon";

export function validateDate(dateString: string): Date | "Invalid Date Value" {
  const year = new Date().getFullYear().toString();
  let dateArray;
  let delim = "-";
  if (dateString.includes("-")) {
    dateArray = dateString.split("-");
  } else if (dateString.includes("/")) {
    dateArray = dateString.split("/");
    delim = "/";
  } else {
    return "Invalid Date Value";
  }
  if (dateArray[2] === year) {
    dateString = dateArray.reverse().join(delim);
    dateArray = dateArray.reverse();
  }
  if (dateArray[0] !== year) {
    return "Invalid Date Value";
  } else {
    return new Date(dateString);
  }
}

/**
 * Formats an ISO date string as a JS DateString.
 * @param date The ISO date string to format.
 * @returns The date as a JS DateString.
 */
export function formatDateString(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = date.toDateString();
  return formattedDate;
}

/**
 * Validates that a due date is not in the past.
 * @param {*} dueDateString The due date
 * @returns true if the due date is not in the past, else returns false.
 */
export const validateDueDate = function (dueDateString: string): boolean {
  const dueDate = DateTime.fromISO(dueDateString).toJSDate();

  const today: Date = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  console.log(
    `(validateDueDate) Today: ${today} (${today.getTime()} millis) Due Date: ${dueDate} (${dueDate.getTime()} millis)`,
  );

  return dueDate >= today;
};
