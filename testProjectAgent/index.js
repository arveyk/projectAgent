import axios from "axios";
import dotenv from "dotenv";

// Test the CloudWatch alarms by overloading the function
dotenv.config();
const REFRESHCACHE_FUNCTION_URL = process.env.REFRESHCACHE_FUNCTION_URL;

const responses = [];
for (let i = 0; i < 100; i++) {
  const res = axios.get(REFRESHCACHE_FUNCTION_URL);
  console.log(res.status);
  responses.push(res);
}
//console.log(JSON.stringify(responses.map(res => res.status)));
