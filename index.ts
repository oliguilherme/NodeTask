import "dotenv/config";
import express, { type Request, type Response } from "express";
import taskRouter from "./src/routes/task.router.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/tasks", taskRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "aaaaaaaa" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});