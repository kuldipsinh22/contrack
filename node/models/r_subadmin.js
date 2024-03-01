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

const router = express.Router();

router.get("/", getSub_admins);
router.get("/:id", getSub_admin);
router.put("/:id", upload.single("img"), updateSub_admin);
router.post("/", upload.single("img"), insertSub_admin);
router.delete("/:id", deleteSub_admin);
export default router;
