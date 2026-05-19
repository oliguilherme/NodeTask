import { Router } from "express";
import { createTaskController, listTasksController, getTaskController } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", createTaskController);
taskRouter.get("/list-tasks", listTasksController);
taskRouter.get("/get-task/:id", getTaskController);

export default taskRouter;