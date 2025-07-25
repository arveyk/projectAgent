import { app } from "../index.js";
const request = require('supertest');
import { screenMessage } from './events';

import payload_good from '../payloads/payload-good.json' with { type: 'json' };
import payload_bad_from_app from '../payloads/payload-bad-from-app.json' with { type: 'json' };
// console.log(JSON.stringify(payload_good));
// console.log(JSON.stringify(payload_bad_from_app));

describe('Test screenMessage with a message containing a task assignment', () => {
    it('Returns true, along with the parsed task', () => {
        console.log(JSON.stringify(payload_good));
        expect(payload_good).toBeDefined;
        expect(typeof payload_good).toBe("object");

        const result = screenMessage(payload_good);
        console.log(`(in test) result: ${result}`);
        expect(typeof result).toBe("object");
        expect(result.isTask).toBeDefined;
        expect(result.isTask).toBe(true);
        expect(result.parsedTask).toBeDefined;
    })
})

// TODO figure out why this request is always undefined
describe('Test screenMessage with a message containing no task assignment', () => {
    it('Returns false', () => {
        console.log(JSON.stringify(payload_bad_from_app));
        expect(payload_bad_from_app).toBeDefined;
        expect(typeof payload_bad_from_app).toBe("object");

        const result = screenMessage(payload_bad_from_app);
        expect(typeof result).toBe("boolean");
        expect(result).toBe(false);
    })
})

// TODO figure out why this request is always undefined
describe('POST /events with a valid payload', () => {
    it('sends 200 OK', async () => {
        console.log(JSON.stringify(payload_good));
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