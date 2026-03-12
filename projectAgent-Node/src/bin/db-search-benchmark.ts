import { searchDatabase } from "../utils/database/searchDatabase";

const message1 = "add Ramona, please fix the date formatting error";
const message2 =
  "add Harvey, please set up uptime monitoring for Notionfications";
const message3 =
  "add Ramona, could you finish the database migration by the end of the week?";

/**
 * Function to benchMark searchingDatabase
 *
 * returns: no return value
 */
async function benchMarkSearchingDatabase(messageToSearch: string) {
  // TODO: Replace null with value from cache
  await searchDatabase(messageToSearch, null);
}

(async () => {
  await benchMarkSearchingDatabase(message1);
  await benchMarkSearchingDatabase(message2);
  await benchMarkSearchingDatabase(message3);
})();
