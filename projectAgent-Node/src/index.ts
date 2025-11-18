import serverlessExpress from "@codegenie/serverless-express";
import { app } from "./app";

console.log("Exporting the wrapper:");
export const handler = serverlessExpress({
  app,
  respondWithErrors: true,
  logSettings: { level: "debug" },
});
