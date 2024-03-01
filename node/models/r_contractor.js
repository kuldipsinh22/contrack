import express from "express";
import {
  deleteContractor,
  getContractor,
  getContractors,
  insertContractor,
  updateContractor,
} from "../controllers/contractor.js";
import multer from "multer";
let i = 1;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router5 = express.Router();

router5.get("/", getContractors);
router5.get("/:id", getContractor);
router5.put("/:id", upload.single("img"), updateContractor);
router5.post("/", upload.single("img"), insertContractor);
router5.delete("/:id", deleteContractor);
export default router5;
