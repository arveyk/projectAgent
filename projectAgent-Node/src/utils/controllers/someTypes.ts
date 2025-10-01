export const users = [
  {
    name: "@Danil D",
    email: "daniel@solul.com",
  },
  {
    name: "Bill Jones",
    email: "billjones@gmail.com",
  },
  {
    name: "@Ceci Kurdelak",
    email: "@ceci.kurdk@solal.com",
  },
  {
    name: "@Nick Furry",
    email: "nick@shield.com",
  },
  {
    name: "@Nick Furry",
    email: "nickfurry@shield.com",
  },
];

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
  phone: string;
};

export type PersonsList = {
  name: string;
  email: string;
}[];

export type User = {
  source: string;
  userId?: string;
  name: string | null;
  email?: string;
};
