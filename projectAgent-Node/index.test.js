import { app } from "./index.js";
import { createRequest, createResponse } from 'node-mocks-http';
const request = require('supertest');

import payload_good from './payloads/payload-good.json' with { type: 'json' };
import payload_bad_token from './payloads/payload-bad-token.json' with { type: 'json' };
import payload_bad_formatting from './payloads/payload-bad-formatting.json' with { type: 'json' };

describe('GET /', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .get('/')
        
        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST / with a valid payload', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/')
        .send(payload_good)
        .set('Accept', 'application/json')
        
        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST / with an invalid payload with a bad token', () => {
    it('sends 401 Unauthorized', async () => {
        const res = await request(app)
        .post('/')
        .send(payload_bad_token)
        .set('Accept', 'application/json')
        
        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(401);
    })
})

describe('POST / with an invalid payload with a formatting error', () => {
    it('sends 400 Bad Request', async () => {
        const res = await request(app)
        .post('/')
        .send(payload_bad_token)
        .set('Accept', 'application/json')
        
        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(400);
    })
})

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

describe('POST /slashcmd with a valid payload', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/slashcmd')
        .send(payload_good)
        .set('Accept', 'application/json')
        
        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /tasks/newtask with a valid payload', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/tasks/newtask')
        .send(payload_good)
        .set('Accept', 'application/json')
        
        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
        // TODO expect json of the new task
    })
})

describe('POST /tasks/update with a valid payload', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/tasks/update')
        .send(payload_good)
        .set('Accept', 'application/json')

        //console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
        //TODO expect json of the updated task
    })
})