import { app } from "./index.js";
import { createRequest, createResponse } from 'node-mocks-http';

test('POST request to /events endpoint', () => {
    const req = createRequest({
        method: 'POST',
        url: '/events',
        body: {
            "assignee":"create a website",
            "challenge":"f34f35tgdsd442"
        }
    });

    const resp = createResponse();
    console.log(JSON.stringify(req));
    console.log(JSON.stringify(resp));

    app.eventsRouter.postHandler(req, resp);

    const data = resp._getJSONData();

    expect(data).statusCode.toBe("200");
})

test('POST request to /slashcmd endpoint', () => {
    
})