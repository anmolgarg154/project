import { Router} from "express";
import { LoginUser, registerUser } from "../controller/User-Controller.js";
import { createCourse } from "../controller/Course-controller.js";
import {upload} from "../middleware/upload.middleware.js"

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(LoginUser);

// router.route("/create").post(
//   upload.single("image"), // field name from frontend
//   createCourse
// );


export default router;
