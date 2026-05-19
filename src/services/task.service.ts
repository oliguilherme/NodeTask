import * as z from 'zod';
import { taskSchemaZod, idTaskSchemaZod } from "../schemas/task.schemas.js";
import { prisma } from "../../lib/prisma.js";

type Task = z.infer<typeof taskSchemaZod >

export async function createTask(dataTask: Task) {
  const task = await prisma.task.create({
    data: {
      title: dataTask.title,
      done: dataTask.done,
      priority: dataTask.priority
    }
  });
  
  return task;
}

export async function listTasks() {
  const tasks = await prisma.task.findMany({
    orderBy: {id: "asc"}
  });

  return tasks;
}


export async function getTaskById(id: number) {
  const task = await prisma.task.findUnique({
    where: { id: id}
  });

  if (!task) {
    throw new Error("Task not found!");
  }
  return task;
}
