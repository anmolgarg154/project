import { Router} from "express";
import { LoginUser, registerUser } from "../controller/User-Controller.js";
import { createCourse } from "../controller/Course-controller.js";
import {upload} from "../middleware/upload.middleware.js"

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(LoginUser);

router.route("/create").post(
  upload.single("image"), // field name from frontend
  createCourse
);

// get all courses
router.get("/all", async (req, res) => {
  const courses = await createCourse.find();
  res.json(courses);
});

// get single course by custom id
router.get("/:id", async (req, res) => {
  const course = await createCourse.findOne({ id: req.params.id });
  res.json(course);
});


export default router;
