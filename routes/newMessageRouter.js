import { Router } from "express";
import { newMessageController } from "../controllers/newMessageController.js";

const newMessageRouter = Router();

newMessageRouter.get("/", newMessageController);

export { newMessageRouter };
