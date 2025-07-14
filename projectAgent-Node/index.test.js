//import { helloHttp } from './index.js';
import { app } from "./index.js"

// test('Responds to an HTTP request with a JSON string of its request parameters', async () => {
//     const response = await fetch("http://localhost:8080/", {
//         method: "POST",
//         body: JSON.stringify({
//             user_id: 1,
//             channel_id: 2,
//             api_app_id: 3,
//             channel_idL: 4,
//             challenge: 5,
//             text: "Hello HTTP",
//         }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     const resp_body = response.body;
//     const resp_json = await response.json();

//     expect(resp_body).toBeDefined();
//     expect(resp_json).toBeDefined();
//     expect(resp_json).toMatchObject({
//         greeting: "Hello World!",
//         user_id: "1",
//         channel_id: "2",
//         api_app_id: "3",
//         channel_idL: "4",
//         challenge: "5",
//         text: "Hello HTTP"
//     })
// })

test('POST request to Slack message endpoint', () => {
    
})

test('POST request to slash command endpoint', () => {
    
})