import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { PageObjectResponse } from "@notionhq/client";

export async function refreshPageCache(client: DynamoDBDocumentClient, pageResponse: PageObjectResponse) {
    // 	Create put command for pageResponse
    // 	client.send(put command)
}
