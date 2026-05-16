import { Router } from "express";
import { createTaskController, listTasksController } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", createTaskController);
taskRouter.get("/list-tasks", listTasksController);

export default taskRouter;