import express from "express";
import asyncHandler from "express-async-handler";
import axios from "axios";
import { SLACK_BOT_TOKEN } from "../env";

const app = express();
const router = express.Router();

app.use(express.json());
router.use(express.json());

const eventResURL = "https://slack.com/api/chat.postMessage";

const postHandler = async function (request, response, next) {
  try {
    console.log(
      `I Handle most events. Any tasks for me? Request: ${JSON.stringify(request.body)}`,
    );

    if (!request.body["event"]["bot_id"]) {
      const isTask = true;
      console.log(`Is task: ${isTask}`);

      if (isTask) {
        console.log("it's a task!");
        const channel_id = request.body["event"]["channel"];
        const isInDB = false;
        if (isInDB) {
          // TODO update task
          console.log("This task is already in the database.");
        } else {
          console.log(`channel: ${channel_id}`);
          await axios
            .post(
              eventResURL,
              {
                channel: channel_id,
                text: "Testing Setting headers",
              },
              {
                headers: {
                  Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
                  "Content-Type": "application/json; charset=UTF-8",
                },
              },
            )
            .then((resp) => {
              console.log("OK from slack", resp["status"]);
            });
        }
        response.status(200).send("In Try Catch Block");
      } else {
        console.log("not a task");
        response.status(500).send("Error and Body$");
      }
    }
  } catch (err) {
    console.log(err);
    return response.status(500).send(`Error and Body${JSON.stringify(err)}`);
  }
};

router.post("/test", asyncHandler(postHandler), (req, res, next) => {
  console.log("No Header set Here");
});

app.use(router);

app.listen(5050, () => {
  console.log("App listening on port ", 5050, "Anything to say?");
});
