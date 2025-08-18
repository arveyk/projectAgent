export const validateDate = function (dateString) {
  const year = new Date().getFullYear().toString();
  const dateArray = dateString.split("-");
    if (dateArray[0] !== year) {
      return "Invalid Date Value";
    } else {
      return new Date(dateString).toString();
    }
};

export const formatSlackDate = function(date) {
  const timestamp = Date.parse(date)/1000;
  return `<!date^${timestamp}^{date_long}|${date}>`;
}
