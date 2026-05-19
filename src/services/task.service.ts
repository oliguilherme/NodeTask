import * as z from 'zod';
import { taskSchemaZod, idTaskSchemaZod, updateSchemaZod } from "../schemas/task.schemas.js";
import { prisma } from "../../lib/prisma.js";

type Task = z.infer< typeof taskSchemaZod >

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

type UpdateTask = z.infer< typeof updateSchemaZod >

export async function updateTask(id: number, data: UpdateTask ) {
  const exists = await getTaskById(id);

  if (!exists) {
    throw new Error("Task not found!");
  }
  const taskUpdated = prisma.task.update({
    where: { id },
    data: {
      //se a primeira condicção é verdadeira, entao o data.tile é acrescentado ao objeto
      ...(data.title !== undefined && { title: data.title }), 
      ...(data.done !== undefined && { done: data.done }),
      ...(data.priority !== undefined && { priority: data.priority })
    }
  });
  return taskUpdated;
}
