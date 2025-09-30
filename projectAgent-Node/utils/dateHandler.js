export const validateDate = function (dateString) {
  const year = new Date().getFullYear().toString();
  let dateArray;
  let delim = "-";
  if (dateString.includes("-")) {
    dateArray = dateString.split("-");
  } else if (dateString.includes("/")) {
    dateArray = dateString.split("/");
    delim = "/";
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
};

export const formatSlackDate = function (date) {
  const timestamp = Date.parse(date) / 1000;
  return `<!date^${timestamp}^{date_long}|${date}>`;
};
