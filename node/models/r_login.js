import express from "express";
import { getAdmin } from "../controllers/login.js";

const router9 = express.Router();

router9.get("/", getAdmin);
export default router9;
