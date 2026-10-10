import { Router } from "express";
import {
  getIndex,
  getNewMessageForm,
  createMessagePost,
  getMessageDetails,
  handleMessageLike,
  notFoundPage,
} from "../controllers/messageBoardController.js";

const messageBoardRouter = Router();

messageBoardRouter.get("/", getIndex);
messageBoardRouter.get("/new", getNewMessageForm);
messageBoardRouter.post("/new", createMessagePost);
messageBoardRouter.get("/:id", getMessageDetails);
messageBoardRouter.post("/likes/:id", handleMessageLike);
messageBoardRouter.use(notFoundPage);

export { messageBoardRouter };
