const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    likes: 0,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    likes: 0,
  },
];

const getIndex = (req, res) => {
  res.render("index", { messages });
};

const handleMessageLike = (req, res) => {
  const user = req.body.user;
  const message = messages.find((m) => m.user == user);
  message.likes++;
  console.log(message.likes);
  res.sendStatus(200);
};

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

const getMessageObjByUser = (user) => {
  return messages.find((message) => message.user == user);
};

export {
  getIndex,
  getNewMessageForm,
  createMessage,
  getMessageObjByUser,
  handleMessageLike,
};
