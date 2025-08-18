import { formatSlackDate } from "./dateHandler";

describe("Tests formatSlackDate with a timestamp in ISO format with timezone offset", () => {
    it("Returns a properly formatted Slack date string", () => {
        const timestamp = "2025-08-18T14:00:00-07:00";
        const slackDateString = formatSlackDate(timestamp);

        console.log(slackDateString);
        expect(slackDateString).toMatch("<!date^1755550800^{date_long}|2025-08-18T14:00:00-07:00>");
    })
})