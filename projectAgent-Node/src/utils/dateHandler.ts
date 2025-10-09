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

export function formatSlackDate(date: Date): string {
  console.log(`date: ${date}`);
  const timestampSeconds = date.valueOf() / 1000;
  console.log(`timestamp (seconds): ${timestampSeconds}`);
  return `<!date^${timestampSeconds}^{date_long}|${date.toISOString()}>`;
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
  console.log(`(validateDueDate) Today: ${today} (${today.getUTCMilliseconds()} millis) Due Date: ${dueDate} (${dueDate.getUTCMilliseconds()} millis)`);

  return dueDate >= today;
};
