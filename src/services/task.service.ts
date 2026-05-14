import * as z from 'zod';
import { taskSchemaZod } from "../schemas/task.schemas.js";
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
