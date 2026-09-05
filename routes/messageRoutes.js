import { Router } from "express";
import {
  getIndex,
  newMessageController,
} from "../controllers/messageController.js";

const messageRoutes = Router();

messageRoutes.get("/", getIndex);
messageRoutes.post("/new", newMessageController);

export { messageRoutes };
