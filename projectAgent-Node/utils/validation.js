/**
 * Validates that a due date is not in the past.
 * @param {*} dueDate The due date
 * @returns true if the due date is not in the past, else returns false.
 */
export const validateDueDate = function (dueDate) {
  const today = new Date();
  const formattedDueDate = new Date(dueDate);
  console.log(`Today: ${today}\nDue Date: ${formattedDueDate}`);

  return formattedDueDate >= today;
};
