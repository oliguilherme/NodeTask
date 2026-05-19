import { type Request, type Response } from "express";
import { taskSchemaZod, idTaskSchemaZod } from "../schemas/task.schemas.js";
import { createTask, listTasks, getTaskById } from "../services/task.service.js";

export async function createTaskController(req: Request, res: Response) {
  const taskParse = taskSchemaZod.safeParse(req.body);
  
  if (!taskParse.success) {
    return res.status(400).json({ errors: taskParse.error.flatten() });
  }

  const task = await createTask(taskParse.data);
  res.status(201).json(task);
}

export async function listTasksController(req: Request, res: Response) {
  try {
    const tasks = await listTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
}

export async function getTaskController(req: Request, res: Response) {
  const resultParse = idTaskSchemaZod.safeParse(req.params.id);

  if (!resultParse.success) {
    return res.status(400).json({ error: resultParse.error.flatten() });
  }

  try {
    const task = await getTaskById(resultParse.data);
    res.status(200).json(task);

  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
}