const newMessageController = (req, res) => {
  console.log("zbe", req.body);
  res.render("form");
};

export { newMessageController };
