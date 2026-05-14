import { Router } from "express";
import { createTaskController } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", createTaskController);

export default taskRouter;