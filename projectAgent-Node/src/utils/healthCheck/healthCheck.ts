import { ChatAnthropic } from "@langchain/anthropic";
import { Client } from "@notionhq/client";
import { NOTION_API_KEY, ANTHROPIC_MODEL_VER, ANTHROPIC_API_KEY } from "../../env";
import { fetchSlackUsersRaw } from "../../externalService/slackApiService";
import { HumanMessage } from "@langchain/core/messages";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

const model = new ChatAnthropic({
  model: ANTHROPIC_MODEL_VER,
  temperature: 0,
  apiKey: ANTHROPIC_API_KEY,
});

/**
 * Type representing the health of a connection to an external service.
 */
type ServiceHealthResponse = {
    ok: boolean,
    error?: unknown
}

/**
 * Type representing the overall health of the app's connections to external services.
 */
export type HealthCheckResponse = {
    slackHealth: ServiceHealthResponse;
    notionHealth: ServiceHealthResponse;
    llmHealth: ServiceHealthResponse;
}

/**
 * Makes trivial API calls to Notion, Slack, and the LLM to check connection health.
 * @returns The status of each external service, and error messages if applicable.
 */
export async function healthCheck(): Promise<HealthCheckResponse> {
    // TODO replace these with repo method calls once we have repos set up
    // TODO write some kind of tests for this

    let slackHealth: ServiceHealthResponse;
    try {
        const slackResponse = await fetchSlackUsersRaw();
        slackHealth = {
            ok: slackResponse.ok
        };
    }
    catch (error) {
        slackHealth = {
            ok: false,
            error: error
        };
    }

    let notionHealth: ServiceHealthResponse;
    try {
        const notionResponse = await notion.users.list({});
        notionHealth = {
            ok: true
        };
    }

    catch (error) {
        notionHealth = {
            ok: false,
            error: error
        };
    }

    let llmHealth: ServiceHealthResponse;
    try {
        const llmResponse = await model.invoke([new HumanMessage("Health check: say hello")]);
        llmHealth = {
            ok: true
        };
    }
    catch (error) {
        llmHealth = {
            ok: false,
            error: error
        };
    }

    return {
        slackHealth: slackHealth,
        notionHealth: notionHealth,
        llmHealth: llmHealth
    }
}
