import { Router } from "express";

import homeworks from "./homeworks.routes.js";
import users from "./users.routes.js";

const router = Router();

//creation de la route pour l'api
router.use("/homeworks", homeworks);
router.use("/user", users)

export default router;
