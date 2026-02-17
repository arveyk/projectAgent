import { BatchGetCommandOutput } from "@aws-sdk/lib-dynamodb";
import { promisify } from "util";
import zlib from "zlib";
import { EXAMPLE_RAW_USERS_RESPONSE } from "./rawUsers";
import { EXAMPLE_RAW_TASKS_RESPONSE } from "./rawTasks";
import { EXAMPLE_RAW_PROJECTS_RESPONSE } from "./rawProjects";

const gzipPromise = promisify(zlib.gzip);

export async function getExampleRawCacheResponse(user: boolean, task: boolean, project: boolean): Promise<BatchGetCommandOutput> {
  const cacheItems = [];
  if (user) {
    cacheItems.push(
      await getExampleCompressedData("user")
    )
  };
  if (task) {
    cacheItems.push(
      await getExampleCompressedData("task")
    )
  };
  if (project) {
    cacheItems.push(
      await getExampleCompressedData("project")
    )
  };

  return {
    "Responses": {
      "projectagent-cache-dev": cacheItems
    },
    "UnprocessedKeys": {},
    "$metadata": {
      "httpStatusCode": 200,
      "requestId": "",
      "attempts": 1,
      "totalRetryDelay": 0
    }
  }
}

export async function getExampleCompressedData(type: "user" | "project" | "task"): Promise<Record<string, any>> {
  if (type === "user") {
    return {
      "ItemType": "user",
      "RawResponse": await gzipPromise(JSON.stringify(EXAMPLE_RAW_USERS_RESPONSE))
    };
  }
  else if (type === "project") {
    return {
      "ItemType": "project",
      "RawResponse": await gzipPromise(JSON.stringify(EXAMPLE_RAW_PROJECTS_RESPONSE))
    };
  }
  else {
    return {
      "ItemType": "task",
      "RawResponse": await gzipPromise(JSON.stringify(EXAMPLE_RAW_TASKS_RESPONSE))
    };
  }

}
