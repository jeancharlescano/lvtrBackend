import { Router } from "express";

const router = Router();

import {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdminById,
  deleteAdminById,
} from "../controller/admin.controller.js";

router.post("/", createAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getAdminById);
router.get("/update/:id", updateAdminById);
router.get("/delete/:id", deleteAdminById);

export default router;
