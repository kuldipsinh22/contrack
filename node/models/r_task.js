import express from "express";
import {
  deleteTask,
  getTask,
  getTasks,
  insertTask,
  updateTask,
} from "../controllers/task.js";

const router4 = express.Router();

router4.get("/", getTasks);
router4.get("/:id", getTask);
router4.post("/", insertTask);
router4.put("/:id", updateTask);
router4.delete("/:id", deleteTask);

export default router4;
