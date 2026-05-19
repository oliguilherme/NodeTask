import type { Request, Response, NextFunction } from 'express';
import { type ZodType } from 'zod';

//cria a funcao e exporta ela. 
//dois parametros: schema, source, que pode ser body | params | query
//retorna uma arrow function, com os parametros req, res, next
  //faz a verificação com o safeParse, passando como argumento o req[source]
  //verifica com if se a operação foi mal sucedida (!result.sucess)
  //passa o result.data para req[source]
  //chama next();

export function validateZod(schema: ZodType, source: 'body' | 'params' | 'query') {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[source]); 

    if (!result.success) {
      return res.status(400).json({ error: result.error.flatten() });
    }

    req[source] = result.data;

    next();
  }
}