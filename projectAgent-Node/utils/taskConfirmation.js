import axios from "axios";
import { createBlockNewTask } from "../blockkit/createBlocks.js";

export const confirmationCreateTask = async function(task) {
    const taskBlock = createBlockNewTask(task, url);
	console.log(`block create by task$${JSON.stringify(taskBlock)}`);
  const res = await axios.post(
    url,
    {data: taskBlock}
  );
  
  return res;
}