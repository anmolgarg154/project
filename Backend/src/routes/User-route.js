import { Router} from "express";
import { LoginUser, LogoutUser, registerUser } from "../controller/User-Controller.js";
import { verifyJWT } from "../middleware/auth-middleware.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(
    
    LoginUser
);

router.route("/logout").post(verifyJWT, LogoutUser)


export default router;
