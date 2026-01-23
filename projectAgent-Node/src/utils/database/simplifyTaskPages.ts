import { isFullPage } from "@notionhq/client";
import {
  DataSourceObjectResponse,
  PageObjectResponse,
  PartialDataSourceObjectResponse,
  PartialPageObjectResponse,
  QueryDataSourceResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { extractAssignees, PersonNoId } from "../taskFormatting/task";

export type TaskPage = {
  pageId: string;
  taskTitle: string;
  description?: string;
  assignee: PersonNoId[];
  project: { id: string }[];
};

/**
 * Simplifies a single Notion database page result.
 * @param result A single Notion database page result.
 * @returns A simplified TaskPage object.
 */
export function simplifyTaskPage(
  result:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDataSourceObjectResponse
    | DataSourceObjectResponse,
): TaskPage {
  if (!isFullPage(result)) {
    throw new Error("Database response is not a full page");
  }
  const properties = result["properties"];
  if (properties["Task name"].type !== "title") {
    throw new Error("Task Title is the wrong type");
  }
  if (properties["Assigned to"].type !== "people") {
    throw new Error("Assignee is the wrong type");
  }
  if (!properties["Description"]) {
    throw new Error("Description field is missing from this database");
  }
  return {
    pageId: result["id"],
    taskTitle:
      properties["Task name"]["title"].length > 0
        ? properties["Task name"]["title"][0]["plain_text"]
        : "Untitled Task",
    description:
      properties.Description.type === "rich_text" &&
      properties.Description.rich_text.length > 0
        ? properties.Description.rich_text[0].plain_text
        : undefined,
    assignee: properties["Assigned to"]["people"].map((response) =>
      extractAssignees(response),
    ),
    project: properties.Project.type === "relation" ? properties.Project.relation : [],
  };
}

/**
 * Simplifies database query results from Notion to make them more readable to the LLM.
 * @param dbResults Database query results from Notion
 * @returns A simplified version of the Notion database results.
 */
export function simplifyTaskPages(
  dbResults: QueryDataSourceResponse["results"]
): TaskPage[] {
  return dbResults.map(simplifyTaskPage);
}
