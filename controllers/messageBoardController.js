import {
  getAllMessages,
  insertNewMessage,
  getMessageById,
} from "../db/queries.js";

async function getIndex(req, res) {
  const messages = await getAllMessages();
  res.render("index", { messages });
}

const getNewMessageForm = (req, res) => {
  res.render("form");
};

async function createMessagePost(req, res) {
  const { username, message } = req.body;
  await insertNewMessage(username, message);
  res.redirect("/");
}

async function getMessageDetails(req, res) {
  const id = req.params.id;
  const msg = await getMessageById(id);

  if (msg) {
    return res.render("message-details", { msg });
  }
  return res.status(404).render("not-found-page");
}

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
  createMessagePost,
  getMessageDetails,
  handleMessageLike,
  notFoundPage,
};
