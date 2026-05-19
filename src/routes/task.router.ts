import { Router } from "express";
import { validateZod } from "../middlewares/validate.middleware.js";
import { taskSchemaZod, idTaskSchemaZod, updateSchemaZod } from "../schemas/task.schemas.js";
import { taskController } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", validateZod(taskSchemaZod, 'body'), taskController.create);
taskRouter.get("/list", taskController.list);
taskRouter.get("/get/:id", validateZod(idTaskSchemaZod, 'params'), taskController.getTask);
taskRouter.patch("/update/:id", validateZod(idTaskSchemaZod, 'params'), validateZod(updateSchemaZod, 'body'), taskController.update);
taskRouter.delete("/delete/:id", validateZod(idTaskSchemaZod, 'params'), taskController.delete);

export default taskRouter;