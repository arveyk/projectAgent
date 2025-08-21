import dotenv from "dotenv";
import { getNotionUsers }  from "./getNotionUsers.js";
import { getSlackUsers } from "./getUsers.js";

//import { notionUsers, slackUsers } from "../../storage/users.js";
const notionUsers = await getNotionUsers();
const slackUsers = await getSlackUsers();

//const notionUsers = ;
//const slackUsers = ;
const tasks = [
  {
    name: "@Danil D",
    email: "daniel@solutional.com"
  },
  {
    name: "Bill Jones",
    email: "billjones@gmail.com"
  },
  {
    name: "@Ceci Kurdelak",
    email: "@ceci.kurdelak@solutional.com"
  },
  {
    name: "Emily",
    email: ""
  },
  {
     name: "Cecilia Omondi",
     email: "ceciliaomosh@yahoo.com"
  },
  {
    name: "Harvey Kisiangani",
    email: "harvey@gmail.com"
  },
  {
    name: "Bob Fischer",
    email: ""
  },
  {
    name: "Bobby",
    email: "bobbybrown@outlook.com"
  }
]

const humanUsers = [];
notionUsers.forEach((user) => {
  if (user.type === "person") {
    humanUsers.push({
      name: user.name,
      email: user.person.email,
      source: "notion"
     });
   }
});

const usersArr = [];

slackUsers.forEach((element) => {
  if (element.is_bot !== true) {
    //console.log(
    //  `realname: ${element.real_name}, email: ${element.profile.email}, phone:${element.profile.phone}`,
    //);
    usersArr.push({
      name: element.name,
      email: element.email,
      phone: element.phone,
      source: "slack"
    });
  }
})

//console.log(usersArr, humanUsers);

let searchRes = [];
tasks.forEach(task => {
  usersArr.forEach((user) => {
    if (task.name.replace("@", '') === user.name.replace("@", '')) {
     // console.log("Matching user",user)
     searchRes.push(user)
    }
  });
  humanUsers.forEach((person) => {
    if (person.name.replace("@", '') === task.name.replace("@", '')) {
    //   console.log("Matching Person", person);
    searchRes.push(person);
    }
  });
  return searchRes;
});
console.log(searchRes);
