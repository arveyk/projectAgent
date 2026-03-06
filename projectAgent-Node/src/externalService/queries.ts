import { SlashCommand } from "@slack/bolt";
import { getNotionUsers } from "../utils/controllers/getUsersNotion";
import { getSlackUsers, getAppUserData, getSlackUserDataById } from "../utils/controllers/getUsersSlack";
import { getProjects, getTasks } from "../utils/database/searchDatabase";
import { Project } from "../domain";
import { NotionTask } from "../utils/taskFormatting/task";
import { NotionUser } from "../utils/controllers/userTypes";


/**
 * Function to make api calls to external services
 * @param service - Name of host service to query from
 * @param requestBody - object containing relevant data from Slash command invocation from slack channel
 * @return relevant requested data
 */

export function externalQueries(service: string, requestBody: SlashCommand, alreadyFetchedData: {
    projects: Project[],
    users: NotionUser[],
    tasks: NotionTask[]
} | null) {

    const timestamp = Date.now();

    const allUsers = {
        getAllNotionUsers: async () => {
            console.log("Searching all Notion Users")
            return await getNotionUsers(null);
        },
        getAllSlackUsers: async () => {
            console.log("Searching all Slack Users")
            return await getSlackUsers();
        },
        appUserData: async () => {
            return await getAppUserData(requestBody, timestamp);
        }
    };
    return {
        timestamp,
        users: allUsers,
        projects: async () => {
            console.log(`Getting: ${service}`)
            return await getProjects(null);
        },
        tasks: async () => {
            console.log(`Getting: ${service}`)
            return await getTasks(null);
        }
    };
}
