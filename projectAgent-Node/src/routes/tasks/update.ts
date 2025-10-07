import { Request, Response, NextFunction } from "express";

const patchTaskHandler = function (
  request: Request,
  response: Response,
  next: NextFunction,
) {
  console.log("updating task");
  response.send("Updates to be confirmed... stay tuned");
  next();
};

export default patchTaskHandler;
