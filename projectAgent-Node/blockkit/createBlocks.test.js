import { createBlockNewTask } from "./createBlocks";

import { task, task_in_db, task_in_db_reworded, task_not_in_db } from '../test-data/tasks/example-tasks';

describe('Test createBlockNewTask with a valid task object', () => {
    it('returns blocks containing the task data', async () => {
        expect(task).toBeDefined();
        const blocks = await createBlockNewTask(task);
        console.log(JSON.stringify(blocks));

        expect(JSON.stringify(blocks.blocks)).toMatch(/Task Title.{1,8}Schedule meeting with customer \\n/gm);
        expect(JSON.stringify(blocks.blocks)).toMatch(/Assignee:.{1,8}Jacob\\n/gm);
        expect(JSON.stringify(blocks.blocks)).toMatch(/Due Date:.{1,8}2025-05-11\\n/gm);
        expect(JSON.stringify(blocks.blocks)).toMatch(/Start Date:.{1,8}2025-01-11\\n/gm);
        expect(JSON.stringify(blocks.blocks)).toMatch(/Phone Number:.{1,8}55-555-5555/gm);
        expect(JSON.stringify(blocks.blocks)).toMatch(/Phone Number:.{1,8}55-555-5555\\n/gm);
        expect(JSON.stringify(blocks.blocks)).toMatch(/Preferred Channel:.{1,8}Slack\\n/gm);
        expect(JSON.stringify(blocks.blocks)).toMatch(/Description:\*.{1,8}Schedule a meeting with the customer\. Check the sender's Calendly for available times\."/gm);
    })
})