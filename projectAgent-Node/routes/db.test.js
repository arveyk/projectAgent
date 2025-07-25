const request = require('supertest');
import { searchDB } from './db';

// TODO create example tasks for testing

describe('Test searchDB with a task that is already in the database word for word', () => {
    it('returns true', async () => {
        await searchDB('hello');
    })
})

describe('Test searchDB with a task that is already in the database, but worded slightly differently', () => {
    it('returns true', async () => {

    })
})

describe('Test searchDB with a task that is not in the database', () => {
    it('returns false', async () => {

    })
})