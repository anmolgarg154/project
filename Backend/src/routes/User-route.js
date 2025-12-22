import { Router} from "express";
import { registerUser } from "../controller/User-Controller.js";

const router = Router();

router.route("/register").post(registerUser)

export default router;
