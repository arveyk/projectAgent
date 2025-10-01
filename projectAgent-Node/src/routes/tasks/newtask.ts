import { Request, Response, NextFunction } from "express";
const newTaskHandler = function (
  request: Request,
  response: Response,
  next: NextFunction,
) {
  console.log("creating new task...");
  response.status(201).send(
    JSON.stringify({
      taskTitle: `${request.params["taskTitle"]}`,
      assignee: `${request.params["assignee"]}`,
    }),
  );

  next();
};

export default newTaskHandler;
