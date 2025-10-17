import { isValidCmd } from "./slashcmd";
import {
  payloadGood,
  payloadNotAdd,
  payloadTooShort,
} from "../test-data/payloads/slashcmd/payloads";
import { GetPageResponse } from "@notionhq/client";
import { getTaskProperties } from "../utils/db-search";

describe("Tests isValidCmd with a valid command", () => {
  it("Returns true", () => {
    const result = isValidCmd(payloadGood);

    expect(result).toBeTruthy();
  });
});

describe('Tests isValidCmd with a command that does not start with "add"', () => {
  it("Returns false", () => {
    const result = isValidCmd(payloadNotAdd);

    expect(result).toBeFalsy();
  });
});

describe("Tests isValidCmd with a command that is less than 5 words long", () => {
  it("Returns false", () => {
    const result = isValidCmd(payloadTooShort);

    expect(result).toBeFalsy();
  });
});
