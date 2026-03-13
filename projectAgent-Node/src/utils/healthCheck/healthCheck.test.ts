// import { notionHealthCheck, slackHealthCheck, langchainAnthropicHealthCheck } from "./healthCheck";
// import { Client as client } from "@notionhq/client";

// // TODO create mocks for the API calls
// // const fakeNotionSuccessful = {
// //     Client: jest.fn(() => {
// //         users: jest.fn(() => {
// //             list: jest.fn(
// //                 (params: {}) => "hello",
// //             )
// //         })
// //     })
// // }

// // const fakeNotionSuccessful = (jest.fn(() => {
// //     return {
// //         Client: class {
// //             users = {
// //                 list: jest.fn(
// //                     (params: {}) => "hello",
// //                 ),
// //             };
// //         },
// //     };
// // }))


// const fakeNotionError = (jest.fn(() => {
//     return {
//         Client: class {
//             users = {
//                 list: jest.fn(
//                     (params: {}) => {
//                         throw new Error("Error for testing");
//                     },
//                 ),
//             };
//         },
//     };
// }))

// describe("Tests notionHealthCheck", () => {
//     beforeEach(() => {
//         jest.resetModules();
//         jest.clearAllMocks();
//     })
//     it("Should return ok: true", async () => {
//         const fakeNotion = jest.spyOn(client, 'users.list').mockReturnValue("hello");
//         const resp = await notionHealthCheck(fakeNotion);
//         expect(resp.ok).toBeTruthy();
//     })
//     it("Should return ok: false and an error", async () => {
//         const fakeNotion = new Client();
//         const resp = await notionHealthCheck(fakeNotion);
//         expect(resp.ok).toBeFalsy();
//     })
// })
