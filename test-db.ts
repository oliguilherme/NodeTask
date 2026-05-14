import "dotenv/config";
import mysql from "mysql2/promise";

const conn = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "guilherme",
  database: "TaskManagement",
  port: 3306,
});

console.log("Conectado!", await conn.execute("SELECT 1"));
await conn.end();