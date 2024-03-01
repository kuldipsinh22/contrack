import express from "express";
import {
  deleteTaskDelay,
  getTaskDelay,
  getTaskDelayall,
  insertTaskDelay,
  updateTaskDelay,
} from "../controllers/delay.js";

const router8 = express.Router();

router8.get("/", getTaskDelayall);
router8.get("/:id", getTaskDelay);
router8.post("/", insertTaskDelay);
router8.put("/:id", updateTaskDelay);
router8.delete("/:id", deleteTaskDelay);

export default router8;
