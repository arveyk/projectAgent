import { EXAMPLE_RAW_USERS_RESPONSE } from "../../test-data/cache/rawUsers";
import { notionHealthCheck, langchainAnthropicHealthCheck } from "./healthCheck";
import { Client } from "@notionhq/client";
import { ChatAnthropic } from "@langchain/anthropic";
import { AIMessageChunk } from "langchain";

// TODO figure out how to test slackHealthCheck

jest.mock("@notionhq/client", () => {
  return {
    Client: class {
      users = {
        list: jest.fn(),
      };
    },
  };
});

jest.mock("@langchain/anthropic", () => {
    return {
        ChatAnthropic: class {
            invoke = jest.fn()
        }
    }
})

describe("Tests notionHealthCheck", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    })
    it("Should return ok: true", async () => {
        const fakeNotion = new Client();
        jest.spyOn(fakeNotion.users, 'list').mockResolvedValueOnce(EXAMPLE_RAW_USERS_RESPONSE);
        const resp = await notionHealthCheck(fakeNotion);
        expect(resp.ok).toBeTruthy();
    })
    it("Should return ok: false and an error", async () => {
        const fakeNotion = new Client();
        jest.spyOn(fakeNotion.users, 'list').mockImplementationOnce(() => {throw new Error("Error for testing")});
        const resp = await notionHealthCheck(fakeNotion);
        expect(resp.ok).toBeFalsy();
    })
    afterEach(() => {
        jest.clearAllMocks();    // Clears call history
        jest.resetAllMocks();    // Clears calls + implementation
        jest.restoreAllMocks();  // Fully restores original behavior
    });
})

describe("Tests langchainAnthropicHealthCheck", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    })
    it("Should return ok: true", async () => {
        const fakeAnthropic = new ChatAnthropic();
        jest.spyOn(fakeAnthropic, 'invoke').mockResolvedValueOnce(new AIMessageChunk("hello"));
        const resp = await langchainAnthropicHealthCheck(fakeAnthropic);
        expect(resp.ok).toBeTruthy();
    })
    it("Should return ok: false and an error", async () => {
        const fakeAnthropic = new ChatAnthropic();
        jest.spyOn(fakeAnthropic, 'invoke').mockImplementationOnce(() => {throw new Error("Error for testing")});
        const resp = await langchainAnthropicHealthCheck(fakeAnthropic);
        expect(resp.ok).toBeFalsy();
    })
    afterEach(() => {
        jest.clearAllMocks();    // Clears call history
        jest.resetAllMocks();    // Clears calls + implementation
        jest.restoreAllMocks();  // Fully restores original behavior
    });
})
