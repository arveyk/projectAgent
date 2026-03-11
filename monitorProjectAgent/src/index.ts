import axios from "axios";
import { errorHandler } from "./errorHandler";
// import { PROJECT_AGENT_HEALTHCHECK_URL } from "./env";
import { SLACK_BOT_TOKEN } from "./env";
import express, { Request, Response, NextFunction } from "express";
import { PORT } from "./env";

export async function checkOnProjectAgent(req: Request, response: Response, next: NextFunction) {
    const slackAPIUrl = "https://slack.com/api/auth.test"
    const slackHealthCheck = await axios.post(slackAPIUrl, {
        headers: {
            Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    /*
    const projectAgentHealthCheckResult = await axios.get(PROJECT_AGENT_HEALTHCHECK_URL, {
        family: 4
    });
    */

    if (slackHealthCheck.data.ok === false) {
        // await errorHandler(slackHealthCheck, "email");
        await errorHandler(slackHealthCheck.data, "slack");
    }
    /*
    if (!projectAgentHealthCheckResult.data)  {
        await errorHandler(projectAgentHealthCheckResult.status, "email");
    }
        */
    response.status(200).json({
        health: "Looking Good"
    })
    // next();
}

const app = express();

app.use(express.json());

app.get("/health", checkOnProjectAgent);

app.listen(PORT, () => {
    console.log("Health check on port: ", PORT);
});
