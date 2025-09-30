import { DateTime } from "luxon";

export function displayUserTimezone(dateUTC, tzOffset) {
  const date = new DateTime(dateUTC);
  const localDateString = date
    .setZone(`UTC+${tzOffset}`)
    .toLocaleString(DateTime.DATE_SHORT);
  return localDateString;
}
