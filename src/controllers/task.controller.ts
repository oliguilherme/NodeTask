import { type Request, type Response } from "express";
import { taskSchemaZod } from "../schemas/task.schemas.js";
import { createTask } from "../services/task.service.js";

export async function createTaskController(req: Request, res: Response) {
  const taskParse = taskSchemaZod.safeParse(req.body);
  
  if (!taskParse.success) {
    return res.status(400).json({ errors: taskParse.error.flatten() })
  }

  const task = await createTask(taskParse.data);
  res.status(201).json(task);
}