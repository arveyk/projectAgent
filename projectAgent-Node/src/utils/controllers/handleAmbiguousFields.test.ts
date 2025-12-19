import { handleAmbiguousFields } from "./handleAmbiguousFields";
import { 
  exampleUserSearchResponse,
  exampleUserSearchResponse2
} from "../../test-data/example-usersearch-response";


describe("Runs the handleAmbiguousFields function", () => {
  it("should print out if the user search attempt has multiple finds", () => {
    const blockObj = handleAmbiguousFields(exampleUserSearchResponse2);
  })
}) 
