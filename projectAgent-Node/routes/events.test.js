import { app } from "../index.js";
const request = require('supertest');
import { screenMessage } from './events';

import payload_good from '../payloads/payload-good.json' with { type: 'json' };
import payload_bad_not_task from '../payloads/payload-bad-not-task.json' with { type: 'json' };
import payload_bad_from_app from '../payloads/payload-bad-from-app.json' with { type: 'json' };

describe('Test screenMessage with a message containing a task assignment', () => {
    it('Returns true, along with the parsed task', async () => {
        //console.log(JSON.stringify(payload_good));
        expect(payload_good).toBeDefined;
        expect(typeof payload_good).toBe("object");

        const result = await screenMessage(payload_good);
        console.log(`(in test) result: ${result}`);
        expect(typeof result).toBe("object");
        expect(result.istask).toBeDefined;
        expect(result.istask).toBe(true);
        expect(result.parsedtask).toBeDefined;
    })
})

describe('Test screenMessage with a message containing no task assignment', () => {
    it('Returns false', async () => {
        expect(payload_bad_not_task).toBeDefined;
        expect(typeof payload_bad_not_task).toBe("object");

        const result = await screenMessage(payload_bad_not_task);
        console.log(`(in test) result: ${result}`);
        expect(typeof result).toBe("object");
        expect(result.istask).toBeDefined;
        expect(result.istask).toBe(false);
    })
})

describe('Test screenMessage with a message sent by a bot', () => {
    it('Returns false', async () => {
        //console.log(JSON.stringify(payload_bad_from_app));
        expect(payload_bad_from_app).toBeDefined;
        expect(typeof payload_bad_from_app).toBe("object");

        const result = await screenMessage(payload_bad_from_app);
        expect(typeof result).toBe("object");
        expect(result.istask).toBeDefined;
        expect(result.istask).toBe(false);
    })
})

describe('POST /events with a valid payload', () => {
    it('sends 200 OK', async () => {
        //console.log(JSON.stringify(payload_good));
        expect(payload_good).toBeDefined;
        expect(typeof payload_good).toBe("object");

        const res = await request(app)
        .post('/events')
        .send(payload_good)
        .set('Accept', 'application/json')
        
        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})