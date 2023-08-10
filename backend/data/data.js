const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Shivam",
        email: "Shivam@gmail.com",
      },
      {
        name: "Shiv",
        email: "Shiv@gmail.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Shivam",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Shiv",
        email: "Shiv@gmail.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Shiva",
        email: "Shiva@gmail.com",
      },
      {
        name: "Shiv",
        email: "Shiv@gmail.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Shiva",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Shivam",
        email: "Shivam@gmail.com",
      },
      {
        name: "Shiv",
        email: "Shiv@gmail.com",
      },
      {
        name: "Shiva",
        email: "Shiva@gmail.com",
      },
    ],
    _id: "647df92a70eae6e205998e9a",
    chatName: "Test Group",
    groupAdmin: {
      name: "Shiv",
      email: "Shiv@gmail.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = {chats};