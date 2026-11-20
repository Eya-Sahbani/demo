import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import tasksRouter from "./routes/tasks.routes.js";
import authRouter from "./routes/auth.routes.js";
import swaggerSpec from "./swagger.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
});

app.use("/api/tasks", tasksRouter);
app.use("/api/auth", authRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
