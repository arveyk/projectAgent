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
  const formattedDate = date.toDateString()
  return formattedDate;
}

/**
 * Validates that a due date is not in the past.
 * @param {*} dueDate The due date
 * @returns true if the due date is not in the past, else returns false.
 */
export const validateDueDate = function (dueDate: Date): boolean {
  // new Date(taskInput["dueDate"])
  const today: Date = new Date();
  //const today = DateTime.now().setZone("utc").toJSDate();
  console.log(
    `(validateDueDate) Today: ${today} (${new Date(today).getTime()} millis) Due Date: ${dueDate} (${new Date(dueDate).getTime()} millis)`,
  );

  return new Date(dueDate).getTime() >= new Date(today).getTime();
};
