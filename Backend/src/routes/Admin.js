import express from "express";
import { verifyJWT } from "../middleware/admin.js";
import { getAllUsers } from "../controller/User-Controller.js";

const router = express.Router();

router.route('/users').get(getAllUsers)
export default router;