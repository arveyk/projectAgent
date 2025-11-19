import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { createBlockNewTask } from "../blockkit/createBlocks";
import { createUpdateBlock } from "../blockkit/updateBlock";
import { parseTask } from "../utils/aiagent";
import { searchDB, getTaskProperties } from "../utils/db-search";
import { sendLoadingMsg } from "../blockkit/loadingMsg";
import { findMatchingAssignees } from "../utils/controllers/userCreds";
import {
  createMultiSelectionsBlock,
  createSelectionBlock,
} from "../blockkit/create_select";
import { logTime } from "../utils/logTime";
// import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { SlashCommand } from "@slack/bolt";
import {
  convertTaskPageFromDbResponse,
  NotionTask,
  TaskPage,
} from "../utils/task";
import { GetPageResponse } from "@notionhq/client";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { getCurrentInvoke } from "@codegenie/serverless-express";

// webhook for taskmanagement channel only
const webhookURL = process.env.TASK_MANAGEMENT_WEBHOOK_URL;

const slashCmdHandler = async function (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  console.log("We are now in the slashcmd handler");
  logTime("Execution start");
  // Send OK
  response.status(200).send();

  console.log(`request: ${JSON.stringify(request)}`);

  console.log("Getting event and context:");
  const { event, context } = getCurrentInvoke();
  console.log(`Event: ${JSON.stringify(event)}\nContext: ${JSON.stringify(context)}`);

  try {
    const reqBody = request.body as SlashCommand;
    console.log(`slashCmdHandler here. Any tasks for me?
	  Request Body: ${JSON.stringify(reqBody)}`);
    console.log(`headers: ${JSON.stringify(request.headers)}`);
    // const command = request.body["command"];

    const validate = isValidCmd(reqBody);
    if (validate.isValid) {
      const response_url = reqBody["response_url"];

      // Search database
      await sendLoadingMsg("Searching Database", response_url);

      //logTime("Searching database");
      const isInDatabase = await searchDB(reqBody.text);
      //logTime("Done searching database");

      console.log("IS in database?", JSON.stringify(isInDatabase));

      await sendLoadingMsg("Parsing Task", response_url);
      const timestamp: number = Date.now();

      // logTime("Parsing task");
      const task = await parseTask(reqBody, timestamp);
      // logTime("Done parsing task");

      // Find Notion users
      const assigneeSearchResults = await findMatchingAssignees(task);

      // TODO get assigned by
      // TODO show the user the list of potential assignees found in Notion and have them choose one

      // implementing the dropdowns
      const notionTask: NotionTask = {
        taskTitle: task.taskTitle,
        // As a placeholder, just pick the first result
        assignees: task.assignees.map(
          (assignee) =>
            assigneeSearchResults
              .filter((result) => result.person === assignee)
              .map((result) => result.foundUsers[0])[0],
        ),
        // As a placeholder, make this the same as assignees
        assignedBy: task.assignees.map(
          (assignee) =>
            assigneeSearchResults
              .filter((result) => result.person === assignee)
              .map((result) => result.foundUsers[0])[0],
        ),
        dueDate: task.dueDate,
        startDate: task.startDate,
        description: task.description,
        project: task.project,
      };

      if (!isInDatabase) {
        throw new Error("Error searching database");
      }

      if (isInDatabase.exists) {
        console.log("Already in Database");

        const pageObject: GetPageResponse = await getTaskProperties(
          isInDatabase.taskId || "",
        );

        if ("properties" in pageObject) {
          const existingTask: TaskPage =
            convertTaskPageFromDbResponse(pageObject);
          console.log(
            `(slashCmdHandler) existingTask: ${JSON.stringify(existingTask)}`,
          );
          // existingTask.startDate = new Date(existingTask.startDate)

          const updateBlock = createUpdateBlock(existingTask);
          console.log("Update Block", JSON.stringify(updateBlock));

          axios({
            method: "post",
            url: reqBody["response_url"],
            data: {
              text: "Already in DB",
              blocks: updateBlock.blocks,
            },
            family: 4,
          })
            .then((resp) => {
              console.log("OK from slack", resp["status"]);
            })
            .catch((err) => {
              console.log(
                "(slashCmdHandler): Axios Error while posting updateBlock",
              );
            });
        } else {
          throw new Error("Error getting page properties");
        }
      } else {
        console.log(
          "Task to be passed to createBlockNewTask",
          JSON.stringify(notionTask),
        );

        // Select block

        let taskBlockWithSelect;
        let selections2;
        if (task.assignees.length !== 1 || task.assignees[0] === null) {
          console.log("Assignees not present, creating selection");

          // TODO Replace with search results of matching Notion users;
          const selectionBlock = createSelectionBlock(
            notionTask,
            "Major project",
            [
              { name: "Phil", email: "philippians2@gmail.com", userId: "" },
              { name: "James", email: "james1:5bond@agent", userId: "" },
              { name: "You", email: "youandi@yahoo.com", userId: "" },
              { name: "metoo", email: "meornottome@outlook.com", userId: "" },
              { name: "Abyyy", email: "", userId: "" },
            ],
          );

          //const selectBlock3 = createSelectionBlock(notionTask, "Project(s)", assigneeSearchResults)
          const selections = createMultiSelectionsBlock(
            notionTask,
            ["Phil", "James", "You", "Me", "Abyyy"],
            ["No Project"],
          );
          taskBlockWithSelect = {
            text: "Creating a new Task?",
            replace_original: true,
            blocks: selections.blocks,
          };
          selections2 = {
            text: "Creating a new Task?",
            replace_original: true,
            blocks: selectionBlock.blocks,
          };
        }
        console.log("SlashCmdHandler taskBlockWithSelect", selections2);

        const taskBlock = createBlockNewTask({
          task: notionTask,
          url: "",
          pageId: "",
        } as TaskPage);
        taskBlock.blocks[0].text
          ? (taskBlock.blocks[0].text.text += JSON.stringify(
              assigneeSearchResults || " User not in Channel",
            ))
          : console.log("First Text undefined");

        axios({
          method: "post",
          url: reqBody["response_url"],
          data: selections2 ? selections2 : taskBlock,
          family: 4,
        }).then((resp) => {
          console.log("OK from slack", resp["status"]);
        });
      }
    } else {
      axios({
        method: "post",
        url: reqBody["response_url"],
        data: {
          text: "Format: add ['Task Details']",
        },
        family: 4,
      }).then((resp) => {
        console.log(
          "OK from slack Wrong command format Though",
          resp["status"],
        );
      });
    }
  } catch (err: Error | any) {
    console.log("slachCmdHandler Error", err);
    return err;
  } finally {
    logTime("Execution finished");
  }
};

/**
 * Parses a slash command and determines if it is a valid command.
 * @param {*} reqBody Request from Slack containing a slash command
 * @returns true if the slash command is valid, else returns false.
 */
export function isValidCmd(reqBody: Request["body"]): {
  isValid: boolean;
  action?: string;
} {
  const commandParams = reqBody["text"].trim().split(" ");
  let firstArg = commandParams[0];
  let otherArgs = commandParams.slice(1, -1).join(" ");
  const isValidCmd = {
    isValid: false,
    action: "",
  };

  isValidCmd.isValid =
    (firstArg.toLowerCase() === "add" || "update") && otherArgs.length >= 5;
  firstArg === "add" ? (isValidCmd.action = "add") : "update";
  return isValidCmd;
}

export default slashCmdHandler;
