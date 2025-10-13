import { isFullPage } from "@notionhq/client";
import { QueryDataSourceResponse } from "@notionhq/client/build/src/api-endpoints";

export type dbPage = {
  pageId: string;
  taskTitle: string;
  assignee: string;
};

/**
 * Simplifies database query results from Notion to make them more readable to the LLM.
 * @param {*} dbResults Database query results from Notion
 * @returns A simplified version of the Notion database results.
 */
export const simplifyDBResults = function (
  dbResults: QueryDataSourceResponse,
): dbPage[] {
  const resultList = dbResults["results"];

  const simplifiedResults: dbPage[] = new Array();
  for (let result of resultList) {
    if (!isFullPage(result)) {
      throw new Error("Database response is not a full page");
    }
    const properties = result["properties"];
    if (properties["Task name"]["type"] !== "title") {
      throw new Error("Task Title is the wrong type");
    }
    if (properties["Assigned to"]["type"] !== "rich_text") {
      throw new Error("Assignee is the wrong type");
    }
    simplifiedResults.push({
      pageId: result["id"],
      taskTitle: properties["Task name"]["title"][0]["plain_text"],
      assignee: properties["Assigned to"]["rich_text"][0]["plain_text"],
    });
  }
  return simplifiedResults;
};
