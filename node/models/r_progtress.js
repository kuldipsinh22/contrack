import express from "express";
import {
  deleteProgress,
  getProgress,
  getProgressall,
  insertProgress,
  updateProgress,
} from "../controllers/progress.js";

const router6 = express.Router();

router6.get("/", getProgressall);
router6.get("/:id", getProgress);
router6.post("/", insertProgress);
router6.put("/:id", updateProgress);
router6.delete("/:id", deleteProgress);

export default router6;
