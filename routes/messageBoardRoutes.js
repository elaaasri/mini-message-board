import { Router } from "express";
import {
  getIndex,
  getNewMessageForm,
  createMessage,
  messageDetails,
  handleMessageLike,
} from "../controllers/messageBoardController.js";

const messageBoardRouter = Router();

messageBoardRouter.get("/", getIndex);
messageBoardRouter.post("/likes/:user", handleMessageLike);
messageBoardRouter.get("/new", getNewMessageForm);
messageBoardRouter.post("/new", createMessage);
messageBoardRouter.get("/:user", messageDetails);

export { messageBoardRouter };
