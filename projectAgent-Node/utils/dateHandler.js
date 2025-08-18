export const dateHandler = function (dateString) {
  const year = new Date().getFullYear().toString();
  const dateArray = dateString.split("-");
  let convertedDate;
  try {
    //console.log(dateArray);
    if (dateArray[0] !== year) {
      convertedDate = dateArray.reverse().join("-");
      convertedDate = new Date(convertedDate);
    } else {
      convertedDate = new Date(dateString);
    }
    return convertedDate.toISOString();
  } catch (err) {
    console.log("Cannot Convert string", err);
    return "Invalid Date Value";
  }
};

export const formatSlackDate = function(date) {
  console.log(`Unformatted date: ${date}`);
  const timestamp = Date.parse(date)/1000;
  return `<!date^${timestamp}^{date_long}|${date}>`;
}
