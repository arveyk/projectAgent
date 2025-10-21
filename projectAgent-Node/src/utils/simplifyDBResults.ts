import { isFullPage, isFullUser } from "@notionhq/client";
import {
  QueryDataSourceResponse,
  PersonUserObjectResponse,
  UserObjectResponseCommon,
  PartialUserObjectResponse,
  UserObjectResponse,
  RichTextItemResponseCommon, TextRichTextItemResponse
} from "@notionhq/client/build/src/api-endpoints";
import { extractAssignees, PersonNoId } from "./task";

export type dbPage = {
  pageId: string;
  taskTitle: string;
  description?: string;
  assignee: PersonNoId[];
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
    if (properties["Assigned to"]["type"] !== "people") {
      throw new Error("Assignee is the wrong type");
    }
    simplifiedResults.push({
      pageId: result["id"],
      taskTitle: properties["Task name"]["title"][0]["plain_text"],
      description: properties["Description"]["type"] === "rich_text" ? 
        properties["Description"]["rich_text"][0]["plain_text"] : undefined,
      assignee: properties["Assigned to"]["people"].map((response) =>
        extractAssignees(response),
      ),
    });
  }
  return simplifiedResults;
};
