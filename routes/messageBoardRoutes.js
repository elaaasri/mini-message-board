import { Router } from "express";
import {
  getIndex,
  getNewMessageForm,
  createMessagePost,
  getMessageDetails,
  handleMessageLike,
  notFoundPage,
} from "../controllers/messageBoardController.js";
import { body } from "express-validator";

const messageBoardRouter = Router();
const validateUser = [
  body("username").trim().notEmpty().withMessage("Required Username!"),
  body("message").trim().notEmpty().withMessage("Required Message!"),
];

messageBoardRouter.get("/", getIndex);
messageBoardRouter.get("/new", getNewMessageForm);
messageBoardRouter.post("/new", validateUser, createMessagePost);
messageBoardRouter.get("/:id", getMessageDetails);
messageBoardRouter.post("/likes/:id", handleMessageLike);
messageBoardRouter.use(notFoundPage);

export { messageBoardRouter };
