import { Router } from "express";
import { validateZod } from "../middlewares/validate.middleware.js";
import { taskSchemaZod, idTaskSchemaZod } from "../schemas/task.schemas.js";
import { createTaskController, listTasksController, getTaskController } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", validateZod(taskSchemaZod, 'body'), createTaskController);
taskRouter.get("/list-tasks", listTasksController);
taskRouter.get("/get-task/:id", validateZod(idTaskSchemaZod, 'params'), getTaskController);
// taskRouter.patch("/update-task/:id");

export default taskRouter;