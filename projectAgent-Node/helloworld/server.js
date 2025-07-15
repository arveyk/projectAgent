import { json } from 'express';
import express from 'express';
import router from './index.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server's ears on port: ${PORT}`);
});

export { app };
