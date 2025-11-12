import serverlessExpress from '@codegenie/serverless-express';
import { app } from "./index";
exports.handler = serverlessExpress({ app });