import {
  getAllMessages,
  insertNewMessage,
  getMessageById,
  incrementMessageById,
} from "../db/queries.js";

async function getIndex(req, res) {
  try {
    const messages = await getAllMessages();
    res.render("index", { messages });
  } catch (err) {
    console.log(err);
    res.status(500).render("errors", {
      message: "Failed to load messages. Plase try again.",
    });
  }
}

const getNewMessageForm = (req, res) => {
  res.render("form");
};

async function createMessagePost(req, res) {
  const { username, message } = req.body;
  try {
    await insertNewMessage(username, message);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).render("errors", {
      message: "Failed to create message. Please try again.",
    });
  }
}

async function getMessageDetails(req, res) {
  try {
    const id = Number(req.params.id);
    const msg = await getMessageById(id);
    if (!msg) {
      return res.status(404).render("not-found-page");
    }
    return res.render("message-details", { msg });
  } catch (err) {
    console.log(err);
    res.status(500).render("errors", {
      message: "Failed to load message details. Please try again.",
    });
  }
}

async function handleMessageLike(req, res) {
  try {
    const id = Number(req.params.id);
    const rowCount = await incrementMessageById(id);

    if (rowCount === 0) {
      return res.status(404).render("errors", {
        message: "Message not found. Please try again.",
      });
    }

    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.status(500).render("errors", {
      message: "Failed to like message. Plase try again.",
    });
  }
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
