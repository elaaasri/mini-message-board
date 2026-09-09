import { Router } from "express";
import {
  getIndex,
  getNewMessageForm,
  createMessage,
  getMessageObjByUser,
  handleMessageLike,
} from "../controllers/messageBoardController.js";

const messageBoardRouter = Router();

messageBoardRouter.get("/", getIndex);
messageBoardRouter.post("/like", handleMessageLike);
messageBoardRouter.get("/new", getNewMessageForm);
messageBoardRouter.post("/new", createMessage);
messageBoardRouter.get("/:user", (req, res) => {
  const user = req.params.user;
  const message = getMessageObjByUser(user);

  res.render("message-details", { message });
});

export { messageBoardRouter };
