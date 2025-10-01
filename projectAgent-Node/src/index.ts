import { PORT } from "./env.js";

import express from "express";
import router from "./middlerouter";

const APP_PORT = parseInt(PORT) || 8080;

const expressApp = express();

//expressApp.use(express.urlencoded({ extended: false }));
//expressApp.use(express.json());
expressApp.use(router);

expressApp.use((request, response, next) => {
  console.log(`${Date.now()}`);
  next();
});

expressApp.listen(APP_PORT, () => {
  console.log(`Server's ears on port: ${APP_PORT}`);
});

export { expressApp as app };
