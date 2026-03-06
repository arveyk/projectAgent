import { externalQueries } from "./queries";
import { payloadGood } from "../test-data/payloads/slashcmd/payloads";
import { EXAMPLE_ALL_NOTION_USERS } from "../test-data/example-all-notion-users";
import {
    EXAMPLE_ALL_PROJECTS_IN_NOTIONDB
} from "../test-data/example-all-notion-projects";
import { notionTask } from "../test-data/tasks/example-tasks";


(async () => {
    const myTime = Date.now();
    const allQueries = externalQueries("users", payloadGood,
        {
            projects: EXAMPLE_ALL_PROJECTS_IN_NOTIONDB,
            users: EXAMPLE_ALL_NOTION_USERS,
            tasks: [notionTask]

        }
    );
    console.log("All Query ts", allQueries.timestamp,
	       "Anonymst", myTime);
    //console.log( 
    await allQueries.users.getAllNotionUsers();
})();
