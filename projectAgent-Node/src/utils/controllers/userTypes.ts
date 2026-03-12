/**
 * A Notion user.
 */
export type NotionUser = {
  userId: string;
  name: string;
  email?: string;
};

/**
 * A Slack user.
 */
export type SlackUser = {
  userId?: string;
  name: string;
  email?: string;
};

/**
 * The result of searching for a Notion user by name and/or email.
 */
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
