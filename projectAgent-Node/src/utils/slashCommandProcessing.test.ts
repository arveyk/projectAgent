import { isValidCommand, extractRequestBody } from "./slashCommandProcessing";
import {
  payloadGood,
  payloadNotAdd,
} from "../test-data/payloads/slashcmd/payloads";
import { event } from "../test-data/aws/aws-event";


/**
 * test failure could be due to add prefix restriction still on
 * or length of statement to be processed still being checked
 */

describe("Tests extractBody", () => {
  it("", () => {
    const decoded = extractRequestBody(event);

    expect(decoded).toBeDefined();

    expect(decoded).toHaveProperty("command");
    expect(decoded).toHaveProperty("response_url");
    expect(decoded).toHaveProperty("text");
    expect(decoded).toHaveProperty("user_id");
  });
});

describe("Tests isValidCmd with a valid command", () => {
  it("Returns true", () => {
    const result = isValidCommand(payloadGood);

    expect(result).toBeTruthy();
  });
});