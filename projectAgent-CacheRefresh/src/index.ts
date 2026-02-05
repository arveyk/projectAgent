import cacheRefreshHandler from "./routes/cacheRefresh";
import { Handler} from "aws-lambda";

const handler: Handler = cacheRefreshHandler;

export { handler };
