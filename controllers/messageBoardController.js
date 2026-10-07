import { getAllMessages } from "../db/queries.js";

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//     likes: 0,
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//     likes: 0,
//   },
// ];

// id: 1,
//   username: 'elaaasri',
//   text: 'Hi There',
//   added: 2026-10-07T21:57:02.653Z,
//   likes: 0

async function getIndex(req, res) {
  const messages = await getAllMessages();
  console.log(messages);
  res.render("index", { messages });
}

const getNewMessageForm = (req, res) => {
  res.render("form");
};

const createMessage = (req, res) => {
  const { messageUser, messageText } = req.body;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
    likes: 0,
  });

  res.redirect("/");
};

const messageDetails = (req, res) => {
  const user = req.params.user;
  const message = messages.find((message) => message.user === user);

  if (message) {
    return res.render("message-details", { message });
  }
  return res.status(404).render("not-found-page");
};

const handleMessageLike = (req, res) => {
  const user = req.params.user;
  const message = messages.find((m) => m.user === user);
  message.likes++;
  res.sendStatus(200);
};

const notFoundPage = (req, res) => {
  res.status(404).render("not-found-page");
};

export {
  getIndex,
  getNewMessageForm,
  createMessage,
  messageDetails,
  handleMessageLike,
  notFoundPage,
};
