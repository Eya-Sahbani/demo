import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks.routes.js";
import authRouter from "./routes/auth.routes.js";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";

const swaggerFile = JSON.parse(readFileSync("./swagger-output.json", "utf-8"));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
});

app.use("/api/tasks", tasksRouter);
app.use("/api/auth", authRouter);

export default app;
