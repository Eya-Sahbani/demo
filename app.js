import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks.routes.js";
import authRouter from "./routes/auth.routes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
});
app.use("/api/tasks", tasksRouter);
app.use("/api/auth", authRouter);

// app.get("/",(req, res)=>{
// res.send("API en ligne....");
// }
// );

export default app;
