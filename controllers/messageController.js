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

const newMessageController = (req, res) => {
  console.log("zbe", req.body);
  res.render("form");
};

export { getIndex, newMessageController };
