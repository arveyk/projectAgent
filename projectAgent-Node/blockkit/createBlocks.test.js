import { createBlockNewTask } from "./createBlocks";

import { task, task_in_db, task_in_db_reworded, task_not_in_db } from '../test-data/tasks/example-tasks';

describe('Test createBlockNewTask with a valid task object', () => {
    it('returns blocks containing the task data', async () => {
        expect(task).toBeDefined();
        const blocks = await createBlockNewTask(task);
        console.log(JSON.stringify(blocks));
    })
})