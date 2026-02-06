import { APIGatewayProxyEventV2, Context, Handler } from "aws-lambda";
import { getProjectsRaw, getTasksRaw, getUsers } from "../utils/notionAPI";
import { refreshCache } from "../utils/dynamoDB";



const cacheRefreshHandler: Handler = async function (
    event: APIGatewayProxyEventV2,
    context: Context
) {
    console.log("Refreshing cache");

    const taskResponse = await getTasksRaw();
    const projectResponse = await getProjectsRaw();
    const userResponse = await getUsers();

    const cachRefreshResult = await refreshCache(taskResponse, projectResponse, userResponse);
    return cachRefreshResult;
}

export default cacheRefreshHandler;
