import { NotionUser } from "../utils/controllers/userTypes";
import { ProjectWithName } from "../utils/taskFormatting/task";
import { createMenuOptions, MenuType } from "./createBlockPartsForNewTask";

describe("Tests createMenuOptions with a list of projects", () => {
  it("Should return the options sorted alphabetically", () => {
    const projects: ProjectWithName[] = [
      {
        projectName: "Project Z",
        id: "z",
      },
      {
        projectName: "Project B",
        id: "b",
      },
      {
        projectName: "Project X",
        id: "x",
      },
      {
        projectName: "Project A",
        id: "a",
      },
    ];

    const sortedOptions: MenuType[] = [
      {
        text: {
          type: "plain_text",
          text: "*Project A*",
          emoji: true,
        },
        value: "Project_a",
      },
      {
        text: {
          type: "plain_text",
          text: "*Project B*",
          emoji: true,
        },
        value: "Project_b",
      },
      {
        text: {
          type: "plain_text",
          text: "*Project X*",
          emoji: true,
        },
        value: "Project_x",
      },
      {
        text: {
          type: "plain_text",
          text: "*Project Z*",
          emoji: true,
        },
        value: "Project_z",
      },
    ];

    const options = createMenuOptions("Projects", projects);
    console.log(JSON.stringify(options));
    expect(options).toMatchObject(sortedOptions);
  });
});

describe("Tests createMenuOptions with a list of users", () => {
  it("Should return the options sorted alphabetically", () => {
    const users: NotionUser[] = [
      {
        name: "Zelda",
        userId: "z",
        email: "zelda@email.com",
      },
      {
        name: "Bob",
        userId: "b",
        email: "bob@email.com",
      },
      {
        name: "Xan",
        userId: "x",
        email: "xan@email.com",
      },
      {
        name: "Alice",
        userId: "a",
        email: "alice@email.com",
      },
    ];

    const sortedOptions: MenuType[] = [
      {
        text: {
          type: "plain_text",
          text: "Alice (alice@email.com)",
          emoji: true,
        },
        value: '{"name":"Alice","userId":"a","email":"alice@email.com"}',
      },
      {
        text: {
          type: "plain_text",
          text: "Bob (bob@email.com)",
          emoji: true,
        },
        value: '{"name":"Bob","userId":"b","email":"bob@email.com"}',
      },
      {
        text: {
          type: "plain_text",
          text: "Xan (xan@email.com)",
          emoji: true,
        },
        value: '{"name":"Xan","userId":"x","email":"xan@email.com"}',
      },
      {
        text: {
          type: "plain_text",
          text: "Zelda (zelda@email.com)",
          emoji: true,
        },
        value: '{"name":"Zelda","userId":"z","email":"zelda@email.com"}',
      },
    ];

    const options = createMenuOptions("NotionUsers", users);
    console.log(JSON.stringify(options));
    expect(options).toMatchObject(sortedOptions);
  });
});
