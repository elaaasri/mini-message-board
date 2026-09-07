import { Router } from "express";
import {
  getIndex,
  getNewMessageForm,
  createMessage,
} from "../controllers/messageBoardController.js";

const messageRoutes = Router();

messageRoutes.get("/", getIndex);
messageRoutes.get("/new", getNewMessageForm);
messageRoutes.post("/new", createMessage);

export { messageRoutes };
