import {
  Client,
  collectPaginatedAPI,
  ListUsersResponse,
  QueryDataSourceResponse,
} from "@notionhq/client";
import {
  NOTION_API_KEY,
  NOTION_PROJECTS_DATA_SOURCE_ID,
  NOTION_TASKS_DATA_SOURCE_ID,
} from "../env";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

/**
 * Retrieves all raw tasks (Notion pages) from the tasks database
 *
 * Does not perform any filtering or simplification on the tasks
 *
 * @return	An array of all raw tasks in the tasks database
 */
export async function getTasksRaw(): Promise<
  QueryDataSourceResponse["results"]
> {
  return await collectPaginatedAPI(notion.dataSources.query, {
    data_source_id: NOTION_TASKS_DATA_SOURCE_ID,
    filter_properties: ["Task name", "Description", "Assigned to", "Project"],
  });
}

/**
 * Retrieves all raw projects (Notion pages) from the projects database
 *
 * Does not perform any filtering or simplification on the projects
 *
 * @return	An array of all raw projects in the projects database
 */
export async function getProjectsRaw(): Promise<
  QueryDataSourceResponse["results"]
> {
  return await collectPaginatedAPI(notion.dataSources.query, {
    data_source_id: NOTION_PROJECTS_DATA_SOURCE_ID,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            does_not_equal: "Done",
          },
        },
        {
          property: "Status",
          status: {
            does_not_equal: "Canceled",
          },
        },
        {
          property: "Status",
          status: {
            does_not_equal: "Archived",
          },
        },
      ],
    },
    filter_properties: ["Project name", "Status"],
  });
}

/**
 * Gets all the users in the Notion workspace.
 * @returns All the users in the Notion workspace.
 */
export async function getUsers(): Promise<ListUsersResponse> {
  const notionResp = await notion.users.list({});
  return notionResp;
}
