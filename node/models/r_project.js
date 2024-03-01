import express from "express";
import {
  deleteProject,
  getProject,
  getProjects,
  insertProject,
  updateProject,
} from "../controllers/project.js";

const router3 = express.Router();

router3.get("/", getProjects);
router3.get("/:id", getProject);
router3.post("/", insertProject);
router3.put("/:id", updateProject);
router3.delete("/:id", deleteProject);

export default router3;
