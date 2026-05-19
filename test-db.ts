import "dotenv/config";
import mysql from "mysql2/promise";
import { getEnv } from "./src/utils/getEnv.js";

const conn = await mysql.createConnection({
  host: getEnv('DATABASE_HOST'),
  user: getEnv('DATABASE_USER'),
  password: getEnv('DATABASE_PASSWORD'),
  database: getEnv('DATABASE_NAME'),
  port: Number(getEnv('DATABASE_PORT')),
});

console.log("Conectado!", await conn.execute("SELECT 1"));
await conn.end();