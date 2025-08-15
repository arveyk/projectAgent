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
    console.log("Cannot Convert string",err);
    return ("Invalid Date Value");
  }
  //console.log(convertedDate);
};
