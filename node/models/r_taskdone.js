import express from "express";
import {
  deleteTaskDone,
  getTaskDone,
  getTaskDoneall,
  insertTaskDone,
  updateTaskDone,
} from "../controllers/done.js";

const router7 = express.Router();

router7.get("/", getTaskDoneall);
router7.get("/:id", getTaskDone);
router7.post("/", insertTaskDone);
router7.put("/:id", updateTaskDone);
router7.delete("/:id", deleteTaskDone);

export default router7;
