import { isFullPage, isFullUser } from "@notionhq/client";
import { QueryDataSourceResponse, PersonUserObjectResponse, UserObjectResponseCommon, PartialUserObjectResponse, UserObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Person } from "./task";

export type dbPage = {
  pageId: string;
  taskTitle: string;
  assignee: Person[];
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
      assignee: properties["Assigned to"]["people"].map((person) => {
        if (person["object"] === "user") {
          if (isFullUser(person)) {
            if (person["type"] === "person"){
              const personObject: Person = {
                name: person["name"] !== null ? person["name"] : "Unnamed person",
                email: person["person"]["email"]
              };
              return personObject;
            }
            else{
              throw new Error("Assignee is not a person");
            }
          }
          else {
            throw new Error("Assignee is not a full user");
          }
        }
        else {
          throw new Error("Person is the wrong type");
        }
      }),
    });
  }
  return simplifiedResults;
};
