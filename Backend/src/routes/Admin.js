import express from "express";
import { verifyJWT } from "../middleware/auth-middleware.js";
import { isAdmin } from "../middleware/admin.js";
import { getAllUsers } from "../controller/User-Controller.js";

const router = express.Router();

router.get("/users", verifyJWT, isAdmin, getAllUsers);

export default router;