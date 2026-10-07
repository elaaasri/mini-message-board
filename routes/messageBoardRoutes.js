import { Router } from "express";
import {
  getIndex,
  getNewMessageForm,
  createMessage,
  messageDetails,
  handleMessageLike,
  notFoundPage,
} from "../controllers/messageBoardController.js";

const messageBoardRouter = Router();

messageBoardRouter.get("/", getIndex);
messageBoardRouter.get("/new", getNewMessageForm);
messageBoardRouter.post("/new", createMessage);
messageBoardRouter.get("/:user", messageDetails);
messageBoardRouter.post("/likes/:user", handleMessageLike);
messageBoardRouter.use(notFoundPage);

export { messageBoardRouter };
