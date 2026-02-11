import { containsSensitiveNgrams } from "./containsSensitiveNgrams";
import { exampleProjectRaw } from "../../test-data/projects/example-projectRaw";
import { isFullPage, PageObjectResponse } from "@notionhq/client";

describe("containsSensitiveNgrams", () => {
  it("should return true if the page contains a sensitive n-gram", () => {
    if (!isFullPage(exampleProjectRaw))
      throw new Error("exampleProjectRaw is not a full page");
    const sensitiveNgrams = ["password", "secret"];
    const withSensitive: PageObjectResponse = {
      ...exampleProjectRaw,
      properties: {
        ...exampleProjectRaw.properties,
        "Project name": {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Jet Propulsion Redesign with seC R E T",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Jet Propulsion Redesign with seC R E T",
              href: null,
            },
          ],
        },
      },
    };
    expect(containsSensitiveNgrams(withSensitive, sensitiveNgrams)).toBe(true);
  });

  it("should return false if the page does not contain a sensitive n-gram", () => {
    if (!isFullPage(exampleProjectRaw))
      throw new Error("exampleProjectRaw is not a full page");
    const sensitiveNgrams = ["password", "secret"];
    expect(containsSensitiveNgrams(exampleProjectRaw, sensitiveNgrams)).toBe(
      false,
    );
  });
});
