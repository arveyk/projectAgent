import { app } from "../index.js";
const request = require('supertest');
import postHandler from './events';

import payload_good from './payloads/payload-good.json' with { type: 'json' };


// describe('Valid payload', () => {
//     it('does something', async () => {
//         postHandler(payload_good);
//     })
// })

describe('POST /events with a valid payload', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/events')
        .send(payload_good)
        .set('Accept', 'application/json')
        
        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})