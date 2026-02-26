import { EXAMPLE_ALL_SLACK_USERS } from "../../../test-data/example-slack-userids";
import { inferInputSource } from "./inferInputSource";
import { payloadHarvey, payloadExampleNoInputText } from "../../../test-data/payloads/slashcmd/payloads";
import axios from "axios";
import { EXAMPLE_CONVERSATION_HISTORY } from "../../../test-data/example-payload-conversation-history";

jest.mock("../getUsersSlack", () => {
    return {
        getSlackUsers: jest.fn().mockResolvedValue(EXAMPLE_ALL_SLACK_USERS)
    }
});
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>

describe("To test how this function infers context", () => {
beforeAll(() => {
    console.log("Run");
})
    it("Should set text value equal to that from payload", async function testInferred () {
        mockedAxios.get.mockResolvedValue({
            data: EXAMPLE_CONVERSATION_HISTORY
        });

        const inferredContext = await inferInputSource(payloadExampleNoInputText);
        expect(inferredContext).toBeDefined();
        expect(inferredContext.inferredFromPreviousContext).toBeTruthy();
        expect(inferredContext.text).toBeDefined();

        expect(inferredContext.text.includes("Channel")).toBeTruthy();
        console.log(inferredContext);

    });
    it("Should create depending on text value of payload", async function testInferred () {
        const inferredContext = await inferInputSource(payloadHarvey);
        expect(inferredContext).toBeDefined();
        expect(inferredContext.inferredFromPreviousContext).toBeFalsy();
        expect(inferredContext.text).toBeDefined();

        expect(inferredContext.text.includes("Channel")).toBeFalsy();
        console.log(inferredContext);

    });
});
