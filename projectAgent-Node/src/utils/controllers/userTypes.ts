import { PersonNoId } from "../taskFormatting/task";

export const task = {
  assignee: "Nick Fury",
  email: "nick@shield.com",
  tasktitle: "Avengers Initiative",
  due: "20-04-2025",
};

export type NotionUser = {
  userId: string;
  name: string;
  email?: string;
};

export type SlackUser = {
  userId?: string;
  name: string;
  email?: string;
};

export type UserSearchResult = {
  person: PersonNoId;
  foundUsers: NotionUser[];
};
