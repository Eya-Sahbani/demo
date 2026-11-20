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
/**
 * @openapi
 * /api/tasks/{id}:
 *   get:
 *     summary: Récupérer une tâche par ID (admin uniquement)
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID MongoDB de la tâche
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tâche trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskResponse'
 *       401:
 *         description: Non authentifié
 *       403:
 *         description: Accès refusé (non admin)
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         description: Erreur serveur (ex. ID invalide)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/:id", getTaskById);
//router.get("/:id", requireAuth, isAdmin, getTaskById);
router.get("/", getAllTasks);
/**
 * @openapi
 * /api/tasks:
 *   post:
 *     summary: Créer une tâche
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *           example:
 *             title: Réviser le cours
 *             description: Chapitres 1 à 3
 *             completed: false
 *     responses:
 *       201:
 *         description: Tâche créée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */
router.post("/", createTask);
router.patch("/:id", updateTask);

router.delete(":id", deleteTask);
export default router;
