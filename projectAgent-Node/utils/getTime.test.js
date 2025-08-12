import { getUserTimezone } from "./getTime";

describe("Tests getUserTimezone with a user from the workspace", () => {
    it("Returns the user's timezone", async () => {
        const userID = "U08VADHNG0G";
        await getUserTimezone(userID);
    })
})