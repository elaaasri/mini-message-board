import { Router } from "express";
import {
  getIndex,
  getNewMessageForm,
  createMessage,
  getMessageObjByUser,
} from "../controllers/messageBoardController.js";

const messageBoardRouter = Router();

messageBoardRouter.get("/", getIndex);
messageBoardRouter.get("/new", getNewMessageForm);
messageBoardRouter.post("/new", createMessage);
messageBoardRouter.get("/:user", (req, res) => {
  const user = req.params.user;
  const messageObj = getMessageObjByUser(user);

  res.render("message-details", { messageObj });
});

export { messageBoardRouter };
