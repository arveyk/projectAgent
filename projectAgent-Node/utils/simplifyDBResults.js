/**
 * Simplifies database query results from Notion to make them more readable to the LLM.
 * @param {*} dbResults Database query results from Notion
 * @returns A simplified version of the Notion database results.
 */
export const simplifyDBResults = function(dbResults) {
    console.log(`search results: ${JSON.stringify(dbResults)}`);

    const resultList = dbResults["results"];
    console.log(`list of results: ${JSON.stringify(resultList)}`);

    const simplifiedResults = new Array();
    for (let result of resultList) {
        const properties = result["properties"];
        simplifiedResults.push(
            {
                pageId: result["id"],
                tasktitle: properties["Task Title"]["title"][0]["plain_text"],
                assignee: properties["Assignee"]["rich_text"][0]["plain_text"],
            }
        );
    }
    return simplifiedResults;
}