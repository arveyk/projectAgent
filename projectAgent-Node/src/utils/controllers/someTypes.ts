export const task = {
  assignee: "Nick Furry",
  email: "nick@shield.com",
  tasktitle: "Avengers Initiative",
  due: "20-04-2025",
};

export type PersonDetails = {
  found: boolean;
  multipleFound: boolean;
  name: string;
  email: string;
};

export type PersonsList = {
  name: string;
  email: string;
}[];

export type NotionUser = {
  source: string;
  userId: string;
  name: string | null;
  email?: string;
};

export type SlackUser = {
  source: string;
  userId?: string;
  name: string | null;
  email?: string;
};
