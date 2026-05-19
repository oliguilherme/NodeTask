import { Router } from "express";
import { validateZod } from "../middlewares/validate.middleware.js";
import { taskSchemaZod, idTaskSchemaZod, updateSchemaZod } from "../schemas/task.schemas.js";
import { createTaskController, listTasksController, getTaskController, updateTaskController } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", validateZod(taskSchemaZod, 'body'), createTaskController);
taskRouter.get("/list-tasks", listTasksController);
taskRouter.get("/get-task/:id", validateZod(idTaskSchemaZod, 'params'), getTaskController);
taskRouter.patch("/update-task/:id", validateZod(idTaskSchemaZod, 'params'), validateZod(updateSchemaZod, 'body'), updateTaskController );

export default taskRouter;