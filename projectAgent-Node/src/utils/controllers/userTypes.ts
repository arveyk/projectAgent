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

/**
 * Notion users identified and ambiguous for a task.
 */
export type FoundUsers = {
  identifiedUsers: NotionUser[];
  ambiguousUsers: NotionUser[];
};

/**
 * A person without a user id.
 */
export type PersonNoId = {
  name: string;
  email?: string;
};

