import express from "express";
import { gettaskinjoin } from "../controllers/taskjoin.js";

const router10 = express.Router();

router10.get("/", gettaskinjoin);

export default router10;
