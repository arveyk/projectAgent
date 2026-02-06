import { isValidCommand, extractRequestBody } from "./slashCommandProcessing";
import {
  payloadGood,
} from "../test-data/payloads/slashcmd/payloads";
import { event } from "../test-data/aws/aws-event";


/**
 * test failure could be due ot add prefix restriction still on
 * or length of statement to be processed still being checked
 */
describe("Tests extractBody", () => {
  it("", () => {
    const decoded = extractRequestBody(event);
  });
});

describe("Tests isValidCmd with a valid command", () => {
  it("Returns true", () => {
    const result = isValidCommand(payloadGood);

    expect(result).toBeTruthy();
  });
});


/**
 * Outdated Test since we no longer require add prefixed on the text
describe('Tests isValidCmd with a command that does not start with "add"', () => {
  it("Returns false", () => {
    const result = isValidCommand(payloadNotAdd);

    expect(result).toBeFalsy();
  });
});
*/
