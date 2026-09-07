const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getIndex = (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
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
  });
  res.redirect("/");
};

export { getIndex, getNewMessageForm, createMessage };
