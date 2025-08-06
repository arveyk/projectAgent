/**
 * Simplifies database query results from Notion to make them more readable to the LLM.
 * @param {*} dbResults Database query results from Notion
 * @returns A simplified version of the Notion database results.
 */
export const simplifyDBResults = function(dbResults) {
    const resultList = dbResults["list"];
    const simplifiedResults = new Array();
    for (let result of resultList) {
        const properties = result["properties"];
        simplifiedResults.push(
            {
                pageId: result["id"],
                tasktitle: properties["Task Title"]["title"]["plain_text"],
                assignee: properties["Assignee"]["rich_text"]["plain_text"],
                duedate: properties["Due Date"]["date"]["start"],
                startdate: properties["Start Date"]["date"]["start"],
                phonenumber: properties["Phone Number"]["phone_number"],
                email: properties["Email"]["email"],
                preferredChannel: properties["Preferred Chaannel"]["rich_text"]["plain_text"],
                taskdetail: properties["Description"]["rich_text"]["plain_text"]
            }
        );
    }
    return simplifiedResults;
}