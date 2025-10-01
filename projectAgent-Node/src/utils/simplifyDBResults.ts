import { isFullPage } from "@notionhq/client";
import { DatabaseObjectResponse, PageObjectResponse, PartialDatabaseObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export type dbPage = {
    pageId: string,
    taskTitle: string,
    assignee: string
}

/**
 * Simplifies database query results from Notion to make them more readable to the LLM.
 * @param {*} dbResults Database query results from Notion
 * @returns A simplified version of the Notion database results.
 */
export const simplifyDBResults = function (dbResults: QueryDatabaseResponse): dbPage[] {
  const resultList = dbResults["results"];

  const simplifiedResults: dbPage[] = new Array();
  for (let result of resultList) {
    if (!isFullPage(result)){
      throw new Error("Database response is not a full page");
    }
    const properties = result["properties"];
    simplifiedResults.push({
      pageId: result["id"],
      taskTitle: properties["Task Title"]["title"][0]["plain_text"],
      assignee: properties["Assignee"]["rich_text"][0]["plain_text"],
    });
  }
  return simplifiedResults;
};
