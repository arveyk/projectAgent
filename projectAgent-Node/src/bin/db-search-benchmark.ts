import { searchDatabase } from "../utils/database/searchDatabase";

const message1 = "add Chimara, please fix the date formatting error";
const message2 =
  "add Harvey, please set up uptime monitoring for Notionfications";
const message3 =
  "add Chimara, could you finish the database migration by the end of the week?";


/**
 * Function to benchMark searchingDatabase
 *
 * returns: no return value
 */
async function benchMarkSearchingDatabase(messageToSearch: string) {
    await searchDatabase(messageToSearch);
}

(async () => {
  await benchMarkSearchingDatabase(message1);
  await benchMarkSearchingDatabase(message2);
  await benchMarkSearchingDatabase(message3);
})();
