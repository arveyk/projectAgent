import { EXAMPLE_RAW_USERS_RESPONSE } from "../../test-data/cache/rawUsers";
import { notionHealthCheck, slackHealthCheck, langchainAnthropicHealthCheck } from "./healthCheck";
import { Client } from "@notionhq/client";

jest.mock("@notionhq/client", () => {
  return {
    Client: class {
      users = {
        list: jest.fn(),
      };
    },
  };
});

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
