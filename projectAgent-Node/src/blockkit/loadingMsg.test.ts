/**
 *  MOCKING ENV VARIABLES TO ALLOW TEST TO RUN
 */
jest.mock("../env", () => {
  return {
    SLACK_BOT_TOKEN: "fake_bot_token",
    SLACK_SIGNING_SECRET: "fake_signing_secret", //pragma: allowlist secret
    NOTION_API_KEY: "fake_notion_key", //pragma: allowlist secret
  };
});
import { createLoadingMessageBlock } from "./loadingMessage";

describe("tests createBlockLoadingMsg", () => {
  it("Returns a block with the correct loading message", () => {
    const msg = "Test Message";
    const block = createLoadingMessageBlock(
      msg,
      "Test message for creating a loading message response",
    );
    console.log(JSON.stringify(block));
    expect(block).toMatchObject({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `> ${"Test message for creating a loading message response"}\n\n:arrows_counterclockwise: Test Message…`,
          },
        },
      ],
    });
  });
});
