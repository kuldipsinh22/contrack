import express from "express";
import { gettaskinjoin } from "../controllers/taskjoin";

const router10 = express.Router();

router10.get("/", gettaskinjoin);

export default router10;
