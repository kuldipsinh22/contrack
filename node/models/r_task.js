import express from "express";
import {
  deleteTask,
  getTask,
  getTasks,
  insertTask,
  updateTask,
} from "../controllers/task.js";

const router3 = express.Router();

router3.get("/", getTasks);
router3.get("/:id", getTask);
router3.post("/", insertTask);
router3.put("/:id", updateTask);
router3.delete("/:id", deleteTask);

export default router3;
