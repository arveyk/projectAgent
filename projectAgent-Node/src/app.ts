import { PORT } from "./env";

import express from "express";
import router from "./middlerouter";

const APP_PORT = parseInt(PORT);

const expressApp = express();

expressApp.use(router);
console.log("We are using the router");

expressApp.use((request, response, next) => {
  console.log(`${Date.now()}`);
  next();
});

export { expressApp as app };
