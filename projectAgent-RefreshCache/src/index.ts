import cacheRefreshHandler from "./routes/refreshCache";
import { Handler } from "aws-lambda";

const handler: Handler = cacheRefreshHandler;

export { handler };
