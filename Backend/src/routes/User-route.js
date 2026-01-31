import { Router} from "express";
import { getDetails, LoginUser, LogoutUser, registerUser } from "../controller/User-Controller.js";
import { verifyJWT } from "../middleware/auth-middleware.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(
    
    LoginUser
);

router.route("/logout").post(verifyJWT, LogoutUser)

router.route("/profile").get(verifyJWT, getDetails)


export default router;
