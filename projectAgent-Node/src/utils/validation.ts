/**
 * Validates that a due date is not in the past.
 * @param {*} dueDate The due date
 * @returns true if the due date is not in the past, else returns false.
 */
export const validateDueDate = function (dueDate: Date): boolean {
  const today = new Date(Date.now());
  console.log(`Due Date value ${dueDate} and ${today}in validateDueDate:`);
  console.log(`Today: ${today}\nDue Date: ${dueDate}`);

  return dueDate >= today;
};
