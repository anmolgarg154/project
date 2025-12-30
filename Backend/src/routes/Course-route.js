import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  getSingleCourse
} from "../controller/Course-controller.js";

import { upload } from "../middleware/upload.middleware.js";

const router = Router();

router.route("/create").post(
  upload.single("image"), // field name from frontend
  createCourse
);


router.get("/all", getAllCourses);

router.get("/:id", getSingleCourse);

export default router;
