import { EXAMPLE_ALL_SLACK_USERS } from "../../../test-data/example-slack-userids";
import { payloadHarvey, payloadExampleNoInputText } from "../../../test-data/payloads/slashcmd/payloads";
import { EXAMPLE_CONVERSATION_HISTORY, EXAMPLE_LONG_CHAT_HISTORY } from "../../../test-data/example-payload-conversation-history";

jest.mock("../getUsersSlack", () => {
    return {
        getSlackUsers: jest.fn().mockResolvedValue(EXAMPLE_ALL_SLACK_USERS)
    }
});
jest.mock("../../../externalService/slackApiService", () => {
    return {
        getChatHistory: jest.fn()
    }
});

import { inferInputSource } from "./inferInputSource";
import { getChatHistory } from "../../../externalService/slackApiService";


const mockedGetChatHistory = jest.mocked(getChatHistory);
const timestamp = Date.now();

describe("To test how this function infers context", () => {
    beforeAll(() => {
        console.log("Run");
        jest.clearAllMocks();
    });
    it("Should create text using history, excluding bot activities and users joining/leaving channel", async () => {
        expect(EXAMPLE_LONG_CHAT_HISTORY).toBeDefined();
        mockedGetChatHistory.mockResolvedValue({
            data: EXAMPLE_LONG_CHAT_HISTORY
        } as any);

        const inferredContext = await inferInputSource(payloadExampleNoInputText, timestamp);

        console.log(inferredContext);

        expect(inferredContext).toBeDefined();

        expect(inferredContext.inferredFromPreviousContext).toBeTruthy();
        expect(inferredContext.text).toBeDefined();

        expect(inferredContext.text.includes("Channel")).toBeTruthy();

        expect(inferredContext.text.toLowerCase().includes("/timely")).toBeFalsy();

    });
    it("Should create context text from history", async () => {
        mockedGetChatHistory.mockResolvedValue({
            data: EXAMPLE_CONVERSATION_HISTORY
        } as any);

        const inferredContext = await inferInputSource(payloadExampleNoInputText, timestamp);
        expect(inferredContext).toBeDefined();
        expect(inferredContext.inferredFromPreviousContext).toBeTruthy();
        expect(inferredContext.text).toBeDefined();

        expect(inferredContext.text.includes("Channel")).toBeTruthy();
        console.log(inferredContext);

    });
    it("Should create depending on text value of payload", async function testInferred() {
        const inferredContext = await inferInputSource(payloadHarvey, timestamp);
        expect(inferredContext).toBeDefined();
        expect(inferredContext.inferredFromPreviousContext).toBeFalsy();
        expect(inferredContext.text).toBeDefined();

        expect(inferredContext.text.includes("Channel")).toBeFalsy();
        console.log(inferredContext);

    });
});
