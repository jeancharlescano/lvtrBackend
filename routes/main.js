import { Router } from "express";

import homework from "./homework.routes.js";
import admin from "./admin.routes.js";

const router = Router();

//creation de la route pour l'api
router.use("/homeworks", homework);
router.use("/admin", admin);

export default router;
