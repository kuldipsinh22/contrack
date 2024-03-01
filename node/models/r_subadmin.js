import express from "express";
import {
  deleteSub_admin,
  getSub_admin,
  getSub_admins,
  insertSub_admin,
  updateSub_admin,
} from "../controllers/subadmin.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router2 = express.Router();

router2.get("/", getSub_admins);
router2.get("/:id", getSub_admin);
router2.put("/:id", upload.single("img"), updateSub_admin);
router2.post("/", upload.single("img"), insertSub_admin);
router2.delete("/:id", deleteSub_admin);
export default router2;
