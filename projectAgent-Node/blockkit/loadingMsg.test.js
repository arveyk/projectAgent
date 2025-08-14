import { createBlockLoadingMsg } from "./loadingMsg";

describe("tests createBlockLoadingMsg", () => {
  it("Returns a block with the correct loading message", () => {
    const msg = "Test Message";
    const block = createBlockLoadingMsg(msg);
    console.log(JSON.stringify(block));
    expect(block).toMatchObject({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `:arrows_counterclockwise: Test Message…`,
          },
        },
      ],
    });
  });
});
