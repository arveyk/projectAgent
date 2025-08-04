import { app } from "../index.js";
const request = require('supertest');

import payload_good from '../test-data/payloads/payload-good.json' with { type: 'json' };
import payload_bad_not_task from '../test-data/payloads/payload-bad-not-task.json' with { type: 'json' };
import payload_bad_from_app from '../test-data/payloads/payload-bad-from-app.json' with { type: 'json' };
import payload_bad_channel_join from '../test-data/payloads/payload-bad-channel-join.json' with { type: 'json' };
import payload_good_feed_cats from '../test-data/payloads/payload-good-feed-cats.json' with { type: 'json' };
import payload_good_trash_task from '../test-data/payloads/payload-good-trash-task.json' with { type: 'json' };

// TODO more tests
describe('POST /events with a valid payload', () => {
    it('sends 200 OK', async () => {
        console.log(JSON.stringify(payload_good));
        expect(payload_good).toBeDefined;
        expect(typeof payload_good).toBe("object");

        const res = await request(app)
        .post('/events')
        .send(payload_good)
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /events with an invalid payload from an app', () => {
    it('sends 200 OK', async () => {
        console.log(JSON.stringify(payload_bad_from_app));
        expect(payload_bad_from_app).toBeDefined;
        expect(typeof payload_bad_from_app).toBe("object");

        const res = await request(app)
        .post('/events')
        .send(payload_bad_from_app)
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /events with an invalid payload that is a channel join message', () => {
    it('sends 200 OK', async () => {
        console.log(JSON.stringify(payload_bad_channel_join));
        expect(payload_bad_channel_join).toBeDefined;
        expect(typeof payload_bad_channel_join).toBe("object");

        const res = await request(app)
        .post('/events')
        .send(payload_bad_channel_join)
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /events with the payload that used to break in production', () => {
    it('sends 200 OK', async () => {
        console.log(JSON.stringify(payload_good_feed_cats));
        expect(payload_good_feed_cats).toBeDefined;
        expect(typeof payload_good_feed_cats).toBe("object");

        const res = await request(app)
        .post('/events')
        .send(payload_good_feed_cats)
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /events with a new task', () => {
    it('sends 200 OK', async () => {
        console.log(JSON.stringify(payload_good_trash_task));
        expect(payload_good_trash_task).toBeDefined;
        expect(typeof payload_good_trash_task).toBe("object");

        const res = await request(app)
        .post('/events')
        .send(payload_good_trash_task)
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})