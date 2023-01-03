//Import Router from express
import Router from "express";

import {
  getTasks,
  addTasks,
  getTasksById,
  updateTasksById,
  deleteTaskById,
} from "../controller/todos.js";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTasksById);

router.post("/", addTasks);

router.delete("/:id", deleteTaskById);

router.put("/:id", updateTasksById);

export default router;
