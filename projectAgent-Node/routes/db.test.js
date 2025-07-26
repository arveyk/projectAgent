const request = require('supertest');
import { searchDB } from './db';
import { task } from './example-tasks';

// TODO create example tasks for testing

describe('Test searchDB with a task that is already in the database word for word', () => {
    it('returns true and the task ID from the database', async () => {
        await searchDB();
    })
})

describe('Test searchDB with a task that is already in the database, but worded slightly differently', () => {
    it('returns true and the task ID from the database', async () => {

    })
})

describe('Test searchDB with a task that is not in the database', () => {
    it('returns false', async () => {

    })
})