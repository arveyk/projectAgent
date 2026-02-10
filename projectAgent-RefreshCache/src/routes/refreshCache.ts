import { APIGatewayProxyEventV2, Context, Handler } from "aws-lambda";
import { getProjectsRaw, getTasksRaw, getUsers } from "../utils/notionAPI";
import { createCacheClient, refreshCache } from "../utils/dynamoDB";

const cacheRefreshHandler: Handler = async function (
  event: APIGatewayProxyEventV2,
  context: Context,
) {
  console.log("Refreshing cache");
  const client = createCacheClient();

  const taskResponse = await getTasksRaw();
  const projectResponse = await getProjectsRaw();
  const userResponse = await getUsers();

  const cachRefreshResult = await refreshCache(
    client,
    taskResponse,
    projectResponse,
    userResponse,
  );
  return cachRefreshResult;
};

export default cacheRefreshHandler;
