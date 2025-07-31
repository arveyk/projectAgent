import { app } from "../index.js";
const request = require('supertest');

import payload_good from '../payloads/payload-good.json' with { type: 'json' };
import payload_bad_not_task from '../payloads/payload-bad-not-task.json' with { type: 'json' };
import payload_bad_from_app from '../payloads/payload-bad-from-app.json' with { type: 'json' };

// TODO more tests
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