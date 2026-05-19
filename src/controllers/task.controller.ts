import { type Request, type Response } from "express";
import { taskSchemaZod, idTaskSchemaZod } from "../schemas/task.schemas.js";
import { createTask, listTasks, getTaskById, updateTask } from "../services/task.service.js";

export async function createTaskController(req: Request, res: Response) {

  try {
    const task = await createTask(req.body);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function listTasksController(req: Request, res: Response) {
  try {
    const tasks = await listTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
}

export async function getTaskController(req: Request, res: Response) {
  try {
    const id  = Number(req.params.id);
    const task = await getTaskById(id);
    return res.status(200).json(task);

  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateTaskController(req: Request, res: Response) {
   console.log('params:', req.params);
    console.log('body:', req.body);
  try {
    const id = Number(req.params.id);
    const task = await updateTask(id, req.body);
    return res.status(200).json(task);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json( {error: error.message });
    }
    return res.status(500).json( {error: "Internal server error "});
  }
}