import {
  getAllMessages,
  insertNewMessage,
  getMessageById,
  incrementMessageById,
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

async function handleMessageLike(req, res) {
  const id = req.params.id;
  await incrementMessageById(id);
  res.sendStatus(200);
}

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
