import { Router } from "express";

const router = Router();

import {
  createHomework,
  getAllHomework,
  getHomeworkById,
  updateHomework,
  deleteHomework,
} from "../controller/homework.controller.js";

router.post("/", createHomework);
router.get("/", getAllHomework);
router.get("/:id", getHomeworkById);
router.get("/update/:id", updateHomework);
router.get("/delete/:id", deleteHomework);

export default router;
