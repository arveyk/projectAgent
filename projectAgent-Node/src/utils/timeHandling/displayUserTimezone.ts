import { DateTime } from "luxon";

export function displayUserTimezone(dateUTC: string, tzOffset: number): string {
  const date = DateTime.fromISO(dateUTC);
  const localDateString: string = date
    .setZone(`UTC+${tzOffset}`)
    .toLocaleString(DateTime.DATE_SHORT);
  return localDateString;
}
