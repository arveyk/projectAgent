import { ChatAnthropic } from "@langchain/anthropic";
import { Client } from "@notionhq/client";
import { NOTION_API_KEY, ANTHROPIC_MODEL_VER, ANTHROPIC_API_KEY } from "../../env";
import { fetchSlackUsersRaw } from "../../externalService/slackApiService";
import { HumanMessage } from "@langchain/core/messages";

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
    const notion = new Client({
        auth: NOTION_API_KEY,
        notionVersion: "2025-09-03",
    });

    const model = new ChatAnthropic({
        model: ANTHROPIC_MODEL_VER,
        temperature: 0,
        apiKey: ANTHROPIC_API_KEY,
    });

    const slackHealth: ServiceHealthResponse = await slackHealthCheck();
    const notionHealth: ServiceHealthResponse = await notionHealthCheck(notion);
    const llmHealth: ServiceHealthResponse = await langchainAnthropicHealthCheck(model);

    return {
        slackHealth: slackHealth,
        notionHealth: notionHealth,
        llmHealth: llmHealth
    }
}

export async function langchainAnthropicHealthCheck(model: ChatAnthropic) {
    let llmHealth: ServiceHealthResponse;
    try {
        // TODO replace this with a service method call once we have LLMService set up
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
    return llmHealth;
}

export async function notionHealthCheck(notion: Client) {
    let notionHealth: ServiceHealthResponse;
    try {
        // TODO replace this with a repo method call once we have NotionRepo set up
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
    return notionHealth;
}

export async function slackHealthCheck() {
    let slackHealth: ServiceHealthResponse;
    try {
        // TODO replace this with a repo method call once we have SlackRepo set up
        const slackResponse = await fetchSlackUsersRaw();
        slackHealth = {
            ok: slackResponse.ok,
            error: slackResponse.error ? slackResponse.error : undefined
        };
    }
    catch (error) {
        slackHealth = {
            ok: false,
            error: error
        };
    }
    return slackHealth;
}
