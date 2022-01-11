import { Router } from "express";

const router = Router();

import {
    createHomework,
    getAllHomeworks,
    getHomeworkById,
    deleteHomeworkById
} from "../controller/homework.controller.js"

router.post("/", createHomework);
router.get("/", getAllHomeworks);
router.post("/", getHomeworkById);
router.post("/delete", deleteHomeworkById);

export default router;