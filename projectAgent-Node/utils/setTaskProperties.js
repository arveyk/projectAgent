const setTitleArray = function (taskTitle) {
  return [
    {
      type: "text",
      text: {
        content: taskTitle,
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: "default",
      },
      plain_text: "Title of the task",
      href: null,
    },
  ];
};
const setAssigneeArray = function (assignee) {
  return [
    {
      type: "text",
      text: {
        content: assignee,
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        code: false,
        color: "default",
      },
      href: null,
    },
  ];
};
const setPreferredChannelArray = function (preferredChannel) {
  return [
    {
      type: "text",
      text: {
        content: preferredChannel,
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        code: false,
        color: "default",
      },
      href: null,
    },
  ];
};
const setDescriptionArray = function (description) {
  return [
    {
      type: "text",
      text: {
        content: description,
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: "default",
      },
      href: null,
    },
  ];
};
const setProjectArray = function (project) {
  return [
    {
      type: "text",
      text: {
        content: project,
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        code: false,
        color: "default",
      },
      href: null,
    },
  ];
};
export const setTaskProperties = function (taskObj, username) {
  const taskTitle = taskObj["tasktitle"];
  const assignee = taskObj["assignee"];
  const dueDate = new Date(taskObj["duedate"]).toISOString();
  const startDate = taskObj["startdate"] !== ""
    ? new Date(taskObj["startdate"]).toISOString()
    : new Date().toISOString();
  const email = taskObj["email"] || " ";
  const phoneNumber = taskObj["phonenumber"] || " ";
  const preferredChannel = taskObj["preferredchannel"] || "Slack";
  const description = taskObj["description"];
  const dateAssigned = new Date().toISOString();
  const project = taskObj["project"] || " ";

  return {
    "Task Title": {
      type: "title",
      title: setTitleArray(taskTitle),
    },
    Assignee: {
      type: "rich_text",
      rich_text: setAssigneeArray(assignee),
    },
    "Due Date": {
      type: "date",
      date: {
        start: dueDate,
      },
    },
    "Start Date": {
      type: "date",
      date: {
        start: startDate,
      },
    },
    "Phone Number": {
      type: "phone_number",
      phone_number: phoneNumber,
    },
    Email: {
      type: "email",
      email: email,
    },
    "Preferred Channel": {
      type: "rich_text",
      rich_text: setPreferredChannelArray(preferredChannel),
    },
    Description: {
      type: "rich_text",
      rich_text: setDescriptionArray(description),
    },
    "Date Assigned": {
      type: "date",
      date: {
        start: dateAssigned,
      },
    },
    Project: {
      type: "rich_text",
      rich_text: setProjectArray(project),
    },
    "Assigned By": {
      type: "rich_text",
      rich_text: username,
    },
  };
};
