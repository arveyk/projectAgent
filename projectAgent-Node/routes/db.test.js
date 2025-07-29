const request = require('supertest');
import { searchDB } from './db';
import { task } from './example-tasks';

// TODO create example tasks for testing

describe('Test searchDB with a task that is already in the database word for word', () => {
    it('returns true and the task ID from the database', async () => {
        const searchResult = await searchDB(task);
        expect(searchResult.exists).toBeDefined();
        expect(searchResult.task_id).toBeDefined();
        expect(searchResult.exists).toEqual(true);
    })
})

describe('Test searchDB with a task that is already in the database, but worded slightly differently', () => {
    it('returns true and the task ID from the database', async () => {
        // TODO make a task that is worded slightly differently
        const searchResult = await searchDB(task);
        expect(searchResult.exists).toBeDefined();
        expect(searchResult.task_id).toBeDefined();
        expect(searchResult.exists).toEqual(true);
    })
})

describe('Test searchDB with a task that is not in the database', () => {
    it('returns false', async () => {
        // TODO make a task that is not in the database
        const searchResult = await searchDB(task);
        expect(searchResult.exists).toBeDefined();
        expect(searchResult.task_id).not.toBeDefined();
        expect(searchResult.exists).toEqual(false);
    })
})