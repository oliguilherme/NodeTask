import * as z from 'zod';
import { Priority } from '../../generated/prisma/enums.js';

export const taskSchemaZod = z.object({
  title: z.string().min(2),
  done: z.boolean(),
  priority: z.enum(Priority).default(Priority.LOW)
});

export const idTaskSchemaZod = z.object({
  id: z.coerce.number().int().positive()
});