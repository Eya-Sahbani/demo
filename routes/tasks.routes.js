import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/tasks.controllers.js";
import { requireAuth, isAdmin } from "../middleware/auth.js";
const router = Router();
router.get("/:id", requireAuth, isAdmin, getTaskById);
router.get("/", getAllTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);

router.delete(":id", deleteTask);
export default router;
