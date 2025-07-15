import { app } from "./index.js";
import { createRequest, createResponse } from 'node-mocks-http';
const request = require('supertest');

describe('GET /', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .get('/')
        .send({
            "assignee":"create a website",
            "challenge":"f34f35tgdsd442"
        })
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/')
        .send({
            "assignee":"create a website",
            "challenge":"f34f35tgdsd442"
        })
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /events', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/events')
        .send({
            "assignee":"create a website",
            "challenge":"f34f35tgdsd442"
        })
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /slashcmd', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/slashcmd')
        .send({
            "assignee":"create a website",
            "challenge":"f34f35tgdsd442"
        })
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
    })
})

describe('POST /tasks/newtask', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/tasks/newtask')
        .send({
            "assignee":"create a website",
            "challenge":"f34f35tgdsd442"
        })
        .set('Accept', 'application/json')
        
        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
        // TODO expect json of the new task
        expect(res.body).toMatchObject({
            "assignee":"create a website"
        })
    })
})

describe('POST /tasks/update', () => {
    it('sends 200 OK', async () => {
        const res = await request(app)
        .post('/tasks/update')
        .send({
            "assignee":"create a website",
            "challenge":"f34f35tgdsd442"
        })
        .set('Accept', 'application/json')

        console.log(JSON.stringify(res));

        expect(res.statusCode).toBe(200);
        //TODO expect json of the updated task
    })
})