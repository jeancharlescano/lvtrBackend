import { Router } from "express";

const router = Router();

import {
    getAllHomework,
    createHomework
} from "../controller/homework.controller.js"

router.get("/", getAllHomework);
router.post("/", createHomework);

export default router;